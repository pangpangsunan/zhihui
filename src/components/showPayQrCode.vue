<template>
    <div class="qrdialod">
        <div>
            <img :src="url" alt="">
            <br>
            <button class="btn btn-info block-center" @click="payed">已支付</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "show-pay-qr-code",
        props: {
            url: null
        },
        methods: {
            payed() {
                this.$router.push('/manage/order');
                this.$emit("payEnd")
                // alert("还没有查询订单状态接口!!!");
                // this.$post("")
            }
        }
    }
</script>

<style scoped>
    .qrdialod {
        position: absolute;
        width: 100vw;
        height: 100vh;
    }

    .qrdialod > div {
        width: 60vw;
        height: 430px;
        background: #fff;
        margin: -500px auto;
        text-align: center;
        border: 3px pink solid;
        border-radius: 10px;
        padding-top: 30px;
    }
</style>