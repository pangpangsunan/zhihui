<template>
    <div class="container">

        <p class="nav-title">全部 - 推荐 - 美国出口管制新政大盘点</p>
        <div class="course-top pubwidth1">
            <div class="left">
                <img src="@/assets/cat.jpg">
            </div>
            <div class="right">
                <p class="course-title font-big">国出口管制新政大盘点</p>
                <p class="font-middel">线下课程</p>
                <p class="course-price font-big">$1200</p>
                <p class="font-middle course-studynum">1234人学过</p>
                <div class="btns2">
                    <button class="white-btn" @click="$router.replace('/coursePlay')">试看</button>
                    <button class="orange-btn buy">购买</button>
                </div>
            </div>
        </div>
        <div class="course-tab pubwidth1 border-rad">
            <div class="tab-bg">
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
                        <img src="@/assets/cat.jpg" class="img-left">
                        <div class="public-style-info">
                            <span class="font-middle">谢顿宁</span>
                            <span class="font-bestsmall">7人关注</span>
                            <span class="attention"><a href="javascript:;">关注</a> </span>
                            <br>
                            <span class="font-small">世界海关组织认证培训师、联合国安理会贸易管制专家智库成员。国际贸易与海事事务专家、世界海关组织认证培训师、联合国安理会贸易管制专家智库成员。十一年中国海关工作经验，主要研究领域包括：商品归类、海关估价、原产地规则、风险管理、贸易管制等，曾为中国入世谈判提供智力支持。受国内外多个平台和机构邀请，常年为社会各界提供：理论研究、政策咨询、专题演讲、培训辅导等专业服务。</span>
                        </div>
                        <div class="clearfix"></div>
                        <p class="title">课程背景</p>
                        <p class="info font-small">2018年是美国对外贸易政策发生剧变的一年。在出口管制领域，美国政府多管齐下，全面加强了整个出口管制体系的立法与执法。</p>
                        <p class="title">课程受众</p>
                        <p class="info font-small">
                            企业如何理解和掌握这些新政的要义，并结合自身的产品与业务特点制定和完善相应的贸易合规制度，在保障生产经营活动的连续性和稳定性的同时有效控制合规风险？</p>
                        <p class="title">学习目标</p>
                        <p class="info font-small">
                            课程要点（Agenda）<br>
                            美国出口管制法律框架<br>
                            出口、视同出口、再出口<br>
                            出口管制清单、实体清单、国别图<br>
                            许可证申请与例外<br>
                            2018出口管制改革法案概要<br>
                            2018外国投资风险评估现代化法案概要<br>
                            “主要制裁”和“次要制裁”<br>
                            内部控制/合规计划<br>
                            出口管制合规实践。</p>
                        <p class="title">学习地点</p>
                        <p class="info font-small">上海市梅龙镇广场9楼</p>
                    </div>
                </li>
                <li v-show="current==='page2'" style="background-color: burlywood;">我是two</li>
                <li v-show="current==='page3'">
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
                        <div class="con-wrapper">
                            <img src="@/assets/cat.jpg" class="img-left">
                            <div class="public-style-info">
                                <span class="font-middle">吴苏南</span>
                                <span class="font-bestsmall">2018-12-05 19:10</span>
                                <br>
                                <span class="font-small">具体的实现是通过getElementsByTagName方法，先对选项卡三个标头H3进行捕获，产生一个数组，我们利用for循环分别对每个标头选项H3添加一个index属性作为它的序号同时注册单击事件，当某个H3被单击时，我们先把所有的H3都变成原始状态，没active类，然后再把被单击的H3要添加一个active类使其变成白色，此时，我们还要知道被单击H3的序号，这样我们可以去，设定与之序号相同的DIV显示出来，而其它的DIV刚隐藏起来。</span>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <p class="title" style="text-align: center">继续滚动加载更多</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>
<style scoped>
    .pubwidth1 {
        width: 71.25rem;
    }

    .course-top {
        height: 13.5rem;
        background-color: #F3F5F7;
        position: relative;
    }

    .course-top .left img {
        width: 24rem;
        height: 13.5rem;
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
    export default {
        data() {
            return {
                current: 'page1'
            }
        }
    }
</script>
