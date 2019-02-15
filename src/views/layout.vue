<style>
    * {
        padding-top: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
    }

    body {
        background: url(../assets/img_bg.png);
        font-size: 16px;
    }

    html {
        font-size: 16px;
        font-family: SourceHanSansSC-Medium;
    }

    @media screen and (max-width: 1024px) {
        html {
            font-size: 13px;
        }
    }

    @media screen and (max-width: 768px) {
        html {
            font-size: 13px;
            background: #000;
        }

    }

    /*.no-attention*/
    .no-attention {
        text-align: center;
        margin-top: 6rem;
    }

    .bluebtn, .orangebtn, .whitebtn {
        width: 6.75rem;
        height: 2.25rem;
        background: #4459CC;
        border-radius: 2px;
        color: #fff;
        font-size: 0.875rem;
        border: none;
    }

    .orangebtn {
        background-color: #F5892A;
        color: #fff;
    }

    .whitebtn {
        background-color: #fff;
        border: 1px solid #F5892A;
        color: #F5892A;
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

    ul.navbg li a.active, ul.navbg li a:hover {
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

    .navbg li a {
        display: block;
        padding: 0;
        margin: 0;
    }

    .navbg > li > a {
        text-align: center;
        padding: 0;
    }


    .gray {
        position: relative;
        top: 3rem;
    }

    /*navHead是二级导航标题，类似，全部 - 经营管理 - 领导力*/
    .navHead {
        color: #666666;
        font-size: 0.875rem;
        padding: 1rem 0 0.5rem 0;
    }

    .btns1 {
        position: absolute;
        right: 3.125rem;
        top: 6.25rem;
    }

    #buy {
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
            </nav>
        </div>

        <router-view/>
        <br>
        <bottom></bottom>
    </div>
</template>

<script>
    export default {
        components: {
            top: () => import('@/components/top.vue'),
            bottom: () => import('@/components/bottom.vue')
        }
    }
</script>
