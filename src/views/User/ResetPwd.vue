<template>
    <div class="wrap">
        <p class="big-title">设置新密码</p>
        <div class="container-l">
            <form class="form-horizontal">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="password" v-model="password" class="form-control"
                               placeholder="请输入6-12位密码，支持英文字母与数字">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="password" v-model="password1" class="form-control" placeholder="再次输入新密码">
                    </div>
                </div>
                <div class="tips">
                    <span v-if="msg">{{msg}}</span>
                </div>

                <div class="form-group">
                    <div class="col-sm-12">
                        <div class="text-gray">
                            <router-link to="/user/forget">
                                <span class="text-gray1">用户登陆</span>
                            </router-link>
                            <router-link to="/user/register">
                                <span class="text-gray2">新用户注册</span>
                            </router-link>
                        </div>
                    </div>
                </div>

                <button type="submit" @click.prevent="resetpwd()" class="blue-btn">完成</button>

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
                msg: null,
                password: null,
                password1: null,
                phone: this.$store.getters.userInfo.phone
            }
        },
        methods: {
            resetpwd() {
                if (this.password != this.password1) {
                    this.msg = '两次密码不一致';
                    return;
                }
                this.sendCode(p => {
                    axios.post('/edu/user/changePassword', qs.stringify({
                        phone: this.phone,
                        code: p.content,
                        password: this.password
                    })).then(p => {
                        if (p.data.httpCode == 200) {
                            this.$router.push('/user/success')
                        } else {
                            this.msg = "接口调用失败"
                        }
                    })
                })
            },
            sendCode(callback) {
                let phone = this.phone;
                axios.post('/edu/user/sendShortMessage', qs.stringify({phone})).then(p => {
                    callback(p.data)
                })
            }
        }
    }
</script>

<style scoped>

    .container-l {
        height: 18.88rem;
    }
</style>
