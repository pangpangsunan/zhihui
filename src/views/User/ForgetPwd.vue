<template>
    <div class="wrap">
        <p class="big-title">重置密码</p>
        <div class="container">

            <div class="form-horizontal">
                <p class="validate-title">请选择一种验证方式</p>
                <router-link to="/user/validatephone">
                    <button type="submit" class="btn2">短信验证</button>
                </router-link>
                <router-link to="/user/validateemail">
                    <button type="submit" class="btn2">邮箱验证</button>
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

<script>
    export default {}
</script>

<style scoped>
    .validate-title {
        color: #222222;
        text-align: center;
    }


    .container {
        width: 20rem;
        height: 16.88rem;
        background: #fff;
        padding: 2rem 1rem;

    }
    .col-sm-12 input{
        height: 3rem;
        background: #E5E7EF;
        border-radius: 2px;
        border: none;
    }
    #remenberpwdlink,#registerlink {
        border: none;
        color: #AAAAAA;
        letter-spacing: 0;
        font-size: .88rem;
        cursor: pointer;
    }
    #registerlink {
        margin-left: 10rem;

    }


</style>
