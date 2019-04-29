<template>
    <div>
        <div class="manage-content">
            <div class="font-big">选择你感兴趣的知识</div>
            <div class="font-small">请至少选择一项</div>
            <ul class="font-middle">
                <li class="noclick" v-for="item in arr" @click="addInt(item)"
                    :class="{'click-choice':arr1.indexOf(item.id)!==-1}">{{
                    item.name }}
                </li>
            </ul>
            <div class="clear"></div>
            <button class="blue-btn" @click="save">保存</button>
        </div>
        <div class="clear"></div>
    </div>

</template>
<style scoped>


    .manage-content {
        width: 80%;
        margin-left: 6em;
        text-align: center;
        margin-top: 2rem;
    }

    .manage-content ul {
        margin: .5rem auto;
        border-collapse: separate;
        border-spacing: 1.2rem;
        color: #444444;
        width: 47rem;
    }

    .noclick {
        width: 11.25rem;
        height: 3.5rem;
        line-height: 3.5rem;
        background: #F1F1F1;
        border-radius: 2px;
        text-align: center;
        margin-left: 3rem;
        margin-top: 1rem;
        float: left;
        cursor: pointer;
    }

    /*.click-choice表示点击选项后每个选项背景色的变化*/
     .click-choice {
        color: #fff;
        background: #4459CC;
    }

    .font-small {
        color: #444444;
        margin-top: .5rem;
    }

    .blue-btn {
        width: 12rem;
        margin-top: 3rem;
    }



</style>
<script>
    import {mapGetters} from 'vuex'

    export default {
        created() {
            this.$get('/edu/dic/getInterestList', p => {
                this.arr = p.content
            })
        },
        computed: mapGetters([
            'userInfo'
        ]),
        data() {
            return {
                arr: [],
                arr1: []
            }
        },
        methods: {
            addInt(item) {
                let idx = this.arr1.indexOf(item.id);
                if (idx === -1) {
                    this.arr1.push(item.id)
                } else {
                    this.arr1.splice(idx, 1);
                }

            },
            save() {
                this.$post('/edu/dic/addUserInterestList', {
                    uid: this.userInfo.id,
                    iid: this.arr1.join(',')
                }, p => {
                    if (p.httpCode == 200) {
                        alert("提交成功")
                    } else {
                        alert(p.msg)
                    }
                })
            }
        }
    }
</script>

