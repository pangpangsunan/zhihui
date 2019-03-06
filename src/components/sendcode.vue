<template>
    <button type="button" class="val-btn blue-shot-btn" :disabled="valCodeDisabled"
            @click="getValCode()">
        {{ time }}
    </button>
</template>

<script>
    import axios from 'axios'
    import qs from 'querystring'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                time: '获取验证码',
                valCodeDisabled:false
            }


        },
        props:{
          phone:null
        },
        methods:{
            getValCode() {


                // if (!this.phone) {
                //     this.msg = '请输入的手机号！'
                //     return
                // }
                axios.post('/edu/user/sendShortMessage', qs.stringify({phone: this.phone})).then(p => {
                    if (p.data.httpCode == 200) {
                        this.time = '60s';
                        this.valCodeDisabled = true;
                        this.$emit('input', p.data.content)

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
                        alert("短信验证码发送失败")
                    }
                });
            }
        }

    }
</script>

<style scoped>

</style>