<template>
    <div class="container">
        <p class="nav-title">已购买的课程</p>

        <div class="courses-category border-rad" v-if="hasData">
            <div class="subtitle">
                <div class="course-number">{{length}}门课程</div>
                <div class="dropdown course-type" v-if="hasData">
                    <button class="drop-btn" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                    <span class="course-type">全部类型
				        <span class="caret"></span>
			        </span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dLabel">
                        <li>
                            <a @click="type=1">线上</a>
                        </li>
                        <li>
                            <a @click="type=2">线下</a>
                        </li>
                        <li>
                            <a @click="type=3">专栏</a>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <div @click="$router.push({name:'buyereddetails',params:{id:item.enrollInfo.course.id}})"
                 class="pro skin-white"
                 v-for="item in arr"
                 v-show="type==item.enrollInfo.course.type">
                <div>
                    <img :src="item.enrollInfo.course.image" class="course-img">

                </div>

                <div class="course-list">
                    <div class="course-name">{{ item.enrollInfo.course.name }}<span class="online">{{ item.enrollInfo.course.type|coursType }}</span>
                    </div>
                    <div class="course-teacher">
                        <img src="@/assets/ic_home_teacher.png">
                        {{ item.userInfo.name }}
                    </div>
                    <div class="course-location">
                        <img src="@/assets/ic_location.png">
                        {{ item.enrollInfo.course.address }}
                    </div>

                </div>
                <div class="jindu">
                    <div class="jindu-inner" :style="{width:playPercent(item.enrollInfo.course.id) }"></div>
                </div>
                <div>
                    {{playPercentNum(item.enrollInfo.course.id)}}%
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
    .jindu {
        height: .8rem;
        background-color: gray;
        width: 100%;
    }

    .jindu-inner {
        background-color: #1CAF5E;
        height: .8rem;
    }

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
            });

            this.$get('/edu/video/getVideoAndRecordList', {
                uid: this.userInfo.id,
            }, p => {
                this.timeData = p.content
            });
        },
        computed: {
            ...mapGetters([
                'userInfo',
                'isLogin',
            ]),
            length() {
                let ret = 0;
                for (let item of this.arr) {
                    if (this.type == item.enrollInfo.course.type) {
                        ret++;
                    }
                }
                return ret;
            }
        },
        data() {
            return {
                arr: [],
                hasData: false,
                type: 1,
                timeData: {},
            }
        },
        methods: {
            playPercent(id) {
                for (let item of this.timeData) {
                    if (item.cid == id) {
                        return parseInt(item.currenttime * 100 / item.duration) + 'px'
                    }
                }
                return 0;

            },
            playPercentNum(id){
                for (let item of this.timeData) {
                    if (item.cid == id) {
                        return parseInt(item.currenttime * 100 / item.duration)
                    }
                }
                return 0;
            }
        }
    }
</script>
