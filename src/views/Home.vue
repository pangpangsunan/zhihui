<template>

    <div class="container">
        <br>
        <carousel></carousel>
        <p class="recommad-title border-rad skin-white">为您推荐的课程</p>
        <ul class="ulwarpper">
            <li class="col-sm-12 course-list" v-for="item in arr">
                <router-link to="/courseInfo">
                    <img :src="item.course.image" alt="" class="courseimg">
                    <div class="font-list">
                        <h3 class="course-name">{{ item.course.name}}
                            <span class="offline">{{ item.course.type|coursType }}</span>
                        </h3>
                        <h5 class="course-bg font-bestsmall">{{ item.course.background }}</h5>
                        <p class="course-price font-middle">￥{{ item.course.price }}</p>
                        <!--<p class="course-target" >{{ item.course.target }}</p> -->
                        <p class="course-teacher font-bestsmall"><img src="@/assets/ic_home_teacher.png"> 吴苏南</p>
                        <p class="course-location font-bestsmall"><img src="@/assets/ic_location.png">{{
                            item.course.address}}</p>
                        <div class="btns1">
                            <button class="white-btn">试看</button>
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

    .courseimg {
        width: 17.75rem;
        height: 10rem;
        float: left;
        margin-left: -1rem;
    }

    .font-list {
        position: relative;
        left: 0.625rem;
        top: -0.625rem;
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
