<template>
    <div class="container">

        <p class="navHead">正在播放 - 美国出口管制新政大盘点</p>
        <div class="projectplay">
            <div class="videosp">
                <video src="http://47.92.130.227/upload/sp2.mp4" width="100%" height="100%" controls="controls"></video>
            </div>
            <div class="right">
                <p class="title">美国出口管制新政大盘点</p>
                <p class="trywatch">试看版</p>
                <p class="content">企业如何理解和掌握这些新政的要义，并结合自身的产品与业务特点制定和完善相应的贸易合规制度，</p>
                <div class="att-wrapper">
                    <img src="@/assets/cat.jpg" class="img-left">
                    <span class="name">吴苏南</span>
                    <br>
                    <span class="att-number">12人关注ß</span>
                    <button class="attentionbtn">关注</button>

                    <div class="clear"></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="projectab">

            <ul class="tab-content">
                <li v-show="current==='page3'">
                    <div class="all-comment">
                        <div class="inputcon">
                            <textarea placeholder="输入您的评论" rows="4" maxlength="50">wwwwwwww</textarea>
                            <button class="sendbtn">发送</button>
                        </div>
                        <p class="title">共587条评论</p>
                        <div class="con-wrapper">
                            <img src="@/assets/cat.jpg" class="img-left">
                            <div class="public-style-info">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。</span>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="con-wrapper">
                            <img src="@/assets/cat.jpg" class="img-left">
                            <div class="public-style-info">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。</span>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="con-wrapper">
                            <img src="@/assets/cat.jpg" class="img-left">
                            <div class="public-style-info">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。</span>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="con-wrapper">
                            <img src="@/assets/cat.jpg" class="img-left">
                            <div class="public-style-info">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。</span>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="con-wrapper">
                            <img src="@/assets/cat.jpg" class="img-left">
                            <div class="public-style-info">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">具体的实现是通过getElementsByTagName方法，先对选项卡三个标头H3进行捕获，产生一个数组，我们利用for循环分别对每个标头选项H3添加一个index属性作为它的序号同时注册单击事件，当某个H3被单击时，我们先把所有的H3都变成原始状态，没active类，然后再把被单击的H3要添加一个active类使其变成白色，此时，我们还要知道被单击H3的序号，这样我们可以去，设定与之序号相同的DIV显示出来，而其它的DIV刚隐藏起来。</span>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <p class="title" style="text-align: center">继续滚动加载更多</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>


<style>
    .trywatch {
        font-size: 14px;
        color: #888888;
        letter-spacing: 0;
        line-height: 24px;
    }

    .inputcon {
        position: relative;
    }

    textarea {
        width: 69rem;
        height: 6.25rem;
        background: #E9EBEC;
        font-size: 0.8125rem;
        color: #222222;
        border: none;
        padding: 0.5rem;

    }

    .sendbtn, .attentionbtn {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        width: 6.75rem;
        height: 2.25rem;
        background: #4459CC;
        border-radius: 2px;
        color: #fff;
        font-size: 0.875rem;
    }

    .attentionbtn {
        right: 1.8rem;
        bottom: 0.3rem;
    }

    textarea::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #666666;
    }

    .con-wrapper {
        border-bottom: 1px solid #D8D8D8;
        padding: 2rem 0;
    }

    .att-wrapper {
        position: relative;
        margin-top: 12rem;
    }

    .att-wrapper .img-left {
        width: 3rem;
        height: 3rem;
    }
    .att-wrapper .name {
        padding-left: 0.5rem;
    }
    .att-wrapper .att-number {
        font-size: .875rem;
    }

    .tab-bg {
        width: 71.25rem;
        height: 2.5rem;
        background-color: #E4EAF3;
    }

    .btns {
        width: 20rem;
        position: absolute;
        left: 0;
        top: 9rem;
    }

    .projectplay {
        width: 71.25rem;
        background-color: #F3F5F7;
    }

    .videosp {
        width: 46rem;
        height: 25rem;
        float: left;
    }

    .projectplay .right {
        float: right;
        width: 23rem;
        padding-top: 1rem;
    }

    .projectplay .right .title {
        color: #222222;
        font-size: 20px;
    }

    .content, .Cname, .Caddress {
        color: #666666;
        font-size: 0.75rem;
    }

    .price {
        color: #F5892A;
        font-size: 0.875rem;
    }

    .projectab {
        width: 71.25rem;
        background-color: #F3F5F7;
        margin-top: 2rem;
    }


    .tab-list li {
        float: left;
        cursor: pointer;
        width: 7.5rem;
        color: #666666;
        height: 2.5rem;
        text-align: center;
        line-height: 2.5rem;
        font-size: .875rem;
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
