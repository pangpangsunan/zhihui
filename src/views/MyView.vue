<template>
    <div class="container">
        <div v-if="!hasData" class="no-attention">
            <img src="@/assets/img_follow_nothing.png">
            <p>您尚未关注任何人</p>
        </div>
        <p class="nav-title">已关注{{ arr.length }}人</p>
        <ul class="list-group" v-if="hasData">
            <li class="list-group-item skin-white border-rad" v-for="item in arr">
                <div class="box-attention">
                    <div class="attention-left">
                        <router-link :to="{name:'teacher',params:{id:item.userInfo.id,cnt:item.collectionCount}}">
                            <img :src="item.userInfo.headimgurl" class="img-circle">
                        </router-link>
                    </div>
                    <div class="attention-center">
                        <router-link
                                :to="{name:'teacher',params:{id:item.userInfo.id,cnt:item.usercollectionCountInfo}}"
                                class="teachname">
                            <div>{{item.userInfo.name}}</div>
                        </router-link>
                        <div class="attention-number">{{item.collectionCount}} 人关注
                            <a @click.prevent="unview(item.userInfo.id,2,reload)"
                               class="attention">取消关注</a>
                        </div>
                        <p class="duty">{{item.userInfo.label}}</p>
                    </div>
                    <div class="attention-right">
                        <router-link :to="{name:'teacher',params:{id:item.userInfo.id}}">

                        </router-link>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>
<style scoped>
    .list-group {
        min-height: 40rem;
    }

    .list-group-item {
        height: 10rem;
        display: flex;
        border: none;
        margin-top: 1rem;
        padding: 0.5rem;
    }

    .box-attention {
        margin: 0;
        display: flex;
    }

    .attention-left {

        vertical-align: middle;
    }

    .attention-center {
        width: 18rem;
        margin-left: 2rem;
        margin-top: 1.5rem;

    }

    .attention-number, .duty {
        color: #888888;
        margin-top: .5rem;
    }

    .attention-right {
        margin-top: 0.7rem;
    }

    .attention-right span {
        display: inline-block;
        margin-left: 1.2rem;
    }

    .course-img {
        width: 14rem;
        height: 7.9rem;
    }

    .img-circle {
        width: 7rem;
        height: 7rem;
        vertical-align: middle;
        margin-top: 1rem;
    }

    .teachname {
        color: #222222;
        font-size: 24px;
    }

    @media screen and (max-width: 1024px) {
        .teachname {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 768px) {

        .teachname {
            font-size: 16px;
        }

        .list-group-item {
            height: 8rem;
            padding-top: 0;
        }

        .attention-right {
            margin-top: .8rem;
        }

        .course-img {
            width: 12rem;
            height: 6.5rem;
        }

        .img-circle {
            width: 6rem;
            height: 6rem;
            vertical-align: middle;
        }
    }
</style>
<script>

    import {mapGetters} from 'vuex'

    export default {
        created() {
            if (!this.isLogin) {
                return;
            }
            this.reload();
        }, data() {
            return {
                arr: [],
                hasData: false
            }
        },
        computed: mapGetters([
            'isLogin',
            'userInfo'
        ]),
        methods: {
            reload() {
                this.$get('/edu/collection/getCollectionPage', {
                    uid: this.userInfo.id,
                    type: 2
                }, p => {
                    this.arr = p.content.records;
                    this.hasData = !!p.content.records
                })
            }
        }
    }
</script>

