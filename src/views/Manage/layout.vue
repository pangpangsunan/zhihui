<template>
    <div class="page">
        <div class="container">
            <p class="nav-title">管理中心</p>
            <div class="manage-wrapper">
                <div class="manage-left">
                    <ul class="manage-menu">
                        <li>
                            <router-link to="/manage/updateinfo" active-class="active" exact>完善资料</router-link>
                        </li>
                        <li>
                            <router-link to="/manage/bindphone" active-class="active" exact>绑定手机</router-link>
                        </li>
                        <li>
                            <router-link to="/manage/updatepassword" active-class="active" exact>修改密码</router-link>
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
                <div class="manage-right">
                    <router-view></router-view>
                </div>


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
        min-height: 45rem;
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

    .manage-right {
        width: 80%;
        background: #FFFFFF;
        border-radius: 2px;
        float: right;
        min-height: 43rem;
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
    .page >>>.bindphone-page {
        width: 20rem;
        height: 14.5rem;
        text-align: center;
        margin: 2rem auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20);
        border-radius: 4px;
        padding: 1rem;
    }

    .page >>> .tips {
        position: relative;
        height: 1.5rem;
        color: #D62A2A;
        text-align: right;
    }

    .page >>> .orange-btn, .page >>> .blue-btn, .page >>> .blue-shot-btn {
        width: 18rem;
        height: 3rem;
        color: #fff;
        border-radius: 2px;
    }

    .page >>> .orange-btn {
        background: #F5892A;
    }

    .page >>> .blue-btn {
        background: #4459CC;
    }

    .page >>> .blue-shot-btn {
        width: 5.7rem;
        background: #4459CC;
    }

    .page >>> .btn-top-marge {
        margin-top: 1rem;
    }

    .page >>> .col-sm-12 input, .page >>> .col-sm-8 input {
        height: 3rem;
        background: #E5E7EF;
        width: 18rem;
        border-radius: 2px;
        border: none;
        color: #222222;
    }
    .page>>> .col-sm-8 input {
        width: 11rem;
    }


    .page >>> .val-btn[disabled] {
        opacity: 0.5;
    }

</style>
<script>
    export default {}
</script>