<template>
    <div>
        <div class="container">
            <p class="nav-title">管理中心</p>
            <div class="manage-wrapper">
                <div class="manage-left">
                    <ul class="manage-menu">
                        <li>
                            <router-link to="/" active-class="active" exact>完善资料</router-link>
                        </li>
                        <li>
                            <router-link to="/" active-class="active" exact>绑定手机</router-link>
                        </li>
                        <li>
                            <router-link to="/" active-class="active" exact>修改密码</router-link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <router-link to="/manage/interest" active-class="active" exact>学习兴趣</router-link>
                        </li>
                        <li>
                            <router-link to="/manage/order" active-class="active" exact>课程订单</router-link>
                        </li>
                        <li>
                            <router-link to="/manage/invoice" active-class="active" exact>发票管理</router-link>
                        </li>
                    </ul>
                </div>
                <router-view>

                </router-view>
            </div>
        </div>

    </div>
</template>
<style scoped>
    .container {
        min-height: 43rem;
        padding: 0;
    }
    .manage-wrapper {

        width: 100%;
        height: 100%;
        height: 45rem;
    }
    .manage-left {
        width: 18%;
        background: #FAFAFA;
        border-radius: 2px;
        float: left;
        height: 43rem;
    }

    .manage-menu {
        text-align: center;
        padding-top: 2rem;
    }

    .divider {
        background: rgba(0, 0, 0, 0.08);
        height: 1px !important;
        margin: 0 1rem;
    }

    .manage-menu li {
        height: 2.75rem;
        line-height: 2.75rem;
    }

    .manage-menu a {
        color: #222222;
        height: 2.75rem;
        line-height: 2.75rem;
        display: block;
    }

    .manage-menu a .active, .manage-menu a:hover {
        background-color: #4459CC;
        color: #fff;
    }

</style>
<script>
    export default {}
</script>