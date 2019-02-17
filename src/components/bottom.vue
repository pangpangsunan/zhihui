<template>
    <div class="bg-black">
        <div class="con">
            <div class="gray left">Copyright@2019.All rights reserved</div>
            <div class="gray center">沪CP备 000001号</div>
            <div class="kefu">
                <div class="text-right font-bestsmall">客服电话</div>
                <div class="text-right font-big">0157-28874128-6</div>
                <div class="text-right font-bestsmall">Email：cs@xiaotongtech.net</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
    .bg-black {
        background: #333;
        color: #eee;
        height: 6.25rem;
    }
    .con {
        width: 71.25rem;
        display: flex;
        margin: 0 auto;
        overflow: hidden;

    }
    .con div {
        width: 22rem;
    }
    .left{
        text-align: left;
    }
    .center {
        text-align: center;
    }
    .gray {
        margin-top: 1.3rem;
    }

    .kefu {
        text-align: right;
        margin-top: 1.6rem;
    }

    .kefu div:nth-child(2) {
        color: #FFFFFF;
    }

    .kefu div:nth-child(3), .gray {
        color: #757A7C;
    }
</style>
