<template>
    <div class="container">

        <p class="nav-title">全部 - 推荐 - {{ course.course.name }}</p>
        <div class="course-top pubwidth1">
            <div v-show="!isPlay">
                <div class="left">
                    <img :src="course.course.image">
                </div>
                <div class="right">
                    <p class="course-title font-big">{{ course.course.name }}</p>
                    <p class="font-middel">{{ course.course.type|isOnline }}</p>
                    <p class="course-price font-big">${{ course.course.price }}</p>
                    <p class="font-middle course-studynum">{{ course.course.totalNum }}人学过</p>
                    <div class="btns2">
                        <button class="white-btn" @click="play()">试看</button>
                        <button class="buy orange-btn" @click="diolog='pay'">购买</button>
                    </div>
                </div>
            </div>
            <div v-if="isPlay">
                <play :course="course.course" :url="videoUrl"></play>
            </div>
        </div>
        <div class="course-tab pubwidth1 border-rad">
            <div class="tab-bg" v-show="!isPlay">
                <ul class="tab-list font-middle">
                    <li @click="current='page1'" :class="current==='page1'?'active':''">课程信息</li>
                    <li @click="current='page2'" :class="current==='page2'?'active':''">图文介绍</li>
                    <li @click="current='page3'" :class="current==='page3'?'active':''">课程评论</li>
                </ul>
            </div>

            <ul class="tab-content skin-white">
                <li v-show="current==='page1'">
                    <div class="all-comment">
                        <p class="title">课程讲师</p>
                        <img :src="course.userInfo.headimgurl" class="img-left">
                        <div class="public-style-info">
                            <span class="font-middle">{{ course.userInfo.name }}</span>
                            <span class="font-bestsmall">{{ course.userExtra.remark||0 }}人关注</span>
                            <span class="attention"><a @click.prevent="view(course.userInfo.id)">关注</a> </span>
                            <br>
                            <span class="font-small">{{ course.userExtra.introduction }}</span>
                        </div>
                        <div class="clear"></div>
                        <p class="title">课程背景</p>
                        <p class="info font-small">{{ course.course.background }}</p>
                        <p class="title">课程受众</p>
                        <p class="info font-small" v-html="nl2br(course.course.audiences)">
                        </p>
                        <p class="title">学习目标</p>
                        <p class="info font-small" v-html="nl2br(course.course.target)">
                        </p>
                        <p class="title">学习地点</p>
                        <p class="info font-small">{{ course.course.address }}</p>
                    </div>
                </li>
                <li v-show="current==='page2'">
                    <ul>
                        <li v-for="item in course.introduction">
                            <img :src="item.url" alt="" width="100%">
                        </li>
                    </ul>
                </li>
                <li v-show="current==='page3'">
                    <div class="all-comment">
                        <div class="inputcon">
                            <textarea placeholder="输入您的评论" class="minput" v-model="comment"></textarea>
                            <button class="send-btn" @click="send()">发送</button>
                        </div>
                        <p class="title font-middle">共{{ comments.length }}条评论</p>


                        <div class="con-wrapper" v-for="item in comments">
                            <img :src="item.comment.headimgurl" class="img-left">
                            <div class="public-style-info">
                                <span class="font-middle">{{item.comment.uname}}</span>
                                <span class="font-bestsmall">{{item.comment.createDate|datetime}}</span>
                                <br>
                                <span class="font-small">{{item.comment.content}}。</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <p class="title" style="text-align: center" @click="load()">继续滚动加载更多</p>
                    </div>
                </li>
            </ul>
        </div>
        <pay v-if="diolog=='pay'" @close="diolog=null" :info="course.course"></pay>
    </div>
</template>


<style scoped>

    .course-top {
        /*height: 13.5rem;*/
        background-color: #F3F5F7;
        position: relative;
    }

    .course-top .left img {
        width: 24rem;
        /*height: 13.5rem;*/
    }

    .course-top .right {
        position: absolute;
        left: 25rem;
        top: 1rem;
    }

    /*课程信息部分*/
    .all-comment .title {
        color: #8087AB;
        margin-top: 2rem;

    }

    .all-comment .info {
        color: #666666;
        margin-left: 4rem;
    }

    .all-comment .attention {
        border: 1px solid #4459CC;
        border-radius: 0.625rem;
        width: 3rem;
        height: 1.25rem;
        line-height: 1.25rem;
        font-size: 0.7rem;
        text-align: center;
        display: inline-block;
        margin-left: .3rem;
    }

    .all-comment .attention a {
        color: #4459CC;
    }

    /*课程信息结束*/

    .con-wrapper {
        border-bottom: 1px solid #D8D8D8;
        padding: 2rem 0;
    }

    .course-tab {
        margin-top: 2rem;
    }

    .tab-bg {
        height: 2.5rem;
        background-color: #E4EAF3;
    }

    .font-middle {
        color: #222222;
    }

    .font-small {
        color: #666666;

    }

    .font-bestsmall {
        color: #A5A5A5;
        margin-left: .5rem;
    }

    .course-studynum {
        color: #A5A5A5;

    }

    .btns2 {
        width: 20rem;
        position: absolute;
        left: 0;
        top: 9rem;
    }

    .tab-list li {
        float: left;
        cursor: pointer;
        width: 7.5rem;
        color: #666666;
        height: 2.5rem;
        text-align: center;
        line-height: 2.5rem;
    }

    .active {
        background: #ffffff;
    }
</style>

<script>
    /* /edu/course/getCourseInfoById
     https://www.showdoc.cc/item/password/113014908063361?page_id=710161494064376&redirect=%2F113014908063361%3Fpage_id%3D710161494064376s
     评论 get  http://www.zhihui-app.com/edu/comment/getCommenPageByCourseNew?cid=263
           post doc https://www.showdoc.cc/113014908063361?page_id=1020245263315513

    */


    import {mapGetters} from 'vuex'
    import Pay from "../components/pay";
    import play from "../components/play";

    export default {
        components: {Pay, play},
        data() {
            return {
                pagenum: 1,
                comment: '',
                diolog: null,
                current: 'page1',
                isPlay: false,
                arr: [],
                videoUrl: '',
                course: {
                    course: {},
                    userInfo: {},
                    userExtra: {},
                    introduction: []
                },
                comments: []

            }
        },
        computed: mapGetters([
            'userInfo',
            'isLogin'
        ]),
        created() {
            this.load();
        },
        methods: {
            load() {
                let uid = 0;
                if (this.isLogin) {
                    uid = this.userInfo.id
                }
                this.$get("/edu/course/getCourseInfoById", {
                    id: this.$route.params.id,
                    uid
                }).then(p => {
                    if (p.data.httpCode == 200) {
                        this.course = p.data.content;
                        this.$get('/edu/video/getRealDownloadUrl', {
                            downloadUrl: p.data.content.course.freeVideo
                        }, p => {
                            this.videoUrl = p.content
                        })
                    }
                });

                this.$get('/edu/comment/getCommenPageByCourseNew', {
                    cid: this.$route.params.id
                }, p => {
                    if (p.httpCode == 200) {
                        this.comments = p.content.records;
                        this.$store.commit('comments', p.content.records);
                    }
                })
            },
            nl2br(str) {
                if (str) {
                    return str.replace(/\n/g, '<br/>')
                }
                return null
            }, send() {
                if (!this.isLogin) {
                    alert("请先登录");
                    return;
                }
                this.$post('/edu/comment/addComment', {
                    cid: this.$route.params.id,
                    uid: this.userInfo.id,
                    content: this.comment
                }, p => {
                    if (p.httpCode == 200) {
                        // alert('添加评论成功');
                        this.load()
                    } else {
                        alert(p.msg)
                    }
                })
            }, play() {
                this.isPlay = true;
                this.current = 'page3';
            }
        }
    }
</script>
