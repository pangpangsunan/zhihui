<template xmlns="http://www.w3.org/1999/html">
    <div class="wrap">
        <p class="big-title">新用户注册</p>
        <div class="container">

            <div class="form-horizontal">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="tel" class="form-control" placeholder="手机号码">
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
                        <input type="tel" class="form-control" placeholder="密码">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="password" class="form-control"  placeholder="再次输入密码">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <router-link to="/user/login">
                            <span class="text-gray1">用户登陆</span>
                        </router-link>
                        <router-link to="/user/validate">
                            <span class="text-gray2" style="margin-left: 9rem;">使用邮箱注册</span>
                        </router-link>
                    </div>
                </div>

                     <button type="submit" class="btn1">完成注册</button>

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
        height: 25.88rem;
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
