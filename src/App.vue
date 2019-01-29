<template>
    <div id="app">
        <div class="bg-black">
            <div class="container">
                <img src="@/assets/cat.jpg" width="50" height="50" style="margin-top:10px;" alt="">
                <ul class="pull-right menu">
                    <li><a href="">发布课程需求</a></li>
                    <li><a href="">帮助与反馈</a></li>
                    <li>
                        <div class="dropdown">
                            <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                <span style="color: #000;">风清杨</span>
                                <span style="color: #000;" class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dLabel">
                                <li><a href="">完整资料</a></li>
                                <li><a href="">绑定手机</a></li>
                                <li><a href="">修改密码</a></li>
                                <li class="divider"></li>
                                <li><a href="">学习兴趣</a></li>
                                <li><a href="">课程订单</a></li>
                                <li><a href="">发票管理</a></li>
                                <li class="divider"></li>
                                <li><a href="">退出登录</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <nav id="nav" class="container">
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
