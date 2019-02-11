<template>
    <div class="container">
        <p class="navHead">全部 - 推荐 - 美国出口管制新政大盘点</p>
        <div class="projectplay">
            <div class="left">
                <img src="">
            </div>
            <div class="right">
                <p class="title">国出口管制新政大盘点</p>
                <p class="content">线下课程</p>
                <p class="price">$1200</p>
                <p class="content">1234人学过</p>
                <div class="btns">
                    <button id="trywatch">试看</button>
                    <button id="buy">购买</button>
                </div>
            </div>
        </div>
        <div class="projectab">
            <div class="tab-bg">
                <ul class="tab-list">
                    <li @click="current='page1'" :class="current==='page1'?'active':''">课程信息</li>
                    <li @click="current='page2'" :class="current==='page2'?'active':''">图文介绍</li>
                    <li @click="current='page3'" :class="current==='page3'?'active':''">课程评论</li>
                </ul>
            </div>

            <ul class="tab-content">
                <li v-show="current==='page1'">
                    <div class="all-comment">
                        <p class="title">课程讲师</p>
                        <div class="public-style-info">
                            <img src="@/assets/cat.jpg" style="width: 3.75rem;height: 3.75rem;border-radius: 3.75rem;">
                            <span class="name">谢顿宁</span>
                            <span class="att-number">7人关注</span>
                            <span class="attention"><a href="javascript:;">关注</a> </span>
                            <br>
                            <span class="teacher-info">国际贸易与海事事务专家、世界海关组织认证培训师、联合国安理会贸易管制专家智库成员。十一年中国海关工作经验，主要研究领域包括：商品归类、海关估价、原产地规则、风险管理、贸易管制等，曾为中国入世谈判提供智力支持。受国内外多个平台和机构邀请，常年为社会各界提供：理论研究、政策咨询、专题演讲、培训辅导等专业服务。</span>
                        </div>
                        <p class="title">课程背景</p>
                        <p class="info">2018年是美国对外贸易政策发生剧变的一年。在出口管制领域，美国政府多管齐下，全面加强了整个出口管制体系的立法与执法。</p>
                        <p class="title">课程受众</p>
                        <p class="info">企业如何理解和掌握这些新政的要义，并结合自身的产品与业务特点制定和完善相应的贸易合规制度，在保障生产经营活动的连续性和稳定性的同时有效控制合规风险？</p>
                        <p class="title">学习目标</p>
                        <p class="info">
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
                        <p class="info">上海市梅龙镇广场9楼</p>
                    </div>
                </li>
                <li v-show="current==='page2'" style="background-color: burlywood;">我是two</li>
                <li v-show="current==='page3'">
                    <div class="all-comment">
                        <p class="title">共587条评论</p>
                        <div class="public-style-info page3">
                            <img src="@/assets/cat.jpg" style="width: 3.75rem;height: 3.75rem;border-radius: 3.75rem;">
                            <div class="info-wrapper">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。</span>
                            </div>

                        </div>
                        <div class="public-style-info page3">
                            <img src="@/assets/cat.jpg" style="width: 3.75rem;height: 3.75rem;border-radius: 3.75rem;">
                            <div class="info-wrapper">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。</span>
                            </div>
                        </div>
                        <div class="public-style-info page3">
                            <img src="@/assets/cat.jpg" style="width: 3.75rem;height: 3.75rem;border-radius: 3.75rem;">
                            <div class="info-wrapper">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。</span>
                            </div>
                        </div>
                        <div class="public-style-info page3">
                            <img src="@/assets/cat.jpg" style="width: 3.75rem;height: 3.75rem;border-radius: 3.75rem;">
                            <div class="info-wrapper">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。</span>
                            </div>
                        </div>
                        <div class="public-style-info page3">
                            <img src="@/assets/cat.jpg" style="width: 3.75rem;height: 3.75rem;border-radius: 3.75rem;">
                            <div class="info-wrapper">
                                <span class="name">吴苏南</span>
                                <span class="att-number">2018-12-05 19:10</span>
                                <br>
                                <span class="teacher-info">全是干货，支持。具体的实现是通过getElementsByTagName方法，先对选项卡三个标头H3进行捕获，产生一个数组，我们利用for循环分别对每个标头选项H3添加一个index属性作为它的序号同时注册单击事件，当某个H3被单击时，我们先把所有的H3都变成原始状态，没active类，然后再把被单击的H3要添加一个active类使其变成白色，此时，我们还要知道被单击H3的序号，这样我们可以去，设定与之序号相同的DIV显示出来，而其它的DIV刚隐藏起来。</span>
                            </div>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<style>
    .page3 {
        border-bottom: 1px solid #D8D8D8;
        padding-top: 2rem;
    }

    .info-wrapper {
        position: relative;
        left: 0;
        top: -4rem;
    }

    .projectab {
        width: 71.25rem;
        background-color: #F3F5F7;
        margin-top: 2rem;
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
        height: 13.5rem;
        background-color: #F3F5F7;
        position: relative;
    }

    .projectplay .left {
        width: 24rem;
        height: 13.5rem;
        background: blue;
    }

    .projectplay .right {
        position: absolute;
        left: 25rem;
        top: 1rem;
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
