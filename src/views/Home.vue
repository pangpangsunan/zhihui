<template>
    <div class="container">
        <carousel></carousel>
        <div>
            <p>为您推荐的课程</p>
            <ul>
                <li class="col-sm-12" v-for="item in arr">
                    <img :src="item.course.image" style="width:200px;height:200px;float: left" alt="">
                    <h3>{{ item.course.name}} <kbd>{{ item.course.type|coursType }}</kbd></h3>
                    <h5>{{ item.course.background }}</h5>
                    <p>￥{{ item.course.price }}</p>
                    <p>{{ item.course.target }}</p>
                    <p>{{ item.course.address}}</p>
                    <button>试看</button>
                    <button>购买</button>
                </li>
            </ul>
        </div>
    </div>
</template>

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
        }
    }
</script>
