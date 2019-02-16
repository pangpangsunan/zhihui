<template>
    <div class="wrap">
        <p class="big-title">设置新密码</p>
        <div class="container">

            <div class="form-horizontal">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="tel" class="form-control" placeholder="请输入6-12位密码，支持英文字母与数字">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="password" class="form-control" placeholder="再次输入新密码">
                    </div>
                </div>
                <div class="text-grays">
                    <router-link to="/user/login">
                        <span class="text-gray1">用户登陆</span>
                    </router-link>
                    <router-link to="/user/register">
                        <span class="text-gray2">新用户注册</span>
                    </router-link>
                </div>

                     <button type="submit" class="btn1" style="margin-top: 1rem">完成</button>

            </div>
        </div>

    </div>

</template>

<script>
    export default {}
</script>

<style scoped>


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
