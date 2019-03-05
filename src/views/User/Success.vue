<template>
    <div class="wrap">
        <p class="big-title">学员登陆</p>
        <div class="container-l">
            <p>重置密码成功</p>
            <button class="return-btn" @click="$router.replace('/user/login')">返回登陆页面</button>
        </div>

    </div>

</template>

<script>
    export default {}
</script>

<style scoped>

    .container-l {
        height: 16.88rem;
    }

    .return-btn {
        font-size: 1rem;
        background: #F5892A;
        border-radius: 24px;
        width: 18rem;
        height: 3rem;
        color: #fff;
        margin-top: 2rem;
    }
</style>
