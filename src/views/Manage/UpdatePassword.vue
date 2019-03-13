<template>
    <div>
        <div class="page2">
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
        },
        data() {
            return {
                msg: null,
                password1: null,
                password: null,
            }
        },
        computed: mapGetters([
            'userInfo'
        ])
    }
</script>



