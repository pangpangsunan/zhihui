<template>

    <div class="about-page">
        <div class="about-content">
            <p class="about-font">关于我们</p>
            <p class="about-intro">智荟应用是一款由杭州小同网络科技有限公司研发的互联网自由讲师平台。
                智荟针对商务领域的海内外高端培训师和他们的用户提供线上与线下课程制作、宣传、预定、购买以及定制化学习体验。智荟应用支持PC端、移动APP和微信小程序等多平台接入。</p>
            <ul class="about-list">
                <li>
                    <img src="@/assets/ic_about_teacher.png">
                    <p class="role">如果您是讲师</p>
                    <p class="font-tro">发布你的个人介绍与课程库<br>
                        发布你的线下培训和活动并通过平台收款<br>
                        发布你的线上视频课程并通过平台收款</p>
                </li>
                <li style="background-color: rgba(255,255,255,0.1)">
                    <img src="@/assets/ic_about_student.png">
                    <p class="role">如果您是个人学员</p>
                    <p class="font-tro">寻找并搜索心仪讲师与课程<br>
                        在线购买并学习<br>
                        课后评价与满意度<br>
                        迅速加入您的学员群</p>
                </li>
                <li>
                    <img src="@/assets/ic_about_group.png">
                    <p class="role">如果您是公司/商业组织</p>
                    <p class="font-tro">以HR/管理人员身份注册<br>
                        寻找并搜索心仪讲师与课程<br>
                        公司采购线下课程：与讲师直接签约<br>
                        公司采购线上课程：平台技术团队全程支持、可定制</p>
                </li>
            </ul>
            <div class="clear"></div>
            <div class="under">
                <p class="about-font" style="">下载App</p>
                <p class="qcode"><img src="@/assets/anzhuo.png" style="width: 14rem; height: 4rem;"></p>
                <p class="role">您也可以通过扫描下方二维码下载智荟：</p>
                <p class="qcode"><img src="@/assets/img_about_qr_code.png"></p>
                <img src="@/assets/img_about_app.png" class="phone">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
    .about-page {
        min-height: 50rem;
        background-color: #4459CC;

    }

    .about-content {
        min-width: 75rem;
        min-height: 40rem;
        text-align: center;
        margin: 0 auto;
        background: url(../assets/bg_login.png) no-repeat;
        padding-top: 5rem;

    }

    .about-font, .about-intro {
        font-family: SourceHanSansSC-Medium;
        font-size: 28px;
        color: #FFFFFF;
        letter-spacing: 2px;
        text-align: center;
        line-height: 28px;

    }

    .about-intro {
        font-family: SourceHanSansSC-Regular;
        font-size: 16px;
        width: 50rem;
        letter-spacing: 0.5px;
        line-height: 24px;
        margin: 3rem auto;
        text-align: left;
    }

    .about-list {
        margin: 0;
        padding: 0;
        width: 60rem;
        margin: 4rem auto;
    }

    .about-list li {
        width: 20rem;
        height: 15.38rem;
        background: rgba(255, 255, 255, 0.2);
        float: left;
        text-align: center;
        padding: 1.5rem 1rem;
        color: #fff;

    }

    .role {
        margin-top: 1rem;
        font-size: .88rem;
        color: #fff;
    }

    .font-tro {
        font-size: .75rem;
    }

    .under {
        position: relative;
        width: 60rem;
        margin: 0 auto;
        text-align: left;
        padding: 3rem 0;
    }

    .under .about-font {
        text-align: left;
    }

    .phone {
        position: absolute;
        bottom: 0;
        right: 5rem;
    }
    .qcode {
        margin: 2rem 0;
    }


</style>