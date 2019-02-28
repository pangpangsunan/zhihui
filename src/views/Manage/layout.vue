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
                    <router-link to="/courses" active-class="active" exact>分类课程</router-link>
                </li>
                <li>
                    <router-link to="/buyered" active-class="active" exact>已购课程</router-link>
                </li>
                <li>
                    <router-link to="/myview" active-class="active" exact>我的关注</router-link>
                </li>
            </ul>
            <div class="top-right">
                <router-link to="/" class="hover">
                    <i class="glyphicon glyphicon-comment"></i>
                    消息
                    <div class="gonggao font-bestsmall">
                        新年新优惠！购买线下课程，送直播课。此活动于 2019年1月10日
                    </div>
                </router-link>
                <router-link to="/chat" class="private"><i class="glyphicon glyphicon-envelope"></i> 私信</router-link>
            </div>
        </div>

        <router-view/>
        <bottom></bottom>

    </div>
</template>
<style scoped>


    .main {
        background: url(../../assets/img_bg.png);
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
        padding: .5rem;
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
    /*nav-title是类似，全部 - 经营管理 - 领导力*/
    .main >>> .nav-title {
        color: #666666;
        font-size: 0.875rem;
        padding: 1rem 0 0.5rem 0;
    }
</style>
<script>
    export default {
        components: {
            top: () => import('@/components/top.vue'),
            bottom: () => import('@/components/bottom.vue')
        }
    }
</script>