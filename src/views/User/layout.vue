<template>
    <div>
        <router-view></router-view>
        <bottom></bottom>
    </div>
</template>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 16px;
        font-family: "SourceHanSansSC-Regular";
    }


    .page {
        background: url(../../assets/bg_login.png) no-repeat;
        min-height: 50rem;
    }

    .img-log {
        width: 8.25rem;
        height: 3rem;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    .wrap {
        width: 20rem;
        margin: 0 auto;
        padding-top: 10rem;
    }

    .container {
        width: 20rem;
        height: 18rem;
        background: #fff;
        padding: 2rem 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20);
        border-radius: 4px;
        margin-top: 1rem;

    }

    .big-title {
        color: #FFFFFF;
        font-size: 1.75rem;
        text-align: center;
        line-height: 1.75rem;
    }

    /*.btn1是橘黄色按钮，btn2是蓝色按钮，btn3是蓝色短按钮*/
    button {
        border: none;
    }

    .btn1, .btn2, .btn3 {
        width: 18rem;
        height: 3rem;
        color: #fff;
        background: #F5892A;
        border-radius: 2px;
    }

    .btn2 {
        background: #4459CC;
        margin-top: 1rem;
    }

    .btn3 {
        width: 5.7rem;
        background: #4459CC;
    }

    .text-grays {
        margin-top: 1rem;
    }

    .text-gray1, .text-gray2 {
        color: #AAAAAA;
        letter-spacing: 0;
        font-size: .88rem;
        cursor: pointer;
    }

    .text-gray2 {
        margin-left: 10rem;

    }

    .tips {
        position: relative;
        height: 1.5rem;
        color: #D62A2A;
        text-align: right;
    }

    .col-sm-12 input, .col-sm-8 input {
        height: 3rem;
        background: #E5E7EF;
        border-radius: 2px;
        border: none;
        color: #222222;
    }

    .returnbtn {
        font-size: 1rem;
        background: #F5892A;
        border-radius: 24px;
        width: 18rem;
        height: 3rem;
        color: #fff;
        margin-top: 2rem;

    }

    .gray {
        line-height: 4rem;
    }


</style>

<script>
    export default {
        components: {
            bottom: () => import('@/components/bottom.vue')
        }
    }
</script>
