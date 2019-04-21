<template>
    <div class="container">
        <p class="nav-title">私信列表</p>
        <div class="msg-list skin-white border-rad">
            <div class="con-wrapper" v-for="item in arr">
                <img :src="item.sendToHeadimag" class="img-left">
                <div class="public-style-info">
                    <span class="font-middle">{{item.sendToName}}</span>
                    <span class="font-bestsmall">{{item.sendDate|datetime}}</span>
                    <br>
                    <span class="font-small">{{item.content}}</span>

                </div>
                <button class=" blue-btn msg-num" @click="$router.push({name:'chat',params:{id:item.sendToId}})">查看详情</button>
                <div class="clearfix"></div>
            </div>

        </div>
        <p class="title" style="text-align: center">继续滚动加载更多</p>
    </div>
</template>
<style scoped>

    .msg-list {
        padding: .6rem;
        min-height: 40rem;
    }

    .con-wrapper {
        border-bottom: 1px solid #D8D8D8;
        padding: 1.5rem;
        position: relative;

    }

    .public-style-info {
        width: 62rem !important;
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
            this.$get('/edu/message/getPrivateMessageUser', {
                uid: this.userInfo.id,
            }, p => {
                this.arr = p.content
            })
        }, data() {
            return {
                arr: [],

            }
        },
        computed: mapGetters([
            'userInfo'
        ])
    }
</script>

