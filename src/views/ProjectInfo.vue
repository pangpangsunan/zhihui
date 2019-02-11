<template>
    <div class="container">
        <p class="navHead">全部 - 推荐 - 美国出口管制新政大盘点</p>
        <div class="projectplay">
            <div class="left">
                <img src="">
            </div>
            <div class="right">
                <p class="title">国出口管制新政大盘点</p>
                <p class="content">线下课程</p>
                <p class="price">$1200</p>
                <p class="content">1234人学过</p>
                <div class="btns">
                    <button id="trywatch">试看</button>
                    <button id="buy">购买</button>
                </div>
            </div>
        </div>
        <div class="projectab">
            <ul class="tab-list">
                <li @click="current='page1'" :class="current==='page1'?'active':''">one</li>
                <li @click="current='page2'" :class="current==='page2'?'active':''">two</li>
                <li @click="current='page3'" :class="current==='page3'?'active':''">three</li>
            </ul>
            <ul class="tab-content">
                <li v-show="current==='page1'" style="background-color:cornflowerblue;">我是one</li>
                <li v-show="current==='page2'" style="background-color: burlywood;">我是two</li>
                <li v-show="current==='page3'" style="background-color:mediumaquamarine;">我是three</li>
            </ul>
        </div>
    </div>
</template>


<style>
    .btns {
        width: 20rem;
        position: absolute;
        left: 0;
        top: 9rem;
    }

    .projectplay {
        width: 71.25rem;
        height: 13.5rem;
        background-color: #F3F5F7;
        position: relative;
    }

    .projectplay .left {
        width: 24rem;
        height: 13.5rem;
        background: blue;
    }

    .projectplay .right {
        position: absolute;
        left: 25rem;
        top: 1rem;
    }

    .projectplay .right .title {
        color: #222222;
        font-size: 20px;
    }

    .content, .Cname, .Caddress {
        color: #666666;
        font-size: 0.75rem;
    }

    .price {
        color: #F5892A;
        font-size: 0.875rem;
    }

    .projectab {
        width: 71.25rem;
        background-color: #F3F5F7;
    }

    .tab-list {
        text-align: center;
        line-height: 40px;
        font-family: "微软雅黑";
        height: 40px;
        border-bottom: none;
    }

    .tab-list li {
        float: left;
        border: 1px solid #000;
        border-right: none;
        width: 100px;
        cursor: pointer;
    }

    .tab-list li:last-of-type {
        border-right: 1px solid #000;
    }

    .tab-content li {
        width: 302px;
        height: 300px;
        border: 1px solid #000;
        text-align: center;
        line-height: 300px;
        margin-top: 0px;
    }

    .active {
        background: purple;
    }
</style>

<script>
    export default {
        data() {
            return {
                current: 'page1'
            }
        }
    }
</script>
