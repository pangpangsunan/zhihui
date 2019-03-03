<template>
    <div>
        <div class="page1">
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
        <div class="page2">
            <p>请设置新密码</p>
            <div class="bindphone-page">
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

                    <button type="submit" @click.prevent="resetpwd()" class="orange-btn">完成</button>

                </form>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>
<style scoped>
    p{
        margin-top: 3rem;
        text-align: center;
    }
</style>
<script>
    import axios from 'axios'
    import qs from 'querystring'

    export default {
        data() {
            return {
                time: '获取验证码',
                valCodeDisabled: false,
                phone: null,
                valCode: null,
                valCodeTrue: null,
                msg: null,

            }
        }, methods: {
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

            }
        }
    }
</script>



