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
            <div class="tab-content skin-white">
                <div class="all-comment">
                    <div class="inputcon">
                        <textarea placeholder="输入您的评论" v-model="comment" class="minput"></textarea>
                        <button class="send-btn border-rad" @click="send()">发送</button>
                    </div>
                    <p class="title font-middle">共{{ comments.length }}条评论</p>
                    <div class="con-wrapper" v-for="item in comments">
                        <img :src="item.comment.headimgurl" class="img-left">
                        <div class="public-style-info">
                            <span class="font-middle">{{ item.comment.uname }}</span>
                            <span class="font-bestsmall">{{ item.comment.createDate|datetime }}</span>
                            <br>
                            <span class="font-small font-small">{{ item.comment.content }}</span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <p class="title" style="text-align: center">继续滚动加载更多</p>
                </div>

            </div>
        </div>


    </div>
</template>
<style scoped>

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

    .con-wrapper {
        border-bottom: 1px solid #D8D8D8;
        padding: 2rem 0;
    }

    .course-tab {
        margin-top: 2rem;
    }

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
</style>

<script>
    /*
    评论接口 http://zh.zhihui-app.com/edu/comment/getCommenPageByCourseNew?cid=263
    上传进度 https://www.showdoc.cc/113014908063361?page_id=1595552577929797
     */
    import {mapGetters} from 'vuex'
    import axios from 'axios'
    import qs from 'querystring'

    export default {
        data() {
            return {
                comment: null
            }
        },
        computed: mapGetters([
            'course',
            'comments',
            'userInfo'
        ]), methods: {
            send() {
                axios.post('/edu/comment/addComment', qs.stringify({
                    cid: this.$route.params.id,
                    uid: this.userInfo.id,
                    content: this.comment
                })).then(p => {
                    if (p.data.httpCode == 200) {
                        // alert('添加评论成功');
                        this.load()
                    } else {
                        alert(p.data.msg)
                    }
                })
            }
        }
    }
</script>
