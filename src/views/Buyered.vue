<template>
    <div class="container">
        <div v-if="nocourse">
            <img src="@/assets/img_course_nothing.png" alt="">
            <p>您尚未购买任何课程</p>
        </div>
        <div v-if="!nocourse">
            <br>
            <p>全部 - 经营管理 - 领导力</p>
            <p>4门课程</p>
            <ul class="list-group">
                <li class="list-group-item" v-for="item in courseList">
                    <img :src="item.courseInfo.image" width="400" height="400" alt="">
                    <p>{{ item.courseInfo.name }} <kbd>{{ item.courseInfo.type }}</kbd></p>
                    <p class="text-danger">￥{{item.courseInfo.price}}</p>
                    <p>{{item.courseInfo.audiences}}</p>
                    <p>{{item.courseInfo.address}}</p>
                </li>
            </ul>
        </div>
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
                courseList: [],
                nocourse: true
            }
        }
    }
</script>
