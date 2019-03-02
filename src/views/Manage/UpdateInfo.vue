<template>
    <div>
        <div class="manage-wrapper">
            <div class="manage-right">
                <div class="manage-content">
                    <p>
                        <span class="name">名称</span>
                        <span class="nickname">风清扬</span>
                        <span class="update" @click>修改</span>
                    </p>
                    <div style="margin-top: 2rem">
                        <span class="touxiang">头像</span>
                        <span>
                            <img src="" class="touxiangimg">
                        </span>
                        <div>
                            <button class="blue-btn">上传</button>
                        </div>

                    </div>

                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="diolog" v-if="init">
            <div class="updateinfo-diolog skin-white">
                <div class="font-big">修改名称</div>
                <div class="newname"><input type="text" placeholder="请输入新名称"></div>

                <button class="blue-btn">保存</button>
            </div>
        </div>
    </div>

</template>
<style scoped>

    .diolog {
        background: rgba(34, 34, 34, 0.80);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
    }

    .manage-right {
        width: 80%;
        background: #FFFFFF;
        border-radius: 2px;
        float: right;
        height: 43rem;

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
                hasData: false,
                init: false
            }
        },
    }
</script>

