<template>
    <div class="container">
        <p class="nav-title">已购买的课程</p>

        <div class="courses-category border-rad" v-if="hasData">
            <div class="subtitle">
                <div class="course-number">{{arr.length}}门课程</div>
                <div class="dropdown course-type" v-if="hasData">
                    <button class="drop-btn" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                    <span class="course-type">全部类型
				        <span class="caret"></span>
			        </span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dLabel">
                        <li>
                            <router-link to="/">线上</router-link>
                        </li>
                        <li>
                            <router-link to="/">线下</router-link>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <div @click="$router.push({name:'courseInfo',params:{id:item.enrollInfo.course.id}})" class="pro skin-white"
                 v-for="item in arr">
                <img :src="item.enrollInfo.course.image" class="course-img">
                <div class="course-list">
                    <div class="course-name">{{ item.enrollInfo.course.name }}<span class="online">线上</span></div>
                    <div class="course-teacher">
                        <img src="@/assets/ic_home_teacher.png">
                        {{ item.userInfo.name }}
                    </div>
                    <div class="course-location">
                        <img src="@/assets/ic_location.png">
                        {{ item.enrollInfo.course.address }}
                    </div>
                </div>

            </div>
        </div>
        <div v-if="!hasData" class="no-attention">
            <img src="@/assets/img_course_nothing.png" alt="">
            <p>您尚未购买任何课程</p>
        </div>
    </div>
</template>
<style scoped>
    .pro {
        width: 22.25rem;
        min-height: 18rem;
        margin-left: 1.2rem;
        margin-top: 1rem;
    }

    .courses-category {
        min-height: 40rem;
    }

    .course-img {
        width: 22.25rem;
        height: 12rem;
    }

    .course-list {
        margin: 1rem;
    }

    .course-teacher {
        margin-top: 1rem;
    }

    .course-location {
        margin-top: .5rem;
    }

    @media (max-width: 768px) {

        .pro {
            margin-left: 4rem;
            margin-top: 2rem;
        }

    }

</style>
<script>
    import {mapGetters} from 'vuex'

    export default {
        created() {
            if (!this.isLogin) {
                return;
            }
            this.$get('/edu/course/GetEnrollByUser', {
                userid: this.userInfo.id,
            }, p => {
                if (p.httpCode == 200) {
                    this.arr = p.content.records;
                    this.hasData = p.content.total > 0;
                }
            })
        },
        computed: mapGetters([
            'userInfo',
            'isLogin',
        ]),
        data() {
            return {
                arr: [],
                hasData: false
            }
        }
    }
</script>
