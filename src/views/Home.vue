<template>

    <div class="container">
        <br>
        <carousel></carousel>
        <p class="recommad-title border-rad skin-white">为您推荐的课程</p>
        <ul class="ulwarpper">
            <li class="col-sm-12 course-list" v-for="item in arr">
                <router-link :to="{name:'courseInfo',params:{id:item.course.id}}">
                    <img :src="item.course.image" alt="" class="courseimg">
                    <div class="font-list">
                        <div class="course-name">{{ item.course.name}}
                            <span class="offline">{{ item.course.type|coursType }}</span>
                        </div>
                        <h5 class="course-bg font-bestsmall">{{ item.course.background }}</h5>
                        <p class="course-price font-middle">￥{{ item.course.price }}</p>
                        <p class="course-teacher font-bestsmall"><img src="@/assets/ic_home_teacher.png"> {{
                            item.course['function'] }}</p>
                        <p class="course-location font-bestsmall"><img src="@/assets/ic_location.png">{{
                            item.course.address}}</p>
                        <p class="course-location font-bestsmall" v-if="item.course.type==2">
                            {{item.course.startDate|datetime}}&nbsp;-&nbsp;{{item.course.endDate|datetime}}
                        </p>
                        <div class="btns1">
                            <button class="white-btn" v-if="item.course.type!=2">试看</button>
                            <button class="orange-btn buy">购买</button>
                        </div>
                    </div>
                </router-link>


            </li>
        </ul>

    </div>
</template>
<style scoped>
    .recommad-title {
        height: 2.5rem;
        color: gray;
        line-height: 2.5rem;
        padding-left: 1.875rem;
        margin: 1rem 0 0 0;
    }

    .course-list {
        padding: 0;
        height: 11rem;
        position: relative;
        margin-top: 1.2rem;

    }


    .courseimg {
        width: 17.75rem;
        height: 10rem;
        margin-top: .5rem;
    }

    .font-list {
        position: absolute;
        top: .8rem;
        left: 18.5rem;
        width: 70%;
    }

    .btns1 {
        position: absolute;
        right: 0;
        top: 6.25rem;
        z-index: 10;
    }

    .course-list:nth-child(even) {
        background: #ffffff;
    }

    .course-list:nth-child(odd) {
        background: #F3F5F7;
    }

    .ulwarpper {
        min-height: 30rem;
    }
</style>
<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/recommendation/getRecommendationCourseList')
                .then(p => {
                    this.arr = p.data.content
                })
        }, data() {
            return {
                arr: [],
            }
        },
        components: {
            carousel: () => import('@/components/carousel.vue')
        },

    }
</script>
