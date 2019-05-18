<template>
    <div class="wrap">
        <p class="big-title">新用户注册</p>
        <div class="container-l">

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
                    <sendcode @success="valCodeTrue=$event" :phone="phone"></sendcode>
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
                        <router-link to="/user/registerbyemail">
                            <span class="text-gray2" style="margin-left: 9rem;">使用邮箱注册</span>
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
                valCodeDisabled: false,
                msg: null,
                phone: null,
                valCodeTrue: null,
                valCode: null,
                password: null,
                password1: null,
            }
        }, methods: {
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
                    phone: this.phone,
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
        },
        components: {
            sendcode: () => import('@/components/sendcode.vue'),
        }
    }
</script>

<style scoped>
    .container-l {
        height: 25.88rem;
    }
</style>
