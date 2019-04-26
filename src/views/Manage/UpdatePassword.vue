<template>
    <div>
        <div class="page1" v-if="page=='page1'">
            <form class="form-horizontal" @submit.prevent="bindphone()">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="text" v-model="userInfo.phone" class="form-control" placeholder="请输入手机号" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="valCode" placeholder="验证码" required
                               pattern="\d{4}">
                    </div>
                    <sendcode :phone="userInfo.phone" @success="valCodeTrue=$event"></sendcode>
                </div>
                <div class="tips">
                    <span v-if="msg">{{msg}}</span>
                </div>
                <button type="submit" class="orange-btn">绑定</button>

            </form>
        </div>
        <div class="page2" v-if="page=='page2'">
            <p>请设置新密码</p>
            <div class="bindphone-page">
                <form class="form-horizontal" @sumit.prevent="updatepwd">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="password" required v-model="password" class="form-control"
                                   placeholder="请输入6-12位密码，支持英文字母与数字">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="password" required v-model="password1" class="form-control"
                                   placeholder="再次输入新密码">
                        </div>
                    </div>
                    <div class="tips">
                        <span v-if="msg">{{msg}}</span>
                    </div>

                    <button type="submit" class="orange-btn">完成</button>

                </form>

            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<style scoped>
    p {
        margin-top: 3rem;
        text-align: center;
    }
</style>
<script>


    import {mapGetters} from 'vuex'

    export default {
        methods: {
            updatepwd() {
                if (this.password != this.password1) {
                    alert('两次密码不一致');
                    return;
                }
                this.$post('/edu/user/changePassword', {
                    phone: this.userInfo.phone,
                    email: this.userInfo.email
                }, p => {

                })
            },
            bindphone() {
                if (this.valCode == this.valCodeTrue) {
                    this.page = 'page2';
                    return;
                }
                alert("短信验证码错误");
            },
        },
        data() {
            return {
                msg: null,
                password1: null,
                password: null,
                page: 'page1',
                phone: '',
                valCode: null,
                valCodeTrue: null,
            }
        },
        created() {
            if (!this.userInfo.phone) {
                this.$router.push('/manage/bindphone')
            }
        },
        computed: mapGetters([
            'userInfo'
        ]),
        components: {
            sendcode: () => import('@/components/sendcode.vue'),
        }
    }
</script>



