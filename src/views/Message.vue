<template>
    <div class="container">
        <p class="nav-title">消息中心</p>
        <div class="msg-list skin-white border-rad">
            <div class="con-wrapper" v-for="item in arr">
                <div class="public-style-info">
                    <span class="font-middle">{{item.message.content}}</span>
                    <span class="font-bestsmall">{{item.message.sendDate|datetime}}</span>

                </div>
                <div class="clearfix"></div>
            </div>

        </div>
        <p class="title" style="text-align: center">继续滚动加载更多</p>
    </div>
</template>
<style scoped>

    .msg-list {
        min-height: 40rem;
    }

    .con-wrapper {
        border-bottom: 1px solid #D8D8D8;
        padding: 1.5rem;
        position: relative;

    }

    .public-style-info {
        width: 100%;
        margin-top: .5rem;
        margin-right: 1rem;
    }

    .font-middle {
        color: #222222;
        float: left;
    }

    .font-small {
        color: #666666;

    }

    .font-bestsmall {
        color: #A5A5A5;
        margin-left: .5rem;
        float: right;
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

    import {mapGetters} from 'vuex'

    export default {
        created() {
            this.$get('/edu/message/getSystemMessage', {

                uid: this.userInfo.id,
                type: 1

            }, p => {
                this.arr = p.content.records
            })
        }, data() {
            return {
                arr: []
            }
        },
        computed: mapGetters([
            'userInfo'
        ])
    }
</script>

