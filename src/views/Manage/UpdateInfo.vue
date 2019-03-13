<template>
    <div>
        <div>
            <div class="manage-content">
                <p>
                    <span class="name">名称</span>
                    <span class="nickname">{{userInfo.name}}</span>
                    <span class="update" @click="show=true">修改</span>
                </p>
                <div style="margin-top: 2rem">
                    <span class="touxiang">头像</span>
                    <span>
                            <img :src="userInfo.headimgurl" class="touxiangimg">
                        </span>
                    <div>
                        <button class="blue-btn">上传</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>

        <div class="diolog" v-if="show">
            <div class="updateinfo-diolog skin-white">
                <div class="font-big">修改名称</div>
                <div class="newname"><input type="text" v-model="userInfo.name" placeholder="请输入新名称"></div>

                <button class="blue-btn" @click="update()">保存</button>
            </div>
        </div>
    </div>

</template>
<style scoped>

    .diolog {
        background: rgba(34, 34, 34, 0.80);
        width: 100%;
        height: 100vw;
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
    }

    .manage-content {
        width: 80%;
        margin-left: 6em;
        margin-top: 2rem;
    }

    .name, .touxiang {
        color: #888888;
    }

    .nickname {
        margin: 0 1rem;
    }

    .update {
        color: #4459CC;
        cursor: pointer;
    }

    .touxiangimg {
        width: 5rem;
        height: 5rem;
        border-radius: 5rem;
        margin-left: 1rem;
    }

    .updateinfo-diolog {
        width: 25rem;
        height: 15.75rem;
        margin: 10rem auto;
        border-radius: 4px;
        text-align: center;
        padding-top: 2rem;
    }

    .newname {
        margin-top: 2rem;
    }

    .newname input {
        width: 18rem;
        height: 2.25rem;
    }

    .blue-btn {
        width: 10rem;
        margin-top: 3rem;
    }

</style>
<script>

    /*
    /edu/user/updateUser
     */
    import {mapGetters} from 'vuex'


    export default {
        data() {
            return {
                show: false,
                username: null,
            }
        },
        computed: mapGetters([
            'userInfo'
        ]),
        methods: {
            update() {
                this.$post('/edu/user/updateUser', {
                    id: this.userInfo.id,
                    name: this.userInfo.name,
                }, p => {
                    if (p.httpCode == 200) {
                        this.findInfo();
                        this.show = false;
                    }
                })
            },
            findInfo() {
                this.$get('/edu/user/getUserDetail', {
                    id: this.userInfo.id,
                }, p => {
                    if (p.httpCode == 200) {
                        this.$store.commit('login', p.content)
                        // this.$router.push('/')
                    } else {
                        this.msg = p.msg
                    }
                })


            }
        }
    }
</script>