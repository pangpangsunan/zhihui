<template>
    <div class="container">
        <div v-if="!hasData">
            <img src="@/assets/img_follow_nothing.png">
            <p>您尚未关注任何人</p>
        </div>
        <ul class="list-group" v-if="hasData">
            <li class="list-group-item" v-for="item in arr" style="height: 250px;">
                <img :src="item.userInfo.headimgurl" width="200" height="200" class="img-circle pull-left">
                <div class="pull-left">
                    <h3>{{item.userInfo.name}}</h3>
                    <h5>{{item.userInfo.balance}} 人关注 <a href="">取消关注</a></h5>
                    <p>{{item.userInfo.label}}</p>
                </div>
                <div class="pull-left">

                </div>
            </li>
        </ul>
    </div>
</template>
<!--/edu/collection/getCollectionPage-->
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

