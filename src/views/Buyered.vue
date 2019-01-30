<template>
    <div class="container">
        <div v-if="!hasData">
            <img src="@/assets/img_course_nothing.png" alt="">
            <p>您尚未购买任何课程</p>
        </div>
        <div v-if="hasData">
            <br>
            <p>已购买的课程</p>
            <p>{{ courseList.length }}门课程</p>
            <ul class="list-group">
                <li class="list-group-item" v-for="item in courseList">
                    <img :src="item.image" width="400" height="400" alt="">
                    <p>{{ item.name }} <kbd>{{ item.type|coursType }}</kbd></p>
                    <p class="text-danger">￥{{item.price}}</p>
                    <p>{{item.userName}}</p>
                    <p>{{item.address}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/order/getOrderList').then(p => {
                for (let item of p.data.content.records) {
                    for (let item1 of item.courseList) {
                        item1.userName = item.userName
                        this.courseList.push(item1)
                    }
                }
                this.hasData = !!this.courseList;
            })
        },
        data() {
            return {
                courseList: [],
                hasData: false
            }
        }
    }
</script>
