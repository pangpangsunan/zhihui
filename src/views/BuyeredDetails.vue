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
                    <div class="notices" v-if="course && course.message">
                        <p v-for="item in course.message.data">{{ item.content }}</p>
                        <img src="@/assets/qcode.png" style="width: 7.5rem;height: 7.5rem; margin-top: 3rem">
                    </div>
                </li>
                <li v-show="current==='page2'">
                    <div class="questions-page" v-for="record in records" v-show="topics.length==0">
                        <p class="col-sm-10">问卷名称：{{ record.name }}</p>

                        <div class="col-sm-2">
                            <button class="btn blue-btn" v-if="showToComplete(record.id)"
                                    @click="toComplete(record.id)">去完成
                            </button>
                        </div>
                    </div>

                    <div v-for="topic in topics" v-show="topics.length > 0">
                        <div class="question-group" v-if="topic.type=='radio'">
                            <div class="num">{{ topic.name }}</div>
                            <div class="question"></div>
                            <div class="choose1" v-for="item1 in topic.options">
                                <label style="margin-left:8rem">
                                    <input type="radio" :name="topic.name" :value="item1.name"/>
                                    &nbsp;&nbsp;&nbsp;{{ item1.content }}
                                </label>
                            </div>
                        </div>

                        <div class="question-group" v-if="topic.type=='text'">
                            <div class="num">{{ topic.name }}</div>
                            <div class="question"></div>
                            <div class="input"><input type="text" placeholder="请填写"></div>
                        </div>

                    </div>
                    <div style="text-align: center;margin-top: 3rem">
                        <button v-if="topics.length>0" class="btn orange-btn" @click="sendsur()">提交问卷</button>
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
                                <span class="font-bestsmall">{{item.comment.createDate | datetime}}</span>
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

    .notices {
        padding: 2rem;
        line-height: 2rem;
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
        min-height: 40rem;

    }

    .questions-page {
        /*text-align: center;*/
        width: 70%;
        margin: 0 auto;
        padding: 2rem 0;

    }

    .question-group {
        margin-top: 2rem;
        padding: 1rem;
    }

    .num, .question {
        text-align: left;
    }

    .choose1, .choose2 {
        margin-top: 1.5rem;
    }

    .input {
        text-align: left;
    }

    .input input {
        height: 2rem;
        width: 90%;
        margin-top: .5rem;
        background-color: #F3F5F7;
        border: 1px solid gray;
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
                current: 'page1',
                records: [],
                name: null,
                questions: [],
                course: {
                    course: {},
                    userInfo: {},
                    userExtra: {},
                    introduction: []
                },
                comments: [],
                topics: [],
                rec_id: 0,
                survey: [],
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
                        this.course = p.content.course;
                        this.survey = p.content.survey.data;
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
                });

                this.$get('/edu/survey/getSurveyPageByCourse', {
                    cid: this.$route.params.id,
                }, p => {
                    for (let item of p.content.records) {
                        if (item) {
                            this.records.push(item)
                        }
                    }
                });

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
            },
            toComplete(rec_id) {
                this.rec_id = rec_id;
                this.$get('/edu/survey/getSurveyAnswerDetail', {
                    uid: this.userInfo.id,
                    surveyId: rec_id
                }, p => {
                    if (p.httpCode == 200) {
                        this.topics = p.content.topics
                    }
                })
            },
            showToComplete(id){
                for (let obj of this.survey) {
                    if (id == obj.surveyId) {
                        return obj.status == 0;
                    }
                }
                return true;
            },
            sendsur() {
                this.$post('/edu/survey/sendSurvey', {
                    uid: this.userInfo.id,
                    surveyId: this.rec_id
                }, p => {
                    alert("提交成功！");

                    this.topics.length = 0;
                    this.$forceUpdate()
                })
            }

        }
    }
</script>
