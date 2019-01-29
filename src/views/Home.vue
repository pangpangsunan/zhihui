<template>
    <div class="container">
        <img :src="srcs[0].image" class="img-responsive" style="width:100%;height:300px;" alt="">
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
            axios.get('/edu/carousel/getCarouselList').then(p => {
                this.srcs = p.data.content
            })
        }, data() {
            return {
                arr: [],
                srcs: []
            }
        }, filters: {
            coursType(id) {
                let arr = [null, '线下', '音频', '视频', '专栏'];
                return arr[id]
            }
        }
    }
</script>
