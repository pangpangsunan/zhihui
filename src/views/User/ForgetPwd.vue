<template>
    <div class="wrap">
        <p class="big-title">重置密码</p>
        <div class="container-l">

            <div class="form-horizontal">
                <p class="validate-title">请选择一种验证方式</p>
                <router-link to="/user/validatephone">
                    <button type="submit" class="blue-btn btn-top-marge">短信验证</button>
                </router-link>
                <router-link to="/user/validateemail">
                    <button type="submit" class="blue-btn btn-top-marge">邮箱验证</button>
                </router-link>
            </div>
            <div class="text-grays">
                <router-link to="/user/login">
                    <span class="text-gray1">用户登陆</span>
                </router-link>
                <router-link to="/user/register">
                    <span class="text-gray2">新用户注册</span>
                </router-link>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .validate-title {
        color: #222222;
        text-align: center;
    }

    .container-l {
        height: 16.88rem;
    }
</style>
