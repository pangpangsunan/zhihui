<style>
    .menu a {
        color: #fff;
        font-size: 13px;

    }

    #dLabel {
        background: transparent;
        border: none;
    }
    .bg-black {
        background-color: #444444;
    }
    .bg-black .container {
        padding: 1rem;
    }
    .dropdown {
        font-size: 0.8125rem;
        color: #fff;
    }
    .dropdown span {
        display: inline-block;
    }
    .fengqingyang {
        margin-top: 0.2rem;
    }


</style>
<template>
    <div class="container">
        <img src="@/assets/img_logo.png" style="vertical-align: middle" alt="">
        <ul class="pull-right menu">
            <li>
                <span class="publish"><img src="@/assets/ic_publish.png"></span>
                <router-link to="/">发布课程需求</router-link>
            </li>
            <li>
                <span class="help"><img src="@/assets/ic_help.png"></span>
                <router-link to="/">帮助与反馈</router-link>
            </li>
            <li>
                <div class="dropdown">
                    <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        <span><img src="@/assets/img_avatar_default.png"></span>
                        <span class="fengqingyang">&nbsp;风清杨</span>
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dLabel">
                        <li>
                            <router-link to="/">完整资料</router-link>
                        </li>
                        <li>
                            <router-link to="/">绑定手机</router-link>
                        </li>
                        <li>
                            <router-link to="/">修改密码</router-link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <router-link to="/">学习兴趣</router-link>
                        </li>
                        <li>
                            <router-link to="/">课程订单</router-link>
                        </li>
                        <li>
                            <router-link to="/">发票管理</router-link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <router-link to="/">退出登录</router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
