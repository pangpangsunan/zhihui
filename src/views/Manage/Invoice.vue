<template>
    <div>
        <p class="font-middle" style="margin: 1rem">已保存的抬头信息</p>
        <div class=" font-middle" v-for="item in arr">
            <div class="personal-invoice" v-if="item.type==1">
                <div class="invoice-title">{{item.title}}<span class="invoice-type font-small">个人</span></div>
                <div>联系电话：{{item.phone}}</div>
                <div>邮寄地址：{{item.mailingAddress}}
                    <div class="update-btns">
                        <span class="update-btn" @click="sendid(item)">
                            修改
                        </span>
                        <span class="delete-btn" @click="deleteinvoice(item.id)">
                            删除
                        </span>
                    </div>

                </div>

            </div>
            <div class="company-invoice" v-if="item.type==2">
                <div class="invoice-title">{{item.title}}<span class="invoice-type">公司</span></div>
                <div>纳税人识别号：{{item.dutyParagraph}}</div>
                <div>联系电话：{{item.phone}}</div>
                <div>单位地址：{{item.address}}</div>
                <div>开户银行：{{item.bank}}111</div>
                <div>银行卡号：{{item.bankAccount}}111</div>
                <div>邮寄地址：{{item.mailingAddress}}
                    <div class="update-btns">
                        <a class="update-btn">
                            <span @click="sendid(item)">修改</span>
                        </a>
                        <a class="delete-btn">
                            <span @click="deleteinvoice(item.id)">删除</span>
                        </a>
                    </div>

                </div>
            </div>

        </div>
        <div style="text-align: center">
            <button class="blue-btn" @click="diolog='addinvoice'">添加抬头信息</button>
        </div>
        <updateinvoice @update="select()" v-if="diolog=='updateinvoice'" :vinfo="vinfo" @close="diolog=null"></updateinvoice>
        <addinvoice @hide="hidediolog()" @update="select()" v-if="diolog=='addinvoice'" @close="diolog=null"></addinvoice>
    </div>
</template>
<style scoped>

    .personal-invoice, .company-invoice {
        width: 80%;
        background: #F1F1F1;
        border-radius: 2px;
        height: 7.13rem;
        margin: 0 auto;

    }

    .company-invoice, .personal-invoice {
        height: 13.63rem;
        margin: 1rem auto;
        padding: 1rem;
    }

    .personal-invoice {
        height: 7.13rem;

    }

    .company-invoice div, .personal-invoice div {
        color: #444444;
        margin-top: .3rem;
        position: relative;
    }

    .invoice-title {
        font-weight: bold;
    }

    .invoice-type {
        color: #888888;
        letter-spacing: 0.4px;
        display: inline-block;
        float: right;
        margin-right: 3rem;
    }

    .update-btn, .delete-btn {
        display: inline-block;
        color: #4459CC;
        width: 3rem;

    }

    .delete-btn {
        margin-left: 2rem;
    }

    .update-btns {
        /*position: absolute;*/
        /*top: -1.5rem;*/
        /*right: 1rem;*/
        /*text-align: right;*/
        float: right;
        display: inline-block;
        width: 8rem;
        line-height: .7rem;
    }

    .delete-btn {
        margin-left: 4%;
    }

    .bule-btn {
        width: 100%;
    }


</style>
<script>
    import axios from 'axios'
    import {mapGetters} from 'vuex'
    import qs from 'querystring'

    export default {
        created() {
            this.select();
        },
        data() {
            return {
                arr: [],
                diolog: null,
                vinfo: {

                }

            }

        },
        components: {
            updateinvoice: () => import('@/components/updateinvoice.vue'),
            addinvoice: () => import('@/components/addinvoice.vue'),
        },
        methods: {
            select() {
                this.diolog = null
                axios.get('/edu/invoice/getInvoiceTitleListByUser', {
                    params: {
                        uid: this.userInfo.id
                        // type: type

                    }
                }).then(p => {
                    this.arr = p.data.content

                })
            },
            deleteinvoice(id) {
                axios.post("/edu/invoice/delInvoiceTitle", qs.stringify({
                    id: id
                })).then(p => {
                    if (p.data.httpCode == 200) {

                        this.select()
                    }
                })

            },/*sendis1。是为了显示修改的弹框，2为了把vid传到页面去*/
            sendid(infoid) {
                this.diolog = 'updateinvoice'
                this.vinfo = infoid

            },
            hidediolog(){
                this.diolog=null
            }
        },
        computed: mapGetters([
            'userInfo'
        ])


    }

</script>

