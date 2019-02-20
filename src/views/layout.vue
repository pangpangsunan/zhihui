<template>
    <div class="main">
        <div class="bg-black">
            <top></top>
        </div>
        <div class="container navcontainer">
            <ul class="nav col-sm-9">
                <li>
                    <router-link to="/" active-class="active" exact>首页</router-link>
                </li>
                <li>
                    <router-link to="/courses" active-class="active" exact>分类课程</router-link>
                </li>
                <li>
                    <router-link to="/buyered" active-class="active" exact>已购课程</router-link>
                </li>
                <li>
                    <router-link to="/myview" active-class="active" exact>我的关注</router-link>
                </li>
            </ul>
            <div class="col-sm-2 top-right">
                <router-link to="/"><i class="glyphicon glyphicon-comment"></i> 消息</router-link>
                <router-link to="/"><i class="glyphicon glyphicon-envelope"></i> 私信</router-link>
            </div>

        </div>

        <router-view/>
        <br>
        <bottom></bottom>
    </div>
</template>

<style scoped>

    .main {
        background: url(../assets/img_bg.png);
    }

    .navcontainer {
        width: 71.25rem;
        height: 3.25rem;
        background: #e4eaf3;
        margin-top: 1rem;
        padding: 0;
    }

    .nav {
        height: 3.125rem;
    }

    .nav li {
        float: left;
        height: 3.125rem;
        line-height: 3.125rem;
        width: 8.75rem;
        text-align: center;
    }

    .nav li a {
        padding: 0;
    }

    .nav li a.active, .nav li a:hover {
        background-color: #4459CC;
        color: #fff;
    }

    .top-right {
        width: 20%;
    }

    .top-right a {
        display: inline-block;
        margin-top: 1rem;
        margin-left: 1.875rem;
        color: #555555;
    }

    .bg-black {
        background-color: #444444;
    }

    .bg-black .container {
        padding: 1rem;
    }

    /*提取公共样式*/
    .main >>> .skin-white {
        background-color: #fff;
    }

    /*font-middle是表示20号的字体*/
    .main >>> .font-big {
        font-size: 1.25rem;
    }

    /*font-middle是表示14号的字体*/
    .main >>> .font-middle {
        font-size: .88rem;
    }

    /*font-middle是表示13号的字体*/
    .main >>> .font-small {
        font-size: .81rem;
    }

    /*font-middle是表示12号的字体*/
    .main >>> .font-bestsmall {
        font-size: .75rem;
    }

    .main >>> .border-rad {
        border-radius: 2px;
    }

    /*.no-attention*/
    .main >>> .no-attention {
        text-align: center;
        margin-top: 6rem;
    }

    .main >>> .blue-btn, .main >>> .orange-btn, .main >>> .white-btn {
        width: 6.75rem;
        height: 2.25rem;
        border-radius: 2px;
        color: #fff;
        font-size: 0.875rem;
        border: none;
    }
    .main >>> .font-style-gray {
        color: #222222;
        font-size: 1rem;
    }
    .main >>> .font-style-lightgray {
        color: #888888;
        font-size: .875rem;
    }

    .main >>> .blue-btn {
        background: #4459CC;
    }

    .main >>> .orange-btn {
        background-color: #F5892A;
        color: #fff;
    }

    .main >>> .white-btn {
        background-color: #fff;
        border: 1px solid #F5892A;
        color: #F5892A;
    }

    .main >>> .offline, .main >>> .online {
        display: inline-block;
        width: 2.5rem;
        height: 1.25rem;
        line-height: 1.25rem;
        border-radius: 0.625rem;
        background-color: #4459cc;
        font-size: 0.625rem;
        color: #fff;
        text-align: center;
        margin-left: 5px;
    }

    .main >>> .online {
        background-color: #1caf5f;
    }

    .main >>> .course-list a, .main >>> .pro a {
        color: #222222;
    }

    .main >>> .course-price {
        color: #f5892a;
    }

    .main >>> .course-name {
        height: 1rem;
        font-size: 1rem;
    }

    .main >>> .course-bg, .main >>> .course-teacher, .main >>> .course-location {
        color: #666666;
    }

    .main >>> .gray {
        position: relative;
        top: 3rem;
    }

    /*nav-title是类似，全部 - 经营管理 - 领导力*/
    .main >>> .nav-title {
        color: #666666;
        font-size: 0.875rem;
        padding: 1rem 0 0.5rem 0;
    }

    .main >>> .subtitle {
        color: #666666;
        background-color: #F3F5F7;
        margin: 0;
        font-size: 0.875rem;
        padding: 1rem 0 0 1rem;
    }

    .main >>> .course-number {
        float: left;
    }

    .main >>> .course-type {
        float: right;
        padding-right: 2rem;
    }

    .main >>> .btns1 {
        position: absolute;
        right: 3.125rem;
        top: 6.25rem;
    }

    .main >>> .buy {
        margin-left: 1rem;
    }


    /*课程信息和课程播放公用部分开始*/

    .main >>> .public-style-info {
        float: right;
        width: 65rem;
        padding-right: 4rem;
        margin-top: 0.5rem;
    }

    .main >>> .all-comment {
        padding: 1rem;
        position: relative;
    }

    .main >>> .img-left {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 3.75rem;
        float: left;
    }

    .main >>> .inputcon {
        position: relative;
    }

    .main >>> .minput{
        width: 69rem;
        height: 6.25rem;
        background: #E9EBEC;
        font-size: 0.8125rem;
        color: #222222;
        border: none;
        padding: 0.5rem;

    }

    .main >>> .send-btn {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        width: 6.75rem;
        height: 2.25rem;
        background: #4459CC;
        color: #fff;
        font-size: 0.875rem;
    }

    .main >>> textarea.minput::-webkit-input-placeholder,
    .main >>> textarea.return-input::-webkit-input-placeholder{
        /* placeholder颜色  */
        color: #666666;
        border: none;
    }

    /*课程信息和课程播放公用部分结束*/

</style>

<script>
    export default {
        components: {
            top: () => import('@/components/top.vue'),
            bottom: () => import('@/components/bottom.vue')
        }
    }
</script>
