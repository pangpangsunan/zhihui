<template>
    <div class="container">
        <div v-if="!hasData">
            <img src="@/assets/img_course_nothing.png" alt="">
            <p>您尚未购买任何课程</p>
        </div>
        <!-- <div v-if="hasData">
            <br>
            <p>已购买的课程</p>
            <p>{{ courseList.length }}门课程</p>
            <ul class="list-group">
                <li class="list-group-item" v-for="item in courseList">
                    <img :src="item.image" width="400" height="400" alt="">
                    <p>{{ item.name }} <kbd>{{ item.type|coursType }}</kbd></p>
                    <p class="text-danger">￥{{item.price}}</p>
                    <p>{{item.userName}}</p>
                    <p>{{item.address}}</p>
                </li>
            </ul>
        </div> -->
		<p class="navHead">全部 - 经营管理 - 领导力</p>
		<p class="navTitle">
			<span class="navTitleLeft">4门课程</span>
			<span class="navTitleRight">全部类型<select></select></span>
		</p>
		<div class="coursesType">
			
			<div class="pro">
				<div class="topImg"></div>
				<div class="pTitle">美国出口管制新政大盘点<span class="online">线上</span></div>
				<div class="cPrice">￥1200</div>
				<div class="cName">
					<img src="@/assets/ic_home_teacher.png">
					谢顿宁
				</div>
				<div class="cName">
					<img src="@/assets/ic_location.png">
					上海市梅龙镇广场9楼
				</div>
			</div>
			<div class="pro">
				<div class="topImg"></div>
				<div class="pTitle">美国出口管制新政大盘点<span class="online">线上</span></div>
				<div class="cPrice">￥1200</div>
				<div class="cName">
					<img src="@/assets/ic_home_teacher.png">
					谢顿宁
				</div>
				<div class="cName">
					<img src="@/assets/ic_location.png">
					上海市梅龙镇广场9楼
				</div>
			</div>
			<div class="pro">
				<div class="topImg"></div>
				<div class="pTitle">美国出口管制新政大盘点<span class="online">线上</span></div>
				<div class="cPrice">￥1200</div>
				<div class="cName">
					<img src="@/assets/ic_home_teacher.png">
					谢顿宁
				</div>
				<div class="cName">
					<img src="@/assets/ic_location.png">
					上海市梅龙镇广场9楼
				</div>
			</div>
			<div class="pro">
				<div class="topImg"></div>
				<div class="pTitle">美国出口管制新政大盘点<span class="online">线上</span></div>
				<div class="cPrice">￥1200</div>
				<div class="cName">
					<img src="@/assets/ic_home_teacher.png">
					谢顿宁
				</div>
				<div class="cName">
					<img src="@/assets/ic_location.png">
					上海市梅龙镇广场9楼
				</div>
			</div>
			
			<!-- <ul class="list-group">
			    <li class="list-group-item" v-for="item in courseList">
			        <img :src="item.courseInfo.image" width="400" height="400" alt="">
			        <p>{{ item.courseInfo.name }} <kbd v-if="item.courseInfo.type">{{ item.courseInfo.type|coursType }}</kbd></p>
			        <p class="text-danger">￥{{item.courseInfo.price}}</p>
			        <p>{{item.courseInfo.audiences}}</p>
			        <p>{{item.courseInfo.address}}</p>
			    </li>
			</ul> -->
		</div>
    </div>
</template>
<style>
	
	html {
		font-size:16px;
	}
	.navHead {
		color:#666666;
		font-size:0.875rem;
	}
	.coursesType {
		background-color:#F3F5F7;
		boder-radius:2px;
		display:flex;
		flex-wrap: wrap;
	}
	.navTitle {
		color:#666666;
		background-color:#F3F5F7;
		padding:0;
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
