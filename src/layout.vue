<style>
    body {
        background: url(assets/img_bg.png);
    }

    .tabcontainer {
        margin-top: 16px;
    }

    #nav {
        background: #e4eaf3;
        padding: 0;
        height: 50px;
    }

    .nav {
        margin: 0;
        padding: 0;
    }

    ul.navbg li.active {
        color: #fff;
        cursor: default;
        background-color: #4459CC;
    }

    ul.navbg li.active a, ul.navbg li.active a:hover {
        background: transparent;
    }

    .nav-tabs li a {
        display: inline-block;
        width: 140px;
        height: 50px;
        line-height: 60px;
        text-align: center;
    }

    .top-left a {
        display: inline-block;
        color: #666666;

    }

    .top-right a {
        display: inline-block;
        margin-top: 10px;
        margin-left: 30px;
        color: #666666;
    }

    ul.menu > li {
        list-style-type: none;
        float: left;
        margin-left: 20px;
        margin-top: 10px;
    }

    .nav {
        margin: 0;
        padding: 0;
    }

    .navbg li {
        float: left;
        width: 15%;
        height: 50px;
        line-height: 50px;
    }

    .navbg li a:hover {
        background-color: #4459CC;
    }

    .navbg li a {
        display: block;
        height: 50px;
        line-height: 50px;
        padding: 0;
        margin: 0;
    }

    .bg-black {
        background: #333;
        color: #eee;
    }

</style>
<template>
    <div id="app">
        <div class="bg-black">
            <top></top>
        </div>
        <div class="container tabcontainer">
            <nav id="nav">
                <ul class="nav col-sm-10 top-left navbg">
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
            <div class=" container">
                <div class="col-sm-4">Copyright@2019.All rights reserved</div>
                <div class="col-sm-4">沪CP备 000001号</div>
                <div class="col-sm-4">
                    <ul>
                        <li class="text-right">客服电话</li>
                        <li class="text-right"><b>0157-28874128-6</b></li>
                        <li class="text-right">Email：cs@xiaotongtech.net</li>
                    </ul>
                </div>
            </div>
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
