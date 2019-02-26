<template>
    <div>
        <img src="@/assets/img_logo.png">
        <div class="wrap">
            <p class="big-title">学员登陆</p>
            <div class="container">
                <form class="form-horizontal" @submit.prevent="login()">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="tel" class="form-control" v-model="account" placeholder="手机号码/用户名" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="password" class="form-control" v-model="password" placeholder="密码" required>
                        </div>
                    </div>
                    <div class="tips">
                        <span v-if="msg">{{msg}}</span>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12">
                            <div class="text-gray">
                                <router-link to="/user/forget">
                                    <span class="text-gray1">忘记密码</span>
                                </router-link>
                                <router-link to="/user/register">
                                    <span class="text-gray2">新用户注册</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="blue-btn">登录</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    //
    import axios from 'axios'
    import qs from 'querystring'

    export default {
        data() {
            return {
                account: null,
                password: null,
                msg: null
            }
        },
        methods: {
            login() {
                axios.post('/edu/user/login',
                    qs.stringify({
                        account: this.account,
                        password: this.password,
                        platform: 1,
                    })).then(p => {
                    if (p.data.httpCode == 200) {
                        localStorage.userinfo = p.data.content;
                        this.$router.push('/')
                    } else {
                        this.msg = p.data.msg
                    }
                })
            }
        }
    }
</script>

