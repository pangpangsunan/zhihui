<template>
    <div class="diolog">
        <div class="wrapper-page skin-white">
            <div class="font-big">添加抬头信息</div>
            <form class="form-horizontal" @submit="addinvoice()">
                <div class="form-group">
                    <label class="col-sm-2 control-label">选择类型</label>
                    <span class="col-sm-2">
                        <input type="radio" name="type" value="1" v-model="invoiceobj.type">
                          个人
                        <input type="radio" name="type" value="2" v-model="invoiceobj.type">
                            企业
                      </span>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">发票抬头</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="必填（企业名称）" required
                               v-model="invoiceobj.title">
                    </div>
                </div>
                <div class="form-group" v-if="invoiceobj.type==2">
                    <label class="col-sm-2 control-label">纳税人识别号</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="必填" required
                               v-model="invoiceobj.dutyParagraph">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">联系电话</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" placeholder="增值税专用发票必填" required
                               v-model="invoiceobj.phone">
                    </div>
                </div>
                <div class="form-group" v-if="invoiceobj.type==2">
                    <label class="col-sm-2 control-label">单位地址</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="增值税专用发票必填" required
                               v-model="invoiceobj.address">
                    </div>
                </div>
                <div class="form-group" v-if="invoiceobj.type==2">
                    <label class="col-sm-2 control-label">开户银行</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="增值税专用发票必填" required
                               v-model="invoiceobj.bank">
                    </div>
                </div>
                <div class="form-group" v-if="invoiceobj.type==2">
                    <label class="col-sm-2 control-label">银行账号</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="增值税专用发票必填" required
                               v-model="invoiceobj.bankAccount">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">邮寄地址</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="增值税专用发票必填" required
                               v-model="invoiceobj.mailingAddress">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <button class="blue-btn">保存</button>
                    </div>
                </div>
            </form>
            <div class="closebtn" @click="$emit('close')">关闭</div>
        </div>
    </div>
</template>


<style scoped>
    .diolog {
        width: 100%;
        height: 100%;
        background: rgba(34, 34, 34, 0.80);
        position: absolute;
        left: 0;
        top: 0;
    }

    .wrapper-page {
        width: 50rem;
        margin: 5rem auto;
        border-radius: 4px;
        padding: 2rem 3rem;
        text-align: center;
        position: relative;
    }

    .col-sm-10 input {
        height: 2.75rem;
    }

    .col-sm-2 {
        height: 2.75rem;
        line-height: 2rem;
    }
</style>
<script>
    import axios from 'axios'
    import qs from 'querystring'
    import {mapGetters} from 'vuex'


    export default {
        components: {
            close: () => import('@/components/close.vue'),
        },
        data() {
            return {
                invoiceobj: {
                    type: '1'

                },
                diolog: null

            }
        },
        methods: {

            addinvoice() {
                this.invoiceobj.uid = this.userInfo.id
                axios.post('/edu/invoice/addInvoiceTitle', qs.stringify(this.invoiceobj)).then(p => {
                    if (p.data.httpCode == 200) {
                        this.$emit('update')

                    } else {
                        alert(p.data.msg)

                    }
                })

            },

        },
        computed: mapGetters([
            'userInfo'
        ])


    }
</script>