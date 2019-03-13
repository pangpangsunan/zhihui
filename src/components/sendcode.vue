<template>
    <button type="button" class="val-btn blue-shot-btn" :disabled="valCodeDisabled"
            @click="getValCode()">
        {{ btnText }}
    </button>
</template>

<script>

    export default {
        data() {
            return {
                btnText: '获取验证码',
                valCodeDisabled: false
            }
        },
        props: {
            phone: null
        },
        methods: {
            getValCode() {
                this.$post('/edu/user/sendShortMessage', {phone: this.phone}, p => {
                    if (p.httpCode == 200) {
                        this.btnText = '60s';
                        this.valCodeDisabled = true;
                        this.$emit('success', p.content);

                        let intval = setInterval(() => {
                            let time = parseInt(this.btnText);
                            if (--time <= 0) {
                                this.btnText = '获取验证码';
                                clearInterval(intval);
                                this.valCodeDisabled = false;
                                return;
                            }
                            this.btnText = time + 's'

                        }, 1000);
                        this.intval = intval;

                    } else {
                        alert("短信验证码发送失败")
                    }
                });
            }
        }

    }
</script>
