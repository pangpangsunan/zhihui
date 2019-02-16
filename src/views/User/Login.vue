<template>
    <div class="wrap">
        <p class="big-title">学员登陆</p>
        <div class="container">

                <form class="form-horizontal">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="tel" class="form-control" placeholder="手机号码/用户名" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="password" class="form-control" placeholder="密码">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <router-link to="/user/forget">
                                <span class="text-gray1">忘记密码</span>
                            </router-link>
                            <router-link to="/user/register">
                                <span class="text-gray2">新用户注册</span>
                            </router-link>

                        </div>
                    </div>

                    <button type="submit" class="btn1">登陆</button>
                </form>


        </div>
    </div>

</template>

<script>
    export default {}
</script>

<style scoped>








</style>
