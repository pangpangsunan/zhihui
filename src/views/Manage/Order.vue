<template>
    <div>
        <div class="manage-content">
            <ul class="tab-list font-middle">
                <li @click="current='page1';load(1)" :class="current==='page1'?'order-active':''">已购课程</li>
                <li @click="current='page2';load(0)" :class="current==='page2'?'order-active':''">待支付</li>
                <li @click="current='page3';load(4)" :class="current==='page3'?'order-active':''">已取消</li>
            </ul>
            <div class="clear"></div>
            <div class="orderlist page1" v-for="item in arr" v-show="current=='page1'">
                <img :src="item.image" alt="" class="course-img">
                <div class="course-info ">
                    <div class="course-name">{{item.name}}</div>
                    <div class="course-price font-middle">{{item.price}}</div>
                    <div class="orderid font-bestsmall"> 订单编号：{{item.orderid}}</div>
                    <div class="order-finishedtime font-bestsmall">订单完成时间{{item.updateDate}}</div>
                    <button class="orange-btn" @click="diolog='aplicateinvoice'">申请发票</button>
                </div>
                <div class="clear"></div>
            </div>
            <div class="orderlist page2" v-for="item in arr" v-show="current=='page2'">
                <img :src="item.image" alt="" class="course-img">
                <div class="course-info ">
                    <div class="course-name">{{item.name}}</div>
                    <div class="course-price font-middle">{{item.price}}</div>
                    <div class="orderid font-bestsmall"> 订单编号：{{item.orderid}}</div>
                    <div class="order-finishedtime font-bestsmall">订单完成时间{{item.updateDate}}</div>
                    345
                </div>
                <div class="clear"></div>
            </div>
            <div class="orderlist page3" v-for="item in arr" v-show="current=='page3'">
                <img :src="item.image" alt="" class="course-img">
                <div class="course-info ">
                    <div class="course-name">{{item.name}}</div>
                    <div class="course-price font-middle">{{item.price}}</div>
                    <div class="orderid font-bestsmall"> 订单编号：{{item.orderid}}</div>
                    <div class="order-finishedtime font-bestsmall">订单完成时间{{item.updateDate}}</div>
                    2121
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <aplicateinvoice v-if="diolog=='aplicateinvoice'"></aplicateinvoice>
    </div>

</template>
<style scoped>


    .manage-content {
        text-align: center;
        margin-top: 2rem;
        margin-left: 2rem;
    }

    .tab-list li {
        float: left;
        margin-left: 1.5rem;
        width: 7.5rem;
        height: 2.25rem;
        background: #E4EAF3;
        border-radius: 1.25rem;
        line-height: 2.25rem;
    }

    .order-active {
        background: #4459CC !important;
        color: #fff;
    }

    .orderlist {
        width: 90%;
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
        width: 67%;
    }

    .orange-btn {
        position: absolute;
        bottom: 1.3rem;
        right: 2rem;
        width: 6.75rem !important;
        height: 2.75rem !important;

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

    @media screen and (max-width: 768px) {
        .course-info {
            width: 62%;
        }

        .orderid {
            margin-top: .5rem;
        }

    }


</style>
<script>
    import axios from 'axios'
    import vuex from 'vuex';

    export default {
        data() {
            return {
                current: 'page1',
                arr: [],
                diolog: null
            }

        },
        methods: {
            load(status) {
                this.arr.length = 0;
                axios.get('/edu/order/getOrderList', {
                    params: {
                        status: status,
                        userid: this.userInfo.id
                    }
                }).then(p => {
                    // this.arr=p.data.content.records;
                    for (let i of p.data.content.records) {
                        for (let j of i.courseList) {
                            j.orderid = i.orderid;
                            this.arr.push(j);
                        }
                    }
                    // console.log(this.arr);
                });
            },
        },
        created() {
            this.load(1);
        },
        computed: vuex.mapGetters([
            'userInfo'
        ]),
        components: {
            aplicateinvoice: () => import('@/components/aplicateinvoice.vue'),
        }

    }

</script>

