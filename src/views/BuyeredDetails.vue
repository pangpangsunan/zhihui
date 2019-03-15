<template>
    <div class="container">

        <p class="nav-title">正在播放 - {{ course.name }}</p>
        <div class="course-play skin-white border-rad">
            <div class="videosp">
                <video src="http://video.zhihui-app.com/%2F194%2F267-0?e=1551536816&token=JksNydlEkUXgEMbcfG2AtG97Cj0iM3zOq0abjVQS:uQFDCTYW4TTQUSQjj_8AJPmPRRs="
                       id="vd" width="100%" height="100%" controls="controls"></video>
            </div>
            <div class="right">
                <p class="title font-big">{{ course.name }}</p>
                <p class="trywatch">试看版</p>
                <p class="content">{{ course.background }}</p>
                <div class="att-wrapper">
                    <img :src="course.image" class="img-left">
                    <span>{{ course['function'] }}</span>
                    <br>
                    <span class="font-middle">{{ course.totalNum }}人关注</span>
                    <button class="attention-btn blue-btn">关注</button>

                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="course-tab pubwidth1 border-rad">
            <div class="tab-bg">
                <ul class="tab-list font-middle">
                    <li @click="current='page1'" :class="current==='page1'?'active':''">课程通知</li>
                    <li @click="current='page2'" :class="current==='page2'?'active':''">课程问卷</li>
                    <li @click="current='page3'" :class="current==='page3'?'active':''">课程评论</li>
                </ul>
            </div>

            <ul class="tab-content">
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
                   <div class="questions">
                        <p>问卷名称：被商说效将在将建律影</p>
                       <div>题目一 （单选）</div>
                       <div>石斗织华响越生加极，院明运局值白构，去京询壳鹰写医</div>
                       <div><button class="lightgray-btn">是</button> </div>
                       <div><button class="darkgray-btn">不是</button> </div>
                   </div>
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

    </div>
</template>


<style scoped>

    .videosp {
        width: 46rem;
        height: 25rem;
        float: left;
    }

    .course-play .right {
        float: right;
        width: 23rem;
        padding-top: 1rem;
    }

    .content {
        color: #666666;
    }

    .trywatch {
        font-size: 14px;
        color: #888888;
        letter-spacing: 0;
        line-height: 24px;
    }

    .att-wrapper {
        margin-top: 10rem;
    }

    .attention-btn {
        margin-left: 7rem;
    }

    .title {
        margin-top: 2rem;
        color: #8087AB;
    }

    .active {
        background: #ffffff;
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

    /*问卷调查*/
    .tab-content {
        background-color: #F3F5F7;

    }
    .questions {
        text-align: center;
    }


    .con-wrapper {
        border-bottom: 1px solid #D8D8D8;
        padding: 2rem 0;
    }

    .course-tab {
        margin-top: 2rem;
        min-height: 30rem;
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

    export default {
        data() {
            return {
                pagenum: 1,
                comment: '',
                current: 'page2',
                arr: [],
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
                }, p => {
                    if (p.httpCode == 200) {
                        this.course = p.content;
                        this.$store.commit('course', p.content.course);
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
            }
        }
    }
</script>
