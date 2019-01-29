<template>
    <div class="container">
        <br>
        <p>全部 - 经营管理 - 领导力</p>
        <p>4门课程</p>
        <ul class="list-group">
            <li class="list-group-item">
                <img src="@/assets/cat.jpg" width="400" height="400" alt="">
                <p>国美出口 <kbd>线下</kbd></p>
                <p class="text-danger">￥1200</p>
                <p>张三丰</p>
                <p>上海市梅龙广场9楼</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/course/getDiscountCourse').then(p => {
                this.courseList = p.data.content
            })
        },
        data() {
            return {
                courseList: []
            }
        }
    }
</script>
