<template>
    <div class="wrap">
        <p class="big-title">新用户注册</p>
        <div class="container">

            <div class="form-horizontal">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="password" class="form-control" id="inputEmail3" placeholder="请输入6-12位密码，支持英文字母与数字">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="再次输入新密码">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12">
                        <span id="remenberpwdlink">忘记密码</span>
                        <span id="registerlink">新用户注册</span>
                    </div>
                </div>

                     <button type="submit" class="btn btn-default">登陆</button>

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
