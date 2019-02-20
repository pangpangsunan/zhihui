<template scoped>
    <div class="container">
        <div v-if="!hasData" class="no-attention">
            <img src="@/assets/img_follow_nothing.png">
            <p>您尚未关注任何人</p>
        </div>
        <p class="nav-title">已关注12人</p>
        <ul class="list-group" v-if="hasData">
            <li class="list-group-item skin-white border-rad" v-for="item in arr">
                <div class="box-attention">
                    <div class="attention-left">
                        <router-link to="/teachershome">
                            <img :src="item.userInfo.headimgurl" class="img-circle">
                        </router-link>
                    </div>
                    <div class="attention-center">
                        <h3 class="teachname">{{item.userInfo.name}}</h3>
                        <h5 class="attention-number">{{item.userInfo.balance}} 人关注 <a href="" class="attention">取消关注</a>
                        </h5>
                        <p class="duty">{{item.userInfo.label}}</p>
                    </div>
                    <div class="attention-right">
                        <span><img src="@/assets/cat.jpg" class="course-img"></span>
                        <span><img src="@/assets/cat.jpg" class="course-img"></span>
                        <span><img src="@/assets/cat.jpg" class="course-img"></span>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>
<style scoped>
    .list-group-item {
        width: 71.25rem;
        height: 10rem;
        display: flex;
        border: none;
        margin-top: 1rem;
    }

    .box-attention {
        margin: 0;
        width: 71.25rem;
        display: flex;
    }

    .attention-left {
        width: 8rem;
    }

    .attention-center {
        width: 15rem;
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
        height: 7.5rem;
    }

    .img-circle {
        width: 7rem;
        height: 7rem;
        vertical-align: middle;
        margin-top: 1rem;
    }

    @media screen and (max-width: 768px) {
        .attention-left {
            width: 6rem;
            height: 8rem;
            padding-top: 1rem;
            float: left;
        }

        .attention-center {
            width: 8rem;
        }

        .list-group-item {
            height: 8rem;
            background: #FFFFFF;
            border-radius: 2px;
            margin-top: 1rem;
            border: none;
        }

        .attention-right {
            margin-top: 1rem;
        }
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

