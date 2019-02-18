<template>
    <div class="container">

        <p class="nav-title">正在播放 - 美国出口管制新政大盘点</p>
        <div class="course-play skin-white border-rad">
            <div class="videosp">
                <video src="http://47.92.130.227/upload/sp2.mp4" width="100%" height="100%" controls="controls"></video>
            </div>
            <div class="right">
                <p class="title font-big">美国出口管制新政大盘点</p>
                <p class="trywatch">试看版</p>
                <p class="content">企业如何理解和掌握这些新政的要义，并结合自身的产品与业务特点制定和完善相应的贸易合规制度，</p>
                <div class="att-wrapper">
                    <img src="@/assets/cat.jpg" class="img-left">
                    <span>吴苏南</span>
                    <br>
                    <span class="font-middle">12人关注</span>
                    <button class="blue-btn attention-btn">关注</button>

                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="course-tab pubwidth1 border-rad">
            <div class="tab-content skin-white">
                <div class="all-comment">
                    <div class="inputcon">
                        <textarea placeholder="输入您的评论" class="minput">wwwwwwww</textarea>
                        <button class="send-btn border-rad">发送</button>
                    </div>
                    <p class="title font-middle">共587条评论</p>
                    <div class="con-wrapper">
                        <img src="@/assets/cat.jpg" class="img-left">
                        <div class="public-style-info">
                            <span class="font-middle">吴苏南</span>
                            <span class="font-bestsmall">2018-12-05 19:10</span>
                            <br>
                            <span class="font-small font-small">全是干货，支持。</span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="con-wrapper">
                        <img src="@/assets/cat.jpg" class="img-left">
                        <div class="public-style-info">
                            <span class="font-middle">吴苏南</span>
                            <span class="font-bestsmall">2018-12-05 19:10</span>
                            <br>
                            <span class="font-small">全是干货，支持。</span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="con-wrapper">
                        <img src="@/assets/cat.jpg" class="img-left">
                        <div class="public-style-info">
                            <span class="font-middle">吴苏南</span>
                            <span class="font-bestsmall">2018-12-05 19:10</span>
                            <br>
                            <span class="font-small">全是干货，支持。</span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="con-wrapper">
                        <img src="@/assets/cat.jpg" class="img-left">
                        <div class="public-style-info">
                            <span class="font-middle">吴苏南</span>
                            <span class="font-bestsmall">2018-12-05 19:10</span>
                            <br>
                            <span class="font-small">全是干货，支持。</span>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="con-wrapper">
                        <img src="@/assets/cat.jpg" class="img-left">
                        <div class="public-style-info">
                            <span class="font-middle">吴苏南</span>
                            <span class="font-bestsmall">2018-12-05 19:10</span>
                            <br>
                            <span class="font-small">全是干货，支持。</span>
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

    .attentionbtn {
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
    export default {
        data() {
            return {
                current: 'page3'
            }
        }
    }
</script>
