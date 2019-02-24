<template>
    <div class="container">
        <p class="nav-title">全部 - 经营管理 - 领导力</p>
        <div class="subtitle">
            <div class="course-number">{{courseList.length}}门课程</div>
            <div class="dropdown course-type">
                <button class="drop-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <div class=" courses-category border-rad">
            <div class="pro skin-white">
                <router-link to="/courseInfo">
                    <img src="@/assets/cat.jpg" class="course-img">
                    <div class="course-list">
                        <div class="course-name">美国出口管制新政大盘点<span class="online">线上</span></div>
                        <div class="course-price font-middle">￥1200</div>
                        <div class="course-teacher font-bestsmall">
                            <img src="@/assets/ic_home_teacher.png">
                            谢顿宁
                        </div>
                        <div class="course-location font-bestsmall">
                            <img src="@/assets/ic_location.png">
                            上海市梅龙镇广场9楼
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="pro skin-white">
                <router-link to="/courseInfo">
                    <img src="@/assets/cat.jpg" class="course-img">
                    <div class="course-list">
                        <div class="course-name">美国出口管制新政大盘点<span class="online">线上</span></div>
                        <div class="course-price font-middle">￥1200</div>
                        <div class="course-teacher font-bestsmall">
                            <img src="@/assets/ic_home_teacher.png">
                            谢顿宁
                        </div>
                        <div class="course-location font-bestsmall">
                            <img src="@/assets/ic_location.png">
                            上海市梅龙镇广场9楼
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="pro skin-white">
                <router-link to="/courseInfo">
                    <img src="@/assets/cat.jpg" class="course-img">
                    <div class="course-list">
                        <div class="course-name">美国出口管制新政大盘点<span class="online">线上</span></div>
                        <div class="course-price font-middle">￥1200</div>
                        <div class="course-teacher font-bestsmall">
                            <img src="@/assets/ic_home_teacher.png">
                            谢顿宁
                        </div>
                        <div class="course-location font-bestsmall">
                            <img src="@/assets/ic_location.png">
                            上海市梅龙镇广场9楼
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="pro skin-white">
                <router-link to="/courseInfo">
                    <img src="@/assets/cat.jpg" class="course-img">
                    <div class="course-list">
                        <div class="course-name">美国出口管制新政大盘点<span class="online">线上</span></div>
                        <div class="course-price font-middle">￥1200</div>
                        <div class="course-teacher font-bestsmall">
                            <img src="@/assets/ic_home_teacher.png">
                            谢顿宁
                        </div>
                        <div class="course-location font-bestsmall">
                            <img src="@/assets/ic_location.png">
                            上海市梅龙镇广场9楼
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .diolog {
        width: 71.25rem;
        height: 20rem;
        background: rgba(34, 34, 34, 0.80);
        border-radius: 2px;
        position: absolute;
        margin: 0 auto;
    }

    .course-name {
        margin-top: 1rem;
    }

    .course-list {
        padding-left: 1rem;
    }

    .course-teacher, .course-price {
        margin-top: .8rem;
    }


    .pro {
        width: 22.25rem;
        height: 21rem;
        margin-left: 1.2rem;
        margin-top: 1rem;
    }

    .course-img {
        width: 22.25rem;
        height: 12.875rem;
    }

</style>
<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/course/getCoursePageByTeacher?id=1').then(p => {
                this.courseList = p.data.content.records
            })
        },
        data() {
            return {
                courseList: []
            }
        }
    }
</script>
