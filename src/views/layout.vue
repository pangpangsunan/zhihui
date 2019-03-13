<template>
    <div class="main">
        <div class="bg-black">
            <top></top>
        </div>
        <div class="container navcontainer">
            <ul class="nav">
                <li>
                    <router-link to="/" active-class="active" exact>首页</router-link>
                </li>
                <li>
                    <router-link to="/courses" @click.native="showMenu" active-class="active" exact>分类课程</router-link>
                </li>
                <li>
                    <router-link to="/buyered" active-class="active" exact>已购课程</router-link>
                </li>
                <li>
                    <router-link to="/myview" active-class="active" exact>我的关注</router-link>
                </li>
            </ul>

            <div class="top-right">
                <router-link to="/message" class="hover">
                    <i class="glyphicon glyphicon-comment"></i>消息
                </router-link>
                <router-link to="/privatemsg" class="private">
                    <i class="glyphicon glyphicon-envelope"></i> 私信
                </router-link>
            </div>
        </div>

        <router-view/>
        <br>
        <bottom></bottom>

    </div>
</template>

<style scoped>
    .main {
        color: #222222;
    }

    .main >>> .public-course {
        width: 40rem;
        height: 24.5rem;
        margin: 5rem auto;
        border-radius: 4px;
        padding: 5rem;

    }

    .public-course form {
        border: 1px solid red;
    }

    .main {
        background: url(../assets/img_bg.png);
        color: #222222;
    }

    .container {
        padding: 0;
    }

    .navcontainer {
        background: #e4eaf3;
        margin-top: 1rem;
        padding: 0;
        height: 3.125rem;
        position: relative;
    }

    .nav {
        height: 3.125rem;
        position: absolute;
        left: 0;
        top: 0;
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
        width: 13%;
        position: absolute;
        right: 5%;
    }

    .top-right .hover, .top-right .private {
        margin-top: 1rem;
    }

    .top-right .hover {
        float: left;
    }

    .top-right .private {
        float: right;
    }

    .top-right a {
        margin-left: 1.875rem;
        color: #555555;
    }

    .hover {
        overflow: hidden;
        position: relative;

    }

    .hover:hover {
        overflow: visible;
    }

    .hover .gonggao {
        position: absolute;
        left: -14rem;
        top: 2rem;
        width: 18rem;
        padding: 1rem;
        height: 4.5rem;
        background: #fff;
        box-shadow: 0 4px 4px 0 rgba(78, 82, 85, 0.50);
        border-radius: 2px;
        z-index: 100;
    }

    .bg-black {
        background-color: #444444;
    }

    .bg-black .container {
        padding: 1rem;
    }

    @media (max-width: 1024px) {

        .top-right {
            width: 16%;
            position: absolute;
            right: 5%;
        }
    }

    @media (max-width: 768px) {

        .top-right {
            width: 20%;
            position: absolute;
            right: 5%;
        }
    }

    /*提取公共样式*/
    .main >>> .skin-white {
        background-color: #fff;
    }

    /*.no-attention*/
    .main >>> .no-attention {
        text-align: center;
        margin-top: 6rem;
        min-height: 30rem;
    }

    .main >>> .courses-category {
        min-height: 30rem;
    }

    .main >>> .course-list a, .main >>> .pro a {
        color: #222222;
    }

    .main >>> .course-price {
        color: #f5892a;
    }

    .main >>> .course-name {
        height: 1rem;
        color: #666666;
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
        height: 3rem;
        width: 100%;
    }

    .main >>> .course-number {
        float: left;
    }

    .main >>> .course-type {
        float: right;
        padding-right: 2rem;
    }


    .main >>> .buy {
        margin-left: 1rem;
    }

    .main >>> .drop-btn {
        background: transparent;
    }

    .main >>> .courses-category {
        background-color: #F3F5F7;
        display: flex;
        flex-wrap: wrap;
    }

    /*课程信息和课程播放公用部分开始*/

    .main >>> .public-style-info {
        float: right;
        width: 94%;
        padding-right: 3.5rem;
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

    .main >>> .minput {
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
        right: 3rem;
        bottom: 1rem;
        width: 6.75rem;
        height: 2.25rem;
        background: #4459CC;
        color: #fff;
        font-size: 0.875rem;
        border-radius: 2px;
    }

    .main >>> textarea.minput::-webkit-input-placeholder,
    .main >>> textarea.return-input::-webkit-input-placeholder {
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
            bottom: () => import('@/components/bottom.vue'),

        },
        methods: {
            showMenu() {
                this.$store.bus.$emit('showMenu');
            }
        }
    }
</script>
