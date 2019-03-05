<template>
    <div class="logins">
        <router-view class="content"></router-view>
        <bottom></bottom>
    </div>
</template>

<style scoped>

    .logins {
        background: url(../../assets/bg_login.png) no-repeat;
    }

    .logins .content {
        min-height: 50rem;
        width: 100%;
    }

    .logins >>> .img-log {
        width: 8.25rem;
        height: 3rem;
    }

    .logins >>> .wrap {
        width: 20rem;
        margin: 0 auto;
        padding-top: 10rem;
    }

    .logins >>> .container-l {
        width: 20rem;
        background: #fff;
        padding: 2rem 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20);
        border-radius: 4px;
        margin-top: 1rem;
    }

    .logins >>> .big-title {
        color: #FFFFFF;
        font-size: 1.75rem;
        text-align: center;
        line-height: 1.75rem;
    }

    /*.orange-btn是橘黄色按钮，blue-btn2是蓝色按钮，blue-shot-btn是蓝色短按钮*/

    .logins >>> .orange-btn, .logins >>> .blue-btn, .logins >>> .blue-shot-btn {
        width: 18rem;
        height: 3rem;
        color: #fff;
        border-radius: 2px;
    }

    .logins >>> .orange-btn {
        background: #F5892A;
    }

    .logins >>> .blue-btn {
        background: #4459CC;
    }

    .logins >>> .blue-shot-btn {
        width: 5.7rem;
        background: #4459CC;
    }

    .logins >>> .btn-top-marge {
        margin-top: 1rem;
    }

    .logins >>> .text-grays {
        margin-top: 1rem;
    }

    .logins >>> .text-gray1, .logins >>> .text-gray2 {
        color: #AAAAAA;
        letter-spacing: 0;
        font-size: .88rem;
        cursor: pointer;
    }

    .logins >>> .text-gray2 {
        margin-left: 10rem;

    }

    .logins >>> .tips {
        position: relative;
        height: 1.5rem;
        color: #D62A2A;
        text-align: right;
    }

    .logins >>> .col-sm-12 input, .logins >>> .col-sm-8 input {
        height: 3rem;
        background: #E5E7EF;
        border-radius: 2px;
        border: none;
        color: #222222;
    }

    .logins >>> .gray {
        line-height: 4rem;
    }

    .logins >>> #remenberpwd-link, .logins >>> #register-link {
        border: none;
        color: #AAAAAA;
        letter-spacing: 0;
        font-size: .88rem;
        cursor: pointer;
    }

    .logins >>> #register-link {
        margin-left: 10rem;

    }

    .logins >>> .val-btn[disabled] {
        opacity: 0.5;
    }
</style>

<script>
    export default {
        components: {
            bottom: () => import('@/components/bottom.vue')
        }
    }
</script>
