<template>
        <div class="container">
            <img src="@/assets/img_logo.png" style="vertical-align: middle" alt="">
            <ul class="pull-right menu">
                <li>
                    <span class="publish"><img src="@/assets/ic_publish.png"></span>
                    <router-link to="" class="color-white">发布课程需求</router-link>
                </li>
                <li>
                    <span class="help"><img src="@/assets/ic_help.png"></span>
                    <router-link to="/help" class="color-white">帮助与反馈</router-link>
                </li>
                <li v-if="$store.getters.isLogin">
                    <div class="dropdown">
                        <button class="drop-btn" type="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            <span><img src="@/assets/img_avatar_default.png"></span>
                            <span class="username">&nbsp;{{ userInfo.nickname ||  userInfo.phone}}</span>
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dLabel">
                            <li>
                                <router-link to="/manage/updateinfo">完整资料</router-link>
                            </li>
                            <li>
                                <router-link to="/manage/bindphone">绑定手机</router-link>
                            </li>
                            <li>
                                <router-link to="/user/resetpwd">修改密码</router-link>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <router-link to="/manage/interest">学习兴趣</router-link>
                            </li>
                            <li>
                                <router-link to="/manage/order">课程订单</router-link>
                            </li>
                            <li>
                                <router-link to="/manage/invoice">发票管理</router-link>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#" @click.prevent="logout()">退出登录</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li v-if="!$store.getters.isLogin">
                    <router-link to="/user/login" class="color-white">登陆</router-link>
                </li>

            </ul>
            <!--<div class="diolog">
                <div class="public-page skin-white">
                    <div class="font-big">发布课程需求</div>
                    <form class="form-horizontal">
                        <div class="select-groups">
                            <label>所属行业</label>
                            <select>
                                <option value="请选择">请选择</option>
                            </select>
                        </div>
                        <div class="select-groups">
                            <label>适用职能</label>
                            <select>
                                <option value="请选择">请选择</option>
                            </select>
                        </div>
                        <div class="select-groups">
                            具体描述
                            <textarea></textarea>
                        </div>
                        <div class="select-groups">
                            <button class="blue-btn">发布</button>
                        </div>
                    </form>
                </div>
-->
            </div>

        </div>

</template>
<style scoped>
    .diolog {
        width: 100vw;
        height: 100vh;
        background: rgba(34, 34, 34, 0.80);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;

    }

    .public-page {
        border-radius: 4px;
        width: 50rem;
        height: 34.5rem;
        margin: 5rem auto;
        padding: 3rem;
        text-align: center;
    }
    .select-groups{
        margin-top: 1.5rem;
    }
    .blue-btn {
        width: 20rem;
    }

    .public-page select, .public-page textarea {
        width: 32.5rem;
        height: 2.75rem;
        background: #fff;
        border: 1px solid rgba(0,0,0,0.24);
        border-radius: 2px;
        margin-left: .5rem;
        color: #666666;
    }
    .public-page textarea {
        height: 10rem;
        padding: 1rem;
        vertical-align:middle;
    }

    .menu {
        font-size: 13px;
    }

    .menu > li {
        line-height: 2rem;
        height: 2rem;
    }

    .color-white {
        color: white;
    }

    .drop-btn {
        background: transparent;
        border: none;
    }

    .dropdown {
        font-size: 0.8125rem;
        color: #fff;
    }

    .dropdown span {
        display: inline-block;
    }

    ul.menu > li {
        list-style-type: none;
        float: left;
        margin-left: 1.25rem;
    }


</style>
<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {}
        },
        methods: {
            logout() {
                this.$store.commit('logout');
            }
        },
        computed: mapGetters([
            'userInfo'
        ])
    }


</script>
