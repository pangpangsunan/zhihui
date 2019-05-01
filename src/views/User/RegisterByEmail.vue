<template>
    <div class="wrap">
        <p class="big-title">新用户注册</p>
        <div class="container-l">

            <form class="form-horizontal" @submit.prevent="submit()">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="email" class="form-control" v-model="email" placeholder="邮箱号码" required>
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
                            <span class="text-gray1">用户登录</span>
                        </router-link>
                        <router-link to="/user/registerbyphone">
                            <span class="text-gray2" style="margin-left: 9rem;">使用手机注册</span>
                        </router-link>
                    </div>
                </div>

                <button type="submit" class="blue-btn">完成注册</button>

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
                msg: null,
                email: null,
                valCodeTrue: null,
                valCode: null,
                password: null,
                password1: null,
            }
        }, methods: {
            getValCode() {
                this.$post('/edu/user/sendEmail', {email: this.email}, p => {
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
                        this.msg = '邮箱验证码发送失败'
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

                this.$post('/edu/user/signIn', {
                    email: this.email,
                    password: this.password,
                    code: this.valCode,
                    roleCode: 'student',
                }, p => {
                    if (p.httpCode != 200) {
                        this.msg = p.msg;
                        return;
                    }

                    localStorage.uid = p.content;
                    this.$router.push('/user/login')
                })
            }
        }
    }
</script>

<style scoped>
    .container-l {
        height: 25.88rem;
    }
</style>
