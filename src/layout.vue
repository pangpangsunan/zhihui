<style>
    * {
        padding-top: 0;
        margin: 0;
    }

    body {
        background: url(assets/img_bg.png);
        font-size: 16px;
    }

    html {
        font-size: 16px !important;
        font-family: SourceHanSansSC-Medium;
    }

    @media screen and (max-width: 1024px) {
        html {
            font-size: 13px !important;
        }
    }

    @media screen and (max-width: 768px) {
        html {
            font-size: 13px !important;
            background: #000;
        }

    }

    /*.no-attention*/
    .no-attention {
        text-align: center;
        margin-top: 6rem;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    .tabcontainer {
        margin-top: 1rem;
    }

    #nav {
        background: #e4eaf3;
        padding: 0;
        height: 3.125rem;
    }

    .nav {
        margin: 0;
        padding: 0;
        height: 3.125rem;
    }

    .nav li {
        height: 3.125rem;
    }

    .nav li a {
        height: 3.125rem;
        line-height: 3.125rem;
    }

    ul.navbg li.active {
        color: #fff;
        cursor: default;
        background-color: #4459CC;
    }


    ul.navbg li.active a, ul.navbg li.active a:hover {
        background: transparent;
        color: #fff;
    }

    ul.navbg li a:hover {
        background-color: #4459CC;
        color: #fff;
    }

    .nav-tabs li a {
        display: inline-block;
        width: 8.75rem;
        height: 3.125rem;
        line-height: 3.125rem;
        text-align: center;
    }

    .top-left a {
        display: inline-block;
        color: #555555;

    }

    .top-right {
        width: 25%;
    }

    .top-right a {
        display: inline-block;
        margin-top: 1rem;
        margin-left: 1.875rem;
        color: #555555;
    }

    ul.menu > li {
        list-style-type: none;
        float: left;
        margin-left: 1.25rem;

    }

    .nav {
        margin: 0;
        padding: 0;
    }

    .navbg li {
        float: left;
        width: 8.75rem;
        height: 3.125rem;
        line-height: 1.875rem;
    }

    .navbg li a:hover {
        background-color: #4459CC;
    }

    .navbg li a {
        display: block;

        padding: 0;
        margin: 0;
    }

    .navbg > li > a {
        text-align: center;
        padding: 0;
    }

    .bg-black {
        background: #333;
        color: #eee;
    }

    .con li {
        list-style-type: none;
        width: 22rem;
        float: left;
    }
    .kefu {
        margin-left: 4rem;
    }

    .kefu div:nth-child(1) {
        font-size: 0.75rem;
    }

    .kefu div:nth-child(2) {
        font-family: HelveticaNeue-Medium;
        font-size: 1.25rem;
        color: #FFFFFF;
    }

    .kefu div:nth-child(3), .gray {
        font-size: 0.75rem;
        color: #757A7C;
    }
    .gray{
        position: relative;
        top: 3rem;
    }


    /*navHead是二级导航标题，类似，全部 - 经营管理 - 领导力*/
    .navHead {
        color: #666666;
        font-size: 0.875rem;
        padding: 1rem 0 0.5rem 0;
    }

    .btns {
        position: absolute;
        right: 3.125rem;
        top: 6.25rem;
    }

    #trywatch, #buy {
        width: 6.75rem;
        height: 2.25rem;
        border: 1px solid #F5892A;
        border-radius: 2px;
        color: #F5892A;
        font-size: 0.875rem;
        /* margin-left:50%; */


    }

    #buy {
        background-color: #F5892A;
        color: #fff;
        margin-left: 1rem;
    }

    .img-left {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 3.75rem;
        float: left;
    }

    .public-style-info {
        float: right;
        width: 65rem;
        padding-right: 4rem;
        margin-top: 0.5rem;
    }

    .clear {
        clear: both;
    }

    .all-comment {
        padding: 1rem;
        position: relative;
    }

    .teacher-img {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 1.875rem;
    }

    .all-comment .title {
        color: #8087AB;
        font-size: 0.875rem;
        margin-top: 2rem;

    }

    .all-comment .info, .teacher-info {
        font-size: 0.8125rem;
        color: #666666;
        padding-left: 5rem;
    }

    .teacher-info {
        padding: 0;
    }

    .all-comment .attention {
        border: 1px solid #4459CC;
        border-radius: 0.625rem;
        width: 3rem;
        height: 1.25rem;
        font-size: 0.7rem;
        text-align: center;
        display: inline-block;
    }

    .all-comment .attention a {
        color: #4459CC;
    }

    .att-number {
        color: #A5A5A5;
        font-size: 0.7rem;
        padding: 0 0.5rem;
    }

    .all-comment .name {
        color: #222222;
        font-size: 1rem;
    }

</style>
<template>
    <div id="app">
        <div class="bg-black">
            <top></top>
        </div>
        <div class="container tabcontainer">
            <nav id="nav">
                <ul class="nav col-sm-9 top-left navbg">
                    <li :class="active('home')">
                        <router-link to="/">首页</router-link>
                    </li>
                    <li :class="active('courses')">
                        <router-link to="/courses">分类课程</router-link>
                    </li>
                    <li :class="active('buyered')">
                        <router-link to="/buyered">已购课程</router-link>
                    </li>
                    <li :class="active('myview')">
                        <router-link to="/myview">我的关注</router-link>
                    </li>
                </ul>
                <div class="col-sm-2 top-right">
                    <router-link to="/"><i class="glyphicon glyphicon-comment"></i> 消息</router-link>
                    <router-link to="/"><i class="glyphicon glyphicon-envelope"></i> 私信</router-link>
                </div>
            </nav>
        </div>

        <router-view/>
        <br>
        <div class="bg-black">
            <ul class="container con">
                <li class="gray">Copyright@2019.All rights reserved</li>
                <li class="gray" style="text-align: center;">沪CP备 000001号</li>
                <li class="kefu">
                    <div class="text-right">客服电话</div>
                    <div class="text-right">0157-28874128-6</div>
                    <div class="text-right">Email：cs@xiaotongtech.net</div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        methods: {
            active(page) {
                if (this.$route.name == page) {
                    return 'active';
                }
                return '';
            }
        },
        components: {
            top: () => import('@/components/top.vue')
        }
    }
</script>
