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
        background: url(../../assets/bg_login.png) no-repeat;
        background-size: cover;
    }
    a{
        text-decoration: none;
    }
    .wrap {
        width: 20rem;
        height: 22rem;
       margin: 0 auto;
        border: 1px solid red;
        margin-top: 8rem;
    }
    .big-title {
        color: #FFFFFF;
        font-size: 1.75rem;
        text-align: center;
        line-height: 1.75rem;
    }
    .btn1,.btn2{
        width: 18rem;
        height: 3rem;
        color: #fff;
        background: rgba(245,137,42,0.5);
        border: none;
    }
    .btn2{
        background: rgba(68,89,204,1);
        margin-top: 1rem;
    }
    .text-grays {
        margin-top: 1rem;
    }
    .text-gray1, .text-gray2 {
        border: none;
        color: #AAAAAA;
        letter-spacing: 0;
        font-size: .88rem;
        cursor: pointer;
    }
    .text-gray2 {
        margin-left: 10rem;

    }

</style>

<script>
    // export default {
    //     components: {
    //         bottom: () => import('@/components/bottom.vue')
    //     }
    // }
</script>
