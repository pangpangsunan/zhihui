<template>
    <div class="container">
        <p class="nav-title">与小仙女对话</p>
        <div class="chat-wrapper border-rad">
          <div class="chat-left">
            <div class="chat-content">
                <ul id="chat-list"></ul>
            </div>
            <div class="send-msg">
                <textarea placeholder="非常感谢"></textarea>
                <button class="blue-btn">发送</button>
            </div>
          </div>
          <div class="chat-right">
            <img src="@/assets/cat.jpg" class="teachers-img">
              <p class="teachers-name">吴苏南nnan</p>
              <p class="font-small">12345个粉丝</p>
              <!--<button class="blue-btn">关注</button>-->
              <button class="attention ">已关注</button>
          </div>
          <div class="clear"></div>
        </div>
    </div>
</template>
<style scoped>
    .chat-wrapper {
        background-color: #F4F6F7;
        width: 71.25rem;
        height: 45rem;
    }
    .chat-left {
        background: #FAFAFA;
        width: 50rem;
        height: 45rem;
        float: left;
    }
    .chat-content {
        height: 35rem;
    }
    .send-msg {
        height: 10rem;
        position: relative;
        background-color: #fff;

    }
    .send-msg .blue-btn {
        position: absolute;
        bottom: 1rem;
        right: 2rem;
    }
    .send-msg textarea {
        height: 8rem;
        width: 40rem;
        border: none;
        padding: 1rem;
    }
    .chat-right {
        float: right;
        text-align: center;
        width: 21rem;
        height: 45rem;
    }
    .teachers-img {
        width: 7.5rem;
        height: 7.5rem;
        border-radius:7.5rem ;
        margin-top: 6rem;
    }
    .teachers-name {
        margin-top: .6rem;
    }
    /*attetion表示已关注状态*/
    .attention {
        background-color: #F4F6F7;
        color: #4459CC;
        border: 1px solid #4459CC;
        width: 6.75rem;
        height: 2.25rem;
        border-radius: 2px;
        font-size: 0.875rem;
    }

    .font-small {
        color: #666666;
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

