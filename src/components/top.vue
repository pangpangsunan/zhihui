<template>
    <div class="container">
        <img src="@/assets/img_logo.png" style="margin-top:10px;" alt="">
        <ul class="pull-right menu">
            <li>
                <router-link to="/">发布课程需求</router-link>
            </li>
            <li>
                <router-link to="/">帮助与反馈</router-link>
            </li>
            <li>
                <div class="dropdown">
                    <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        <span style="color: #000;">风清杨</span>
                        <span style="color: #000;" class="caret"></span>
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
