<template xmlns="http://www.w3.org/1999/html">
    <div class="wrap">
        <p class="big-title">新用户注册</p>
        <div class="container">

            <form class="form-horizontal" @submit.prevent="submit()">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="tel" class="form-control" v-model="phone" placeholder="手机号码" required
                               pattern="^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="valCode" placeholder="验证码" required
                               pattern="\d{4}">
                    </div>
                    <button type="button" class="btn3" :disabled="valCodeDisabled" @click="getValCode()">
                        {{ time }}
                    </button>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="password" class="form-control" placeholder="密码" v-model="password" required
                        >
                        <!--pattern="^(?![^a-zA-Z]+$)(?!\d(6,12)$)"-->
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="password" class="form-control" placeholder="再次输入密码" v-model="password1" required>

                    </div>
                </div>
                <div class="tips">
                    <span v-if="msg">{{msg}}</span>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <router-link to="/user/login">
                            <span class="text-gray1">用户登陆</span>
                        </router-link>
                        <router-link to="/user/validateemail">
                            <span class="text-gray2" style="margin-left: 9rem;">使用邮箱注册</span>
                        </router-link>
                    </div>
                </div>

                <button type="submit" class="btn1">完成注册</button>

            </form>
        </div>

    </div>

</template>

<script>
    import axios from 'axios'
    import qs from 'querystring'

    export default {
        data() {
            return {
                time: '获取验证码',
                valCodeDisabled: false,
                msg: null,
                phone: null,
                valCodeTrue: null,
                valCode: null,
                password: null,
                password1: null,
            }
        }, methods: {
            getValCode() {
                axios.post('/edu/user/sendShortMessage', qs.stringify({phone: this.phone})).then(p => {
                    if (p.data.httpCode == 200) {
                        this.valCodeTrue = p.data.content;

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
                if (this.valCodeTrue != this.valCode) {
                    this.msg = '验证码错误';
                    return;
                }

                if (this.password != this.password1) {
                    this.msg = '两次密码不一致';
                    return;
                }

                axios.post('/edu/user/signIn', qs.stringify({
                    phone: this.phone,
                    password: this.password,
                    code: this.valCode,
                    roleCode: 'student',
                })).then(p => {
                    if (p.data.httpCode != 200) {
                        this.msg = p.data.msg;
                        return;
                    }

                    localStorage.uid = p.data.content;
                    this.$router.push('/user/login')
                })
            }
        }
    }
</script>

<style scoped>


    .container {
        width: 20rem;
        height: 25.88rem;
        background: #fff;
        padding: 2rem 1rem;

    }

    .col-sm-12 input {
        height: 3rem;
        background: #E5E7EF;
        border-radius: 2px;
        border: none;
    }

    #remenberpwdlink, #registerlink {
        border: none;
        color: #AAAAAA;
        letter-spacing: 0;
        font-size: .88rem;
        cursor: pointer;
    }

    #registerlink {
        margin-left: 10rem;

    }

    .btn3[disabled] {
        opacity: 0.5;
    }
</style>
