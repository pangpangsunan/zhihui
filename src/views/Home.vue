<style>

	body {
		font-family:'SourceHanSansSC-Medium';
	}
	.home-container {
		background-color:#fff;
	}
		.recommad-title {
			background:#fff;
			height:2.5rem;
			color:gray;
			line-height:2.5rem;
			padding-left:1.875rem;
			border-radius:2px;
			margin-top:0.8125rem;
		}
		.project-price {
			color:#f5892a;
		}
		.underline,.online{
			display:inline-block;
			width:2.5rem;
			height:1.25rem;
			line-height:1.25rem;
			border-radius:0.625rem;
			background-color:#4459cc;
			font-size:0.625rem;
			color:#fff;
			text-align:center;
			margin-left:5px;
		}
		.online{
			background-color:#1caf5f;
		}
		.home-wrapper{
			width:75rem;
			margin:0 auto;
			border:1px solid red;
		}
		.imglist:nth-of-type(odd){
			background-color:#F3F5F7;
		}
		.imglist:nth-of-type(even){
			background-color:#fff;
		}
		.ulwarpper {
			margin:0;
			padding:0;
		}
		.imglist{
			list-style-type:none;
			height:10rem;
		}
		.img{
			width:17.75rem;
			height:10rem;
			float:left;
			margin-left:-1rem;
			
		}
		.font-list {
			position:relative;
			left:0.625rem;
			top:-0.625rem;
		}
		.project-name {
			font-size:1rem;
			height:1rem;
		}
		.project-bg,.project-target,.project-address{
			font-size:0.75rem;
			color:#666666;
			
		}

	</style>
<template>
	
    <div class="container">
        <carousel></carousel>
            <p class="recommad-title">为您推荐的课程</p>
            <ul class="ulwarpper">
                <li class="col-sm-12 imglist" v-for="item in arr">
                    <router-link to="/courseInfo">
						<img :src="item.course.image" alt="" class="img">
						<div class="font-list">
							<h3 class="project-name">{{ item.course.name}}
								<span class="underline">{{ item.course.type|coursType }}</span>
							</h3>
							<h5 class="project-bg" >{{ item.course.background }}</h5>
							<p class="project-price">￥{{ item.course.price }}</p>
							<!-- <p class="project-target" >{{ item.course.target }}</p> -->
							<p class="project-address">{{ item.course.address}}</p>
							<div class="btns">
								<button id="trywatch">试看</button>
								<button id="buy">购买</button>
							</div>

						</div>
					</router-link>
                </li>
            </ul>
    
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
