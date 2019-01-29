<template>
    <div id="app" class="container">
        <nav id="nav">
            <ul class="nav nav-tabs col-sm-10">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/">分类课程</router-link>
                </li>
                <li>
                    <router-link to="/">已购课程</router-link>
                </li>
                <li>
                    <router-link to="/">我的关注</router-link>
                </li>
            </ul>
            <div class="col-sm-2 top-right">
                <a href="/"><i class="glyphicon glyphicon-comment"></i> 消息</a>
                <a href="/"><i class="glyphicon glyphicon-envelope"></i> 私信</a>
            </div>
        </nav>
        <router-view/>
        <div class="bg-black container">
            <div class="col-sm-4">Copyright@2019.All rights reserved</div>
            <div class="col-sm-4">沪CP备 000001号</div>
            <div class="col-sm-4">
                <ul>
                    <li>客服电话</li>
                    <li>0157-28874128-6</li>
                    <li>Email：cs@xiaotongtech.net</li>
                </ul>
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
</style>
