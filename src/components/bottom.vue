<template>
    <div class="bg-black">
        <div class="container">
            <table>
                <tr>
                    <td colspan="3" class="right ">客服电话</td>
                </tr>
                <tr>
                    <td colspan="3" class="font-big right">0157-28874128-6</td>
                </tr>
                <tr class="three">
                    <td class="left">Copyright@2019.All rights reserved</td>
                    <td class="center">沪CP备 000001号</td>
                    <td class="right">Email：cs@xiaotongtech.net</td>
                </tr>
            </table>

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
    }

    .three {
        color: #fff;
        text-align: center;
        padding: 1rem;
    }

    table {
        width: 100%;
        font-size: 12px;
        line-height: 2.1rem;
    }

    .right {
        text-align: right;
    }

    .center {
        text-align: center;
    }

    .left {
        text-align: left;
    }

</style>
