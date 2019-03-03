<template>
    <div>
        <div class="page1" v-if="page=='page1'">
            <p>为了您的账号安全，请绑定手机号码</p>
            <div class="bindphone-page">
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
                    <button type="submit" class="orange-btn">绑定</button>

                </form>
            </div>
        </div>
        <div class="page2" v-if="page=='page2'">
            <p>当前已绑定手机号码：{{this.userInfo.phone}}，要更换手机号</p>
            <div class="bindphone-page">
                <form class="form-horizontal" @submit.prevent="submit()">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="text" v-model="this.userInfo.phone" class="form-control" placeholder="请输入手机号"
                                   required
                                   pattern="^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$" disabled>
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
                    <button type="submit" class="orange-btn">更换绑定</button>

                </form>
            </div>
        </div>
        <div class="page3" v-if="page=='page3'">
            <p>请绑定新的手机号码</p>
            <div class="bindphone-page">
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
                    <button type="submit" class="orange-btn">完成</button>

                </form>
            </div>
        </div>
        <div class="page4" v-if="page=='page4'">
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
    import axios from 'axios'
    import qs from 'querystring'
    import {mapGetters} from 'vuex'

    export default {
        created() {
            if (this.userInfo.phone) {
                this.page = 'page2';
            } else {
                this.page = 'page1';
            }
        },
        data() {
            return {
                page: null,
                time: '获取验证码',
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
            sendvalcode(phone) {
                axios.post('/edu/user/sendShortMessage', qs.stringify({phone: phone})).then(p => {
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
                        this.intval = intval;

                    } else {
                        this.msg = '短信验证码发送失败'
                    }
                });
            },
            getValCode() {
                this.sendvalcode(this.userInfo.phone);
            },
            clearinter(page) {
                if (this.valCode == this.valCodeTrue) {
                    this.valCode = null;
                    this.msg = null;
                    if (this.intval) {
                        clearInterval(this.intval);
                    }
                    this.time = '获取验证码';
                    this.valCodeDisabled = false;
                } else {
                    this.msg = '验证码输入错误！'
                }
            },
            submit() {
                clearinter(page3);

            }
        }
    }


</script>

