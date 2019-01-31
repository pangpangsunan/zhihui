<style>
	body {
		font-family:'SourceHanSansSC-Medium';
		font-size:16px;
	}
		.recommad-title {
			width:100%;
			background:#fff;
			height:40px;
			color:gray;
			line-height:40px;
			padding-left:30px;
			border-radius:2px;
			margin-top:13px;
		}
		.project-price {
			color:#f5892a;
		}
		.underline,.online{
			display:inline-block;
			width:40px;
			height:20px;
			line-height:20px;
			border-radius:10px;
			background-color:#4459cc;
			font-size:10px;
			color:#fff;
			text-align:center;
		}
		.online{
			background-color:#1caf5f;
		}
		.home-wrapper{
			width:1200px;
			margin:0 atuo;
			border:1px solid red;
		}
	</style>
<template>
	
    <div class="container">
        <carousel></carousel>
        <div class="home-wrapper">
            <p class="recommad-title">为您推荐的课程</p>
            <ul>
                <li class="col-sm-12" v-for="item in arr">
                    <img :src="item.course.image" style="width:240px;height:180px;float: left" alt="">
                    <h3 class="project-name">{{ item.course.name}} 
						<span class="underline">{{ item.course.type|coursType }}</span>
					</h3>
                    <h5 >{{ item.course.background }}</h5>
                    <p class="project-price">￥{{ item.course.price }}</p>
                    <p class="project-target" >{{ item.course.target }}</p>
                    <p class="project-address">{{ item.course.address}}</p>
                    <button class="trywatvh">试看</button>
                    <button class="buy">购买</button>
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
