<template>
    <div>
        <div class="page1" v-show="page=='page1'">
            <p>为了您的账号安全，请绑定手机号码</p>
            <div class="bindphone-page">
                <form class="form-horizontal" @submit.prevent="bindphone()">
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
                        <sendcode :phone="phone" @success="valCodeTrue=$event"></sendcode>
                    </div>
                    <div class="tips">
                        <span v-if="msg">{{msg}}</span>
                    </div>
                    <button type="submit" class="orange-btn">绑定</button>

                </form>
            </div>
        </div>
        <div class="page2" v-show="page=='page2'">
            <p>当前已绑定手机号码：{{phone}}，要更换手机号,请先进行验证</p>
            <div class="bindphone-page">
                <form class="form-horizontal" @submit.prevent="changephone()">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="text" v-model="phone" class="form-control" placeholder="请输入手机号"
                                   required
                                   pattern="^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-8">
                            <input type="text" class="form-control" v-model="valCode" placeholder="验证码" required
                                   pattern="\d{4}">
                        </div>
                        <sendcode :phone="phone" @success="valCodeTrue=$event"></sendcode>
                    </div>
                    <div class="tips">
                        <span v-if="msg">{{msg}}</span>
                    </div>
                    <button type="submit" class="orange-btn">更换绑定</button>

                </form>
            </div>
        </div>
        <div class="page3" v-show="page=='page3'">
            <p>请绑定新的手机号码</p>
            <div class="bindphone-page">
                <form class="form-horizontal" @submit.prevent="page='page4'">
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
                        <sendcode :phone="phone" @seccess="valCodeTrue=$event"></sendcode>
                    </div>
                    <div class="tips">
                        <span v-if="msg">{{msg}}</span>
                    </div>
                    <button type="submit" class="orange-btn">完成</button>

                </form>
            </div>
        </div>
        <div class="page4" v-show="page=='page4'">
            成功！
        </div>

        <div class="clear"></div>
    </div>
</template>
<style scoped>
    p {
        text-align: center;
        margin-top: 5rem;
    }

</style>

<script>
    import {mapGetters} from 'vuex'

    export default {
        created() {
            if (this.userInfo.phone) {
                this.page = 'page2'
                this.phone = this.userInfo.phone
            } else {
                this.page = 'page1'
            }

        },
        data() {
            return {
                page: null,
                btnText: '获取验证码',
                valCodeDisabled: false,
                phone: null,
                valCode: null,
                valCodeTrue: null,
                msg: null,
                intval: null
            }

        },
        computed: mapGetters([
            'userInfo'
        ]),
        methods: {
            bindphone() {
                if (!this.phone) {
                    return
                }
                this.$post('/edu/user/bindingPhone', {
                    uid: this.userInfo.id,
                    phone: this.phone,
                    code: this.valCode
                }, p => {
                    if (p.httpCode == 200) {
                        alert("成功");
                        this.page = "page2"
                    } else {
                        this.msg = p.msg;
                    }
                })
            },

            changephone() {
                if (this.valCodeTrue == this.valCodeTrue) {
                    this.page = 'page3'
                    this.phone = ''
                    this.valCode = ''
                } else {
                    alert("失败")
                }
            },
        },
        components: {
            sendcode: () => import('@/components/sendcode.vue'),
        }
    }

</script>

