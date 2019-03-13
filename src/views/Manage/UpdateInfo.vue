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
                        <input v-show="false" @change="change($event)" type="file"
                               accept="image/png,image/jpeg,image/gif" ref="file">
                        <button class="blue-btn" @click="upload">上传</button>
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
                token: null,
            }
        },
        computed: mapGetters([
            'userInfo'
        ]),
        created() {
            this.$post('/edu/video/getUpToken', {}, p => {
                this.token = p.content
            })
        },
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
            },
            upload() {
                this.$refs.file.click()
            },
            change(ev) {
                this.$post('/edu/course/uploadPic', {
                    file: ev.target.files[0],
                    type: 6
                }, p => {
                    if (p.httpCode == 200) {

                        this.$post('/edu/user/updateUser', {
                            id: this.userInfo.id,
                            headimgurl: p.content
                        }, p1 => {
                            if (p1.httpCode == 200) {
                                this.$get('/edu/user/getUserDetail', {id: this.userInfo.id}, p2 => {
                                    console.log(p2);
                                    this.$store.commit('login', p2.content)
                                })
                            }
                        });
                    } else {
                        alert("图片上传失败")
                    }
                })
            }
        }
    }
</script>