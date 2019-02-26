<template>
    <div class="wrap">
        <p class="big-title">设置新密码</p>
        <div class="container">
            <form class="form-horizontal">
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
                <div class="tips">
                    <span v-if="msg">{{msg}}</span>
                </div>

                <div class="form-group">
                    <div class="col-sm-12">
                        <div class="text-gray">
                            <router-link to="/user/forget">
                                <span class="text-gray1">用户登陆</span>
                            </router-link>
                            <router-link to="/user/register">
                                <span class="text-gray2">新用户注册</span>
                            </router-link>
                        </div>
                    </div>
                </div>

                <button type="submit" class="blue-btn">完成</button>

            </form>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                msg: null
            }
        }
    }
</script>

<style scoped>

    .container {
        height: 18.88rem;
    }
</style>
