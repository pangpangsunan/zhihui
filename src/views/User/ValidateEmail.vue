<template>
    <div class="wrap">
        <p class="big-title">验证邮箱</p>
        <div class="container-l">

            <form class="form-horizontal">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="email" v-model="email" class="form-control" placeholder="邮箱地址" required pattern="">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-8">
                        <input type="text" v-model="valCode" class="form-control" placeholder="验证码" required pattern="\d{4}">
                    </div>
                    <button type="button" class="val-btn blue-shot-btn" :disabled="valCodeDisabled"
                            @click="getValCode()">
                        {{ time }}
                    </button>
                </div>
                <div class="tips">
                    <span v-if="msg">{{msg}}</span>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <router-link to="/user/login">
                            <span class="text-gray1">用户登陆</span>
                        </router-link>
                        <router-link to="/user/register">
                            <span class="text-gray2">新用户注册</span>
                        </router-link>
                    </div>
                </div>

                    <button type="submit" class="orange-btn" @click="next()">下一步</button>
            </form>
        </div>

    </div>

</template>

<script>


    export default {
        data() {
            return {
                time: '获取验证码',
                valCodeDisabled: false,
                phone: null,
                valCode: null,
                valCodeTrue: null,
                email :null,
                msg: null,

            }
        }, methods: {
            getValCode() {

                this.$post('/edu/user/sendShortMessage', {email: this.email}, p => {
                    if (p.httpCode == 200) {
                        this.valCodeTrue = p.content;

                        this.time = '60s';
                        this.valCodeDisabled = true;
                        let intval = setInterval(() => {
                            let time = parseInt(this.time);
                            if (--time <= 0) {
                                this.time = '获取验证码';
                                clearInterval(intval);

                                this.valCodeDisabled = false;
                                return;
                            }
                            this.time = time + 's'

                        }, 1000);

                    } else {
                        this.msg = '短信验证码发送失败'
                    }
                });

            },
            submit() {

            },
            next(){
                if(this.phone&&this.valCode&&this.valCode===this.valCodeTrue){
                    localStorage.email = this.email;
                    localStorage.code = this.valCode
                    this.$router.push('/user/resetpwd');
                }else {
                    alert("请输入正确的信息")
                }

            }
        }
    }
</script>