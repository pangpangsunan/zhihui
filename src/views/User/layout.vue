<template>
    <div>
        <router-view></router-view>
        <bottom></bottom>
    </div>
</template>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    html{
        font-size: 16px;
        font-family: "SourceHanSansSC-Regular";
    }
    body {
        background: url(../../assets/img_bg_login.png) no-repeat;
        background-size: cover;
    }
    .wrap {
        width: 20rem;
        height: 22rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -15rem;
        margin-left: -11rem;
    }
    .big-title {
        color: #FFFFFF;
        font-size: 1.75rem;
        text-align: center;
        line-height: 1.75rem;
    }
    .btn{
        width: 18rem;
        height: 3rem;
        color: #fff;
        background: rgba(245,137,42,0.5);
        border: none;
    }

</style>

<script>
    // export default {
    //     components: {
    //         bottom: () => import('@/components/bottom.vue')
    //     }
    // }
</script>
