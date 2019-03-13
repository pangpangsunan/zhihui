<template>
    <div class="container">
        <p class="nav-title">讲师主页</p>
        <div class="teacher-wrapper">
            <div class="teacher-wrapper-top">
                <img :src="obj.headimgurl" class="teacher-img">
                <div class="teacher-name">{{obj.name}}</div>
                <div class="fans-number">{{ 0 }} 粉丝</div>
                <div class="msg-btn">
                    <button class="blue-btn" @click="view($route.params.id)">关注</button>
                    <button @click="$router.push({name:'chat',params:$route.params})" class="orange-btn"
                            style="margin-left: 1rem">私信
                    </button>
                </div>
            </div>
            <div class="teacher-info">
                <p class="teacher-tag">个人简介</p>
                <p style="text-align: center;">{{obj2.introduction}}</p>

                <p class="spread" @click="expand=true" v-show="!expand"><img src="@/assets/ic_expand.png"> 展开</p>
                <div v-show="expand">
                    <div class="clearfix"></div>
                    <p class="teacher-tag">过往客户</p>
                    <p>{{obj2.customerIntroduction}}</p>
                    <p class="teacher-tag">语言能力</p>
                    <p>{{obj.language}}</p>
                    <p class="teacher-tag">从业经验</p>
                    <p>{{ obj2.customerIntroduction }}</p>
                    <p class="spread" @click="expand=false" v-show="expand"><img src="@/assets/ic_less.png"> 收起</p>
                </div>
            </div>
        </div>
        <div class="subtitle">
            <div class="course-number">门课程</div>
            <div class="dropdown course-type">
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
        <div class="courses-type">

            <div class="pro" v-for="item in arr">
                <router-link :to="{name:'courseInfo',params:$route.params}">
                    <div class="top-img">
                        <img :src="item.courseInfo.image">
                    </div>
                    <div class="p-title">{{ item.courseInfo.name }}<span class="online">线上</span></div>
                    <div class="price">￥{{ item.courseInfo.price }}</div>
                    <div class="name">
                        <img src="@/assets/ic_home_teacher.png">
                        {{ obj.name }}
                    </div>
                    <div class="name">
                        <img src="@/assets/ic_location.png">
                        {{ item.courseInfo.address }}
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>

    .teacher-wrapper {
        border-radius: 2px;
        background-color: #F3F5F7;
        text-align: center;
    }

    .teacher-wrapper-top {
        background: #FFFFFF;
        height: 20rem;

    }

    .teacher-img {
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 7.5rem;
        margin-top: 3rem;

    }

    .subtitle {
        margin-top: 2rem !important;
    }

    .teacher-info {
        font-size: .812rem;
        color: #666666;
        padding: 1rem 1rem 2rem 1rem;
        /*height: 8.75rem;*/
        overflow: hidden;
    }

    .spread {
        color: #4459CC;
        font-size: .8125rem;
        float: right;
        cursor: pointer;
    }

    .teacher-tag {
        font-size: .875rem;
        color: #8087AB;
        padding: .7rem 0;
    }

    .teacher-name {
        color: #222222;
        margin-top: 1rem;
    }

    .fans-number {
        color: #888888;
        font-size: .875rem;
        margin-top: .5rem;
    }

    .msg-btn {
        margin-top: 1rem;
    }

    .courses-type {
        background-color: #F3F5F7;
        border-radius: 2px;
        display: flex;
        flex-wrap: wrap;
    }

    .pro {
        width: 22.25rem;
        height: 20.25rem;
        margin-left: 1.2rem;
        background-color: #fff;
        margin-top: 1rem;
    }

    .top-img {
        width: 22.25rem;
        height: 12.875rem;
        background-color: blue;
    }

    .top-img img {
        width: 100%;
        height: 100%;
    }

    .p-title {
        font-size: 1rem;
        color: #222222;
        letter-spacing: 0.5px;
        line-height: 1.5rem;
        padding: 0.5rem 1rem 1rem 1rem;
    }

    .price {
        font-size: 0.875rem;
        color: #F5892A;
        letter-spacing: 0.5px;
        line-height: 1.2rem;
        padding: 0 1rem;
    }

    .name {
        padding: 0.3rem 1.1rem;
        font-size: 0.75rem;
        color: #666666;
        letter-spacing: 0.2px;
        line-height: 0.75rem;
    }

    @media screen and (max-width: 768px) {

        .teachname {
            font-size: 16px;
        }
    }
</style>
<script>

    export default {
        created() {
            this.$get('/edu/course/getTeacherInfoByCourse', {
                cid: 268
            }, p => {
                this.obj = p.content.userInfo;
                this.obj2 = p.content.userExtra;
            });
            this.$get('/edu/course/getCoursePageByTeacher', {
                    id: this.$route.params.id
                },
                p => {
                    this.arr = p.content.records;
                })
        },
        data() {
            return {
                obj: {},
                obj2: {},
                expand: false,
                arr: []
            }
        },
    }

</script>
