<template>
    <div class="container">
        <div v-if="!hasData" class="no-attention">
            <img src="@/assets/img_course_nothing.png" alt="">
            <p>您尚未购买任何课程</p>
        </div>
        <p class="nav-title">已购买的课程</p>
        <p class="subtitle">
            <span class="course-number">{{courseList.length}}门课程</span>
            <span class="course-type">全部类型
				<span class="caret"></span>
			</span>
            <span class="clear"></span>
        </p>
        <div class="coursesType border-rad" v-if="hasData">
            <div class="pro skin-white" v-for="item in courseList">
                <img src="@/assets/cat.jpg" class="course-img">
                <div class="course-list">
                    <div class="course-name">{{ item.name }}<span class="online">{{ item.type|coursType }}</span></div>
                    <div class="course-price">￥{{item.price}}</div>
                    <div class="course-teacher">
                        <img src="@/assets/ic_home_teacher.png">
                        {{item.userName}}
                    </div>
                    <div class="course-location">
                        <img src="@/assets/ic_location.png">
                        {{item.address}}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>

    .coursesType {
        background-color: #F3F5F7;
        display: flex;
        flex-wrap: wrap;
    }

    .pro {
        width: 22.25rem;
        height: 20.25rem;
        margin-left: 1.2rem;
        margin-top: 1rem;
    }

    .course-img {
        width: 23.25rem;
        height: 12.88rem;
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
