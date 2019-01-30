<template>
    <div id="app">
        <div class="bg-black">
            <top></top>
        </div>
        <nav id="nav" class="container">
            <ul class="nav nav-tabs col-sm-10">
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

<style>
    body {
        background: url(assets/img_bg.png);
    }

    #nav {
        background: #fff;
        height: 40px;
        margin-top: 10px;
    }

    .top-right a {
        display: inline-block;
        margin-top: 10px;
        margin-left: 30px;
    }

    ul.menu > li {
        list-style-type: none;
        float: left;
        margin-left: 20px;
        margin-top: 10px;
    }

    .bg-black {
        background: #333;
        color: #eee;
    }
</style>

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
