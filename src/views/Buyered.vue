<template>
    <div class="container">
        <div v-if="!hasData" class="no-attention">
            <img src="@/assets/img_course_nothing.png" alt="">
            <p>您尚未购买任何课程</p>
        </div>
		<p class="navHead">已购买的课程</p>
		<p class="navTitle">
			<span class="navTitleLeft">{{courseList.length}}门课程</span>
			<span class="navTitleRight">全部类型<select></select></span>
		</p>
		<div class="coursesType" v-if="hasData">
			<div class="pro" v-for="item in courseList">
				<div class="topImg">
					<img :src="item.image" alt="">
				</div>
				<div class="pTitle">{{ item.name }}<span class="online">{{ item.type|coursType }}</span></div>
				<div class="cPrice">￥{{item.price}}</div>
				<div class="cName">
					<img src="@/assets/ic_home_teacher.png">
					{{item.userName}}
				</div>
				<div class="cName">
					<img src="@/assets/ic_location.png">
					{{item.address}}
				</div>
			</div>
		</div>
    </div>
</template>
<style>

	.coursesType {
		background-color:#F3F5F7;
		boder-radius:2px;
		display:flex;
		flex-wrap: wrap;
	}
	.navTitle {
		color:#666666;
		background-color:#F3F5F7;
		margin:0;
		font-size: 0.875rem;
		padding:1rem 0 0 1rem;
	}
	.navTitleLeft {

	}
	.navTitleRight {
		
	}
	.pro {
		width:22.25rem;
		height:20.25rem;
		margin-left:1.2rem;
		background-color:#fff;
		margin-top:1rem;
	}
	.topImg {
		width:22.25rem;
		height:12.875rem;
		background-color:blue;
	}
	.pTitle {
		font-size:1rem;
		color: #222222;
		letter-spacing: 0.5px;
		line-height: 1.5rem;
		padding:0.5rem 1rem 1rem 1rem;
	}
	.online{
		display:inline-block;
		width:40px;
		height:20px;
		line-height:20px;
		border-radius:10px;
		background-color:#4459cc;
		font-size:10px;
		color:#fff;
		text-align:center;
		margin-left:5px;
	}
	.cPrice{
		font-size: 0.875rem;
		color: #F5892A;
		letter-spacing: 0.5px;
		line-height: 1.2rem;
		padding:0 1rem;
	}
	.cName{
		padding:0.3rem 1.1rem;
		font-size: 0.75rem;
		color: #666666;
		letter-spacing: 0.2px;
		line-height: 0.75rem;
	}
</style>
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
