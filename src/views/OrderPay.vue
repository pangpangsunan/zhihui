<template>
    <div class="container">
        <p class="nav-title">订单支付</p>
        <div class="orderlist">
            <img alt="" class="course-img">
            <div class="course-info ">
                <div class="course-name">{{ course.name }}</div>
                <div class="course-price font-middle">{{ course.price }}</div>
                <div class="orderid font-bestsmall"> 订单编号：{{ order.orderid }}</div>
                <div class="order-finishedtime font-bestsmall">订单创建时间{{ order.createTime }}</div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="pay-wrapper">
            <div>选择支付方式并进行支付</div>
            <div class="pay-page">
                <div class="tab-bg">
                    <ul class="tab-list font-middle">
                        <li @click="current='page1'" :class="current==='page1'?'active':''">微信支付</li>
                        <li @click="current='page2'" :class="current==='page2'?'active':''">支付宝</li>
                        <li @click="current='page3'" :class="current==='page3'?'active':''">其它方式</li>
                    </ul>
                </div>
                <ul class="tab-content">
                    <li v-show="current==='page1'" id="page1">
                        <img src="../assets/ic_wechat_wallet.png" style="margin-top: 3rem">
                        <div class="qcode">
                            <img :src="url" alt="" width="100%">
                        </div>
                        <img src="../assets/ic_wechat_qr_text.png"/>
                        <div>
                            <button class="btn orange-btn">我已完成付款</button>

                        </div>
                    </li>

                    <li v-show="current==='page2'" id="page2">
                        <img src="../assets/ic_alipay.png" style="margin-top: 3rem"/>
                        <div class="qcode">
                            <iframe ref="zhifubao" style="width:100%"></iframe>
                        </div>
                        <div class="tippay">
                            使用支付宝扫码付款
                        </div>
                        <div>
                            <button class="btn orange-btn">我已完成付款</button>
                        </div>
                    </li>
                    <li v-show="current==='page3'" id="page3">
                        <div>银行转账</div>
                        <div class="grayfont">杭州小同网络科技有限公司<br>
                            招商银行股份有限公司杭州钱塘支行<br>
                            571911205710701
                        </div>
                        <div>公司信用卡与国际信用卡支付</div>
                        <div class="grayfont">请联系客服cs@xiaotongtech.net</div>
                        <div>支付完成后请发送支付凭证与订单号至客服邮箱</div>
                        <div class="grayfont">cs@xiaotongtech.net</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order-pay",
        data() {
            return {
                current: 'page1',
                course: {},
                order: {},
                url: null,
            }
        },
        created(){
            let uid = this.$store.getters.userInfo.id;

            Promise.resolve().then(p => {
                return this.$get("/edu/course/getCourseInfoById", {
                    id: this.$route.params.id,
                    uid: uid,
                })
            }).then(p => {
                this.course = p.data.content.course;

                return this.$get('/edu/order/getOrderList', {
                    userid: uid,
                })
            }).then(p => {
                for (let obj of p.data.content.records) {
                    for (let obj1 of obj.courseList) {
                        if (obj1.id == this.course.id) {
                            // 找到已有订单

                            this.zhifubao(obj.orderid);
                            this.weixin(obj.orderid);
                            return Promise.resolve(null);
                        }
                    }
                }
                return this.$post('/edu/order/addOrder', {
                    userid: uid,
                    cid: this.course.id,
                    price: this.course.price,
                })
            }).then(p => {
                if (!p) {
                    return;
                }

                this.zhifubao(p.data.content);
                this.weixin(p.data.content);
            });
        },
        methods: {
            weixin(orderid){
                console.debug("Fd");
                this.$post('/edu/wewebpay/unifiedorder', {
                    uid: this.$store.getters.userInfo.id,
                    billno: orderid,
                }).then(p => {
                    if (p.data.httpCode == 200) {
                        this.url = "/edu/wewebpay/qrCodePic?code_url=" + p.data.content.code_url;
                        return;
                    }
                    alert(p.data.msg);
                })
            },
            zhifubao(orderid){
                this.$get('/edu/alipay/getOrderStringWebPage', {
                    uid: this.$store.getters.userInfo.id,
                    billno: orderid,
                }).then(p => {
                    this.$refs.zhifubao.srcdoc = p.data.content;
                })
            },
        }
    }
</script>

<style scoped>
    #page1, #page2 {
        text-align: center;
    }

    .qcode {
        width: 8.75rem;
        height: 8.75rem;
        border: 1px solid red;
        margin: 1rem auto;
    }

    .tippay {
        color: #fff;
        background: #00A8F5;
        width: 8.75rem;
        height: 2.88rem;
        line-height: 2.88rem;
        margin: 0 auto;
    }

    #page3 {
        padding: 2rem;
    }

    .grayfont {
        color: #666666;
        margin: .5rem 0;
    }

    .orderlist {
        width: 100%;
        background-color: #F3F5F7;
        height: 8.75rem;
        margin-top: 2rem;
        text-align: left;

    }

    .course-img {
        width: 15.5rem;
        height: 8.75rem;
        float: left;
    }

    .course-info {
        height: 8.75rem;
        position: relative;
        float: right;
        width: 78%;
    }

    .course-name {
        font-size: 1rem;
        margin: 1rem 0;
    }

    .course-price {
        color: #F5892A;
    }

    .orderid {
        margin-top: 1rem;
    }

    .orderid, .order-finishedtime {
        color: #666666;

    }

    .pay-wrapper {
        width: 100%;
        background: #fff;
        padding: 1rem .5rem;
    }

    .pay-page {
        width: 50rem;
        height: 28rem;
        background: #F3F5F7;
        border-radius: 2px;
        margin: 0 auto;
        margin-top: 2rem;
    }

    .tab-bg {
        height: 2.5rem;
        background-color: #E4EAF3;
    }

    .font-middle {
        color: #222222;
    }

    .orange-btn {
        width: 9rem;
        margin-top: 2rem;
        height: 2.75rem;
    }

    .font-small {
        color: #666666;

    }

    .font-bestsmall {
        color: #A5A5A5;
        margin-left: .5rem;
    }

    .course-studynum {
        color: #A5A5A5;

    }

    .btns2 {
        width: 20rem;
        position: absolute;
        left: 0;
        top: 9rem;
    }

    .tab-list li {
        float: left;
        cursor: pointer;
        width: 7.5rem;
        height: 2.5rem;
        text-align: center;
        line-height: 2.5rem;
    }

    .active {
        background: #4459CC;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        .course-info {
            width: 62%;
        }

        .orderid {
            margin-top: .5rem;
        }

    }
</style>
