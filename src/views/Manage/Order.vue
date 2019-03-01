<template>
    <div class="container">
        <div class="manage-wrapper">
            <div class="manage-right">
                <div class="manage-content">
                    <ul class="tab-list font-middle">
                        <li @click="current='page1';load(1)" :class="current==='page1'?'order-active':''">已购课程</li>
                        <li @click="current='page2';load(0)" :class="current==='page2'?'order-active':''">待支付</li>
                        <li @click="current='page3';load(4)" :class="current==='page3'?'order-active':''">已取消</li>
                    </ul>
                    <div class="clear"></div>
                    <div class="orderlist" v-for="item in arr">
                        <img :src="item.image" alt="" class="course-img">
                        <div class="course-info ">
                            <div class="course-name">{{item.name}}</div>
                            <div class="course-price font-middle">{{item.price}}</div>
                            <div class="orderid font-bestsmall"> 订单编号：{{item.orderid}}</div>
                            <div class="order-finishedtime font-bestsmall">订单完成时间{{item.updateDate}}</div>
                        </div>
                        <div class="clear"></div>
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
        min-height: 43rem;

    }

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

    .course-name {
        font-size: 1rem;
        margin: 1rem 0;
    }

    .course-price {
        color: #F5892A;
    }
    .orderid{
        margin-top: 1rem;
    }
    .orderid,.order-finishedtime {
        color: #666666;

    }
    @media screen and (max-width: 768px) {
        .course-info {
            width: 62%;
        }
        .orderid{
            margin-top: .5rem;
        }

    }



</style>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                current: 'page1',
                arr: []
            }

        },
        methods: {
            load(status) {
                this.arr.length = 0;
                axios.get('/edu/order/getOrderList', {
                    params: {
                        status: status
                    }
                }).then(p => {
                    // this.arr=p.data.content.records;
                    for (let i of p.data.content.records) {
                        for (let j of i.courseList) {
                            j.orderid = i.orderid;
                            this.arr.push(j);
                        }
                    }
                    console.log(this.arr);
                });
            },
        },
        created() {
            this.load(1);
        }

    }

</script>

