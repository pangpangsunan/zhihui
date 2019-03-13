<template>
    <div>
        <img src="@/assets/img_logo.png">
        <div class="wrap">
            <p class="big-title">学员登陆</p>
            <div class="container-l">
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
                                <router-link to="/user/registerbyphone">
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
                this.$post('/edu/user/login', {
                    account: this.account,
                    password: this.password,
                    platform: 1,
                }, p => {
                    if (p.httpCode == 200) {
                        this.$store.commit('login', p.content)
                        this.$router.push('/')
                    } else {
                        this.msg = p.msg
                    }
                })
            }
        }
    }
</script>

