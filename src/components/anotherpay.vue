<template>
    <div class="diolog">
        <div class="public-page skin-white">
            <div class="font-big">提交订单</div>
            <form class="form-horizontal">
                <div class="order-course">
                    <div class="left"></div>
                    <div class="right">
                        <p>美国出口管制新政大盘点</p>
                        <div class="price">¥ 1200</div>
                        <div class="font-small">上课时间：2019-01-01 07:35</div>
                    </div>
                </div>
                <div class="font-middle">实付金额</div>
                <div class="clear"></div>
                <div class="true-price">1200元</div>
                <div class="clear"></div>
                <hr>
                <div class="font-middle">支付方式</div>
                <div class="clear"></div>
                <ul class="paystyle">
                    <li><input type="radio"><img src="@/assets/ic_wechat.png"></li>
                    <li><input type="radio"><img src="@/assets/ic_zfb.png"></li>
                    <li><input type="radio">其他支付方式</li>
                </ul>
                <div class="clear"></div>

                <div class="select-groups">
                    <button class="blue-btn">申请</button>
                </div>
            </form>
            <div class="closebtn" @click="$emit('close')">关闭</div>
        </div>
    </div>
</template>


<style scoped>

    .diolog {
        width: 100vw;
        height: 100vh;
        background: rgba(34, 34, 34, 0.80);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;

    }

    .public-page {
        border-radius: 4px;
        width: 50rem;
        height: 51.38rem;
        margin: 5rem auto;
        padding: 3rem;
        text-align: center;
        position: relative;
    }
    .order-course {
        width: 42.5rem;
        height: 8.75rem;
        background: #F3F5F7;
        margin-top: 2rem;
    }
    .left {
        float: left;
        width: 15.5rem;
        border: 1px solid red;
        height: 100%;
    }
    .right {
        float: right;
        width: 26rem;
        text-align: left;
        padding: 1rem;

    }
    .price {
        color: #F5892A;
    }
    .font-small {
        margin-top: 2rem;
        color: #666666;
    }
    .font-middle {
        color: #8087AB;
        float: right;
        padding-right: 2rem;
        margin-top: 1rem;
    }
    .true-price {
        font-size: 1.5rem;
        color: #222222;
        float: right;
        padding-right: 2rem;
    }
    .paystyle li{
        float: left;
        margin-left: 2rem;
        width: 12rem;
        height: 4rem;
        line-height: 4rem;
    }

    .select-groups {
        margin-top: 3rem;
    }
    .blue-btn{
        width: 20rem;
    }



</style>
<script>

    import {mapGetters} from 'vuex'
    import Close from "./close";

    export default {
        components: {
            close: () => import('@/components/close.vue'),
        },
        data() {
            return {
                arr: [],
                diolog:null
            }
        },
        created() {
            this.$get('/edu/invoice/getInvoiceTitleListByUser', {
                uid: this.userInfo.id
            }, p => {
                if (p.httpCode == 200) {
                    this.arr = p.content
                } else {
                    alert(p.msg)
                }
            })
        },


        computed: mapGetters([
            'userInfo'
        ])

    }
</script>