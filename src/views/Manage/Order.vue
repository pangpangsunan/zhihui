<template>
    <div class="container">
        <p class="nav-title">管理中心</p>
        <div class="manage-wrapper">
            <div class="manage-left">
                <ul class="manage-menu">
                    <li>
                        <router-link to="/" active-class="active" exact>完善资料</router-link>
                    </li>
                    <li>
                        <router-link to="/" active-class="active" exact>绑定手机</router-link>
                    </li>
                    <li>
                        <router-link to="/" active-class="active" exact>修改密码</router-link>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <router-link to="/manage/interest" active-class="active" exact>学习兴趣</router-link>
                    </li>
                    <li>
                        <router-link to="/manage/order" active-class="active" exact>课程订单</router-link>
                    </li>
                    <li>
                        <router-link to="/manage/invoice" active-class="active" exact>发票管理</router-link>
                    </li>
                </ul>
            </div>
            <div class="manage-right">
                <div class="manage-content">
                    <ul class="tab-list font-middle">
                        <li @click="current='page1';load(1)" :class="current==='page1'?'order-active':''">已购课程</li>
                        <li @click="current='page2';load(0)" :class="current==='page2'?'order-active':''">待支付</li>
                        <li @click="current='page3';load(4)" :class="current==='page3'?'order-active':''">已取消</li>
                    </ul>
                    <div class="clear"></div>

                    <ul>
                        <li>
                            <div class="orderlist" v-for="item in arr">
                                <img :src="item.image" alt="" class="courseimg">
                                {{item.name}}
                                {{item.updateDate}}
                                {{item.price}}
                                {{item.orderid}}
                                <button>申请发票</button>

                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

    .container {
        min-height: 40rem;
    }

    .manage-wrapper {
        width: 100%;
        height: 100%;
    }

    .manage-left {
        width: 18%;
        background: #FAFAFA;
        border-radius: 2px;
        float: left;
        height: 43rem;
    }

    .manage-right {
        width: 80%;
        background: #FFFFFF;
        border-radius: 2px;
        float: right;
        height: 43rem;

    }

    .manage-menu {
        text-align: center;
        padding-top: 2rem;
    }

    .divider {
        background: rgba(0, 0, 0, 0.08);
        height: 1px !important;
        margin: 0 1rem;
    }

    .manage-menu li {
        height: 2.75rem;
        line-height: 2.75rem;
    }

    .manage-menu a {
        color: #222222;
        height: 2.75rem;
        line-height: 2.75rem;
        display: block;
    }

    .manage-menu a .active, .manage-menu a:hover {
        background-color: #4459CC;
        color: #fff;
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
        margin-left: 1.6rem;
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
                this.arr.length=0;
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

