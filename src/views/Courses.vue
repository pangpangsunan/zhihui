<template>
    <div class="container">
        <br>
        <p>全部 - 经营管理 - 领导力</p>
        <p>4门课程</p>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in courseList">
                <img :src="item.courseInfo.image" width="400" height="400" alt="">
                <p>{{ item.courseInfo.name }} <kbd v-if="item.courseInfo.type">{{ item.courseInfo.type|coursType }}</kbd></p>
                <p class="text-danger">￥{{item.courseInfo.price}}</p>
                <p>{{item.courseInfo.audiences}}</p>
                <p>{{item.courseInfo.address}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/course/getCoursePageByTeacher?id=1').then(p => {
                this.courseList = p.data.content.records
                console.log(this.courseList)
            })
        },
        data() {
            return {
                courseList: []
            }
        }
    }
</script>
