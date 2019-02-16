<template xmlns="http://www.w3.org/1999/html">
    <div class="wrap">
        <p class="big-title">新用户注册</p>
        <div class="container">

            <div class="form-horizontal">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="email" class="form-control" placeholder="邮箱地址">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-8">
                        <input type="text" class="form-control"  placeholder="验证码">
                    </div>
                    <button type="submit" class="btn3">获取验证码</button>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <router-link to="/user/login">
                            <span class="text-gray1">用户登陆</span>
                        </router-link>
                        <router-link to="/user/register">
                            <span class="text-gray2">新用户注册</span>
                        </router-link>
                    </div>
                </div>

                <button type="submit" class="btn1">下一步</button>

            </div>
        </div>

    </div>

</template>

<script>
    export default {}
</script>

<style scoped>

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
