<template xmlns="http://www.w3.org/1999/html">
    <div class="wrap">
        <p class="big-title">验证手机号</p>
        <div class="container-l">

            <form class="form-horizontal" @submit.prevent="submit()">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="text" v-model="phone" class="form-control" placeholder="请输入手机号" required
                               pattern="^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="valCode" placeholder="验证码" required
                               pattern="\d{4}">
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
                msg: null,

            }
        }, methods: {
            getValCode() {

                this.$post('/edu/user/sendShortMessage', {phone: this.phone}, p => {
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
                    localStorage.phone = this.phone;
                    localStorage.code = this.valCode
                    this.$router.push('/user/resetpwd');
                }else {
                    alert("请输入正确的信息")
                }

            }
        }
    }
</script>
