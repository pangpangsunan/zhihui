<template>
    <div class="container">
        <p class="nav-title">与{{ tinfo.name }}对话</p>
        <div class="chat-wrapper border-rad">
            <div class="chat-left">
                <div class="chat-content">
                    <ul id="chat-list">

                        <li v-for="item in arr">
                            <div class="teacher-chat" v-if="!iSstudent(item)">
                                <img :src="item.sendFromHeadimag" class="touxiang">
                                <div class="teacher-chat-bg font-middle">
                                    {{ item.content }}
                                </div>
                                <div class="send-time font-bestsmall">{{ item.sendDate|datetime }}</div>
                            </div>
                            <div class="student-chat" v-if="iSstudent(item)">
                                <div class="student-chat-bg font-middle">
                                    {{ item.content }}
                                </div>
                                <img :src="item.sendFromHeadimag" class="touxiang">
                                <div class="send-time font-bestsmall">{{ item.sendDate|datetime }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="send-msg">
                    <textarea placeholder="" v-model="content"></textarea>
                    <button class="blue-btn" @click="send()">发送</button>
                </div>
            </div>
            <div class="chat-right">
                <img :src="tinfo.headimgurl" class="teachers-img">
                <p class="teachers-name">{{ tinfo.name }}</p>
                <p class="font-small"> {{ $route.params.cnt }}个粉丝</p>
                <!--<button class="blue-btn">关注</button>-->
                <button class="attention ">已关注</button>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>
<style scoped>
    .teacher-chat-bg {
        background: #4459CC;
        border-radius: 2px;
        color: #fff;
        padding: .8rem;
        display: inline-block;
        margin-left: .8rem;
        margin-right: 10rem;
        max-width: 30rem;
    }

    .student-chat-bg {
        background: #EEEEEE;
        border-radius: 2px;
        color: #222222;
        padding: .8rem;
        display: inline-block;
        text-align: left;
        margin-left: 10rem;
        max-width: 30rem;

    }

    .student-chat .send-time {
        margin-right: 5rem;
    }

    .send-time {
        color: #A5A5A5;
        margin-left: 5rem;
    }

    .chat-wrapper {
        height: 45rem;
        background: #F4F6F7;

    }

    .chat-left {
        background: #FAFAFA;
        width: 70%;
        height: 45rem;
        float: left;

    }

    .chat-content {
        height: 35rem;
        overflow-y: scroll;
        padding: .5rem;
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
        border-radius: 7.5rem;
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

    .touxiang {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 3.76rem;
        display: inline-block;
    }

    .teacher-chat, .student-chat {
        text-align: left;
        padding: 1rem;
    }

    .student-chat {
        text-align: right;
    }

    .student-chat .touxiang {
        margin-left: .8rem;
    }

    @media (max-width: 768px) {

        .chat-left {
            width: 65%;
            overflow-y: scroll;
        }
    }


</style>
<script>

    export default {
        created() {
            this.load()
        }, data() {
            return {
                arr: [],
                content: null,
                tinfo: {},
                tinfoex: {}
            }
        }, methods: {
            send() {
                if (!this.content) {
                    alert('消息为空');
                    return;
                }

                this.$post('/edu/message/addMessage', {
                    content: this.content,
                    sendFrom: this.$store.getters.userInfo.id,
                    sendToIds: this.$route.params.id,
                    type: 3
                }, p => {
                    if (p.httpCode == 200) {
                        this.load()
                    }
                });
            }, load() {
                this.content = null;
                this.$get('/edu/user/getUserDetail', {
                    id: this.$route.params.id
                }, p => {
                    this.tinfo = p.content.userInfo;
                    this.tinfoex = p.content.userExtra;
                });

                this.$get('/edu/message/getPrivateMessageDetail', {
                    uid: this.$store.getters.userInfo.id,
                    uidother: this.$route.params.id
                }, p => {
                    if (p.content) {
                        this.arr = p.content;
                    }
                });
            }, iSstudent(item) {
                return item.sendFromId == this.$store.getters.userInfo.id
            }
        }
    }
</script>

