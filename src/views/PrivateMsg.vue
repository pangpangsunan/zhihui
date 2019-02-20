<template scoped>
    <div class="container">
        <p class="nav-title">私信列表</p>
        <div class="msg-list skin-white border-rad">
            <div class="con-wrapper">
                <img src="@/assets/cat.jpg" class="img-left">
                <div class="public-style-info">
                    <span class="font-middle">吴苏南</span>
                    <span class="font-bestsmall">2018-12-05 19:10</span>
                    <br>
                    <span class="font-small">全是干货，支持。</span>

                </div>
                <span class="msg-num">99+</span>
                <div class="clearfix"></div>
            </div>
            <div class="con-wrapper">
                <img src="@/assets/cat.jpg" class="img-left">
                <div class="public-style-info">
                    <span class="font-middle">吴苏南</span>
                    <span class="font-bestsmall">2018-12-05 19:10</span>
                    <br>
                    <span class="font-small">全是干货，支持。</span>

                </div>
                <span class="msg-num">123</span>
                <div class="clearfix"></div>

            </div>
            <div class="con-wrapper">
                <img src="@/assets/cat.jpg" class="img-left">
                <div class="public-style-info">
                    <span class="font-middle">吴苏南</span>
                    <span class="font-bestsmall">2018-12-05 19:10</span>
                    <br>
                    <span class="font-small">全是干货，支持。</span>

                </div>
                <span class="msg-num">2</span>
                <div class="clearfix"></div>
            </div>
            <div class="con-wrapper">
                <img src="@/assets/cat.jpg" class="img-left">
                <div class="public-style-info">
                    <span class="font-middle">吴苏南</span>
                    <span class="font-bestsmall">2018-12-05 19:10</span>
                    <br>
                    <span class="font-small">全是干货，支持。</span>
                </div>
                <div class="clearfix"></div>
            </div>
            <p class="title" style="text-align: center">继续滚动加载更多</p>
        </div>

    </div>
</template>
<style scoped>

    .msg-list {
        padding: .6rem;
    }

    .con-wrapper{
        border-bottom: 1px solid #D8D8D8;
        padding: 1.5rem;
        position: relative;

    }
    .public-style-info {
        width: 62rem!important;
        margin-top: .5rem;
        margin-right: 1rem;
    }
    .font-middle {
        color: #222222;
    }

    .font-small {
        color: #666666;

    }
    .font-bestsmall {
        color: #A5A5A5;
        margin-left: .5rem;
    }
    .msg-num {
        border-radius: .625rem;
        background-color: #FF4040;
        color: #fff;
        padding: .3rem;
        position: absolute;
        right: 1rem;
        top: 2.5rem;
    }
    .title {
        margin-top: 2rem;
    }



</style>
<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/collection/getCollectionPage?uid=192&type=2').then(p => {
                this.arr = p.data.content.records
                this.hasData = !!p.data.content.records
            })
        }, data() {
            return {
                arr: [],
                hasData: false
            }
        }
    }
</script>

