<template>
    <div class="bg-black">
        <ul class="container con">
            <li class="gray">Copyright@2019.All rights reserved</li>
            <li class="gray" style="text-align: center;">沪CP备 000001号</li>
            <li class="kefu">
                <div class="text-right">客服电话</div>
                <div class="text-right">0157-28874128-6</div>
                <div class="text-right">Email：cs@xiaotongtech.net</div>
            </li>
        </ul>
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
    }

    .con li {
        list-style-type: none;
        width: 22rem;
        float: left;
    }

    .kefu {
        margin-left: 4rem;
    }

    .kefu div:nth-child(1) {
        font-size: 0.75rem;
    }

    .kefu div:nth-child(2) {
        font-family: HelveticaNeue-Medium;
        font-size: 1.25rem;
        color: #FFFFFF;
    }

    .kefu div:nth-child(3), .gray {
        font-size: 0.75rem;
        color: #757A7C;
    }
</style>
