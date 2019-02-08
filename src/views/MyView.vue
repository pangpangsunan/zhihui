<template>
    <div class="container">
        <div v-if="!hasData" class="no-attention">
            <img src="@/assets/img_follow_nothing.png">
            <p>您尚未关注任何人</p>
        </div>
        <ul class="list-group" v-if="hasData">
            <li class="list-group-item" v-for="item in arr">
                <div class="attention-left">
                    <img :src="item.userInfo.headimgurl"  class="img-circle pull-left">
                        <h3 class="teachname">{{item.userInfo.name}}</h3>
                        <h5 class="attention-number">{{item.userInfo.balance}} 人关注 <a href="" class="attention">取消关注</a></h5>
                        <p class="duty">{{item.userInfo.label}}</p>
                </div>

                <ul class="attention-right">
                    <li><img :src="item.image" alt=""></li>
                    <li><img :src="item.image" alt=""></li>
                    <li><img :src="item.image" alt=""></li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style>

    .list-group-item{
        height: 10rem;
        background: #FFFFFF;
        border-radius: 2px;
        margin-top: 1rem;
        border: none;
    }
    .img-circle {
        width: 7rem ;
        height: 7rem;
        vertical-align: middle;
    }
    .pull-left{
        display: inline-block;
    }

    .teachname {
        font-size: 1.25rem;
        color:#222222;
        margin-left: 1rem;
    }
    .attention-number,.duty {
        font-size: 0.875rem;
        color: #888888;
        margin-left: 1rem;
    }
    .attention{
        font-size: 0.875rem;
        color: #4459CC;
    }
    .attention-left {
        width: 23rem;
        height: 8rem;
        padding-top: 1rem;
        float: left;
    }
    .attention-right{
        width: 46rem;
        float: right;
    }
    .attention-right li {
        list-style-type: none;
        float: left;
        margin-left: 1rem;
        padding-top: 0.5rem;
    }
    .attention-right li img{
        width: 14rem;
        height: 7.875rem;
    }
    @media screen and (max-width: 768px) {
        html {
            font-family: SourceHanSansSC-Medium!important;
            font-size:13px!important;
            background: #000;
        }
        .attention-left {
            width: 20rem;
            height: 8rem;
            padding-top: 1rem;
            float: left;
        }
        .list-group-item{
            height: 9rem;
            background: #FFFFFF;
            border-radius: 2px;
            margin-top: 1rem;
            border: none;
        }
        .attention-right {
            width: 33rem;
            margin-top: 1rem;
        }
        .attention-right li img{
            width: 9.5rem;
            height: 5rem;
        }
    }
</style>
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

