<template>
    <div class="container">
        <div class="manage-wrapper">
            <div class="manage-right">
                <p class="font-middle" style="margin: 1rem">已保存的抬头信息</p>
                <div class=" font-middle" v-for="item in arr">
                    <div class="personal-invoice" v-if="item.type==1">
                        <div class="invoice-title">{{item.title}}<span class="invoice-type">个人</span></div>
                        <div>{{item.dutyParagraph}}</div>
                        <router-link to="/">
                            <span>修改</span>
                        </router-link>
                        <router-link to="/">
                            <span>删除</span>
                        </router-link>
                    </div>
                    <div class="company-invoice" v-if="item.type==2">
                        <div class="invoice-title">{{item.title}}<span class="invoice-type">{{item.type}}公司</span></div>
                        <div>纳税人识别号：{{item.dutyParagraph}}</div>
                        <div>联系电话：{{item.phone}}</div>
                        <div>单位地址：{{item.address}}</div>
                        <div>开户银行：{{item.bank}}111</div>
                        <div>银行卡号：{{item.bankAccount}}111</div>
                        <div>邮寄地址：{{item.mailingAddress}}
                            <router-link to="/" class="update-btn">
                                <span>修改</span>
                            </router-link>
                            <router-link to="/" class="delete-btn">
                                <span>删除</span>
                            </router-link>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

    .manage-right {
        width: 80%;
        background: #FFFFFF;
        border-radius: 2px;
        float: right;
        height: 43rem;

    }

    .personal-invoice, .company-invoice {
        width: 80%;
        background: #F1F1F1;
        border-radius: 2px;
        height: 7.13rem;
        margin: 0 auto;

    }

    .company-invoice {
        height: 13.63rem;
        margin: 1rem auto;
        padding: 1rem;
    }

    .company-invoice div {
        color: #444444;
        margin-top: .3rem;
    }

    .invoice-title {
        font-weight: bold;
    }

    .invoice-type {
        color: #888888;
        letter-spacing: 0.4px;
        margin-left: 80%;
    }
    .update-btn,.delete-btn{
        display: inline-block;margin-left: 55%;
        color: #4459CC;

    }
    .delete-btn{
        margin-left: 4%;
    }


</style>
<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/invoice/getInvoiceTitleListByUser', {
                params: {
                    uid: 192,
                    // type: type
                }
            }).then(p => {
                this.arr = p.data.content
            })
        }, data() {
            return {
                arr: []
            }

        },

    }

</script>

