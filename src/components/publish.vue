<template>
    <div class="diolog" @click.self="close">
        <div class="public-page skin-white">
            <div class="font-big">发布课程需求</div>
            <form class="form-horizontal" @submit.prevent="publish">
                <div class="select-groups">
                    <label>所属行业</label>
                    <select v-model="type1" required>
                        <option value="">请选择</option>
                        <option v-for="item in menus" :value="item.id">
                            {{item.name}}
                        </option>
                    </select>
                </div>
                <div class="select-groups">
                    <label>适用职能</label>
                    <select v-model="type2" required>
                        <option value="">请选择</option>
                        <option v-for="item in menus1" v-if="currentMenu.id==item.industryid" :value="item.id">
                            {{item.name}}
                        </option>
                    </select>
                </div>
                <div class="select-groups">
                    具体描述
                    <textarea required v-model="content"></textarea>
                </div>
                <div class="select-groups">
                    <button class="blue-btn" type="submit">发布</button>
                </div>
            </form>
            <div class="closebtn" @click="$emit('close')">关闭</div>
        </div>

    </div>
</template>


<style scoped>
    .diolog {
        width: 100vw;
        height: 100vh;
        background: rgba(34, 34, 34, 0.80);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;

    }

    .public-page {
        border-radius: 4px;
        width: 50rem;
        height: 34.5rem;
        margin: 5rem auto;
        padding: 3rem;
        text-align: center;
        position: relative;
    }

    .select-groups {
        margin-top: 1.5rem;
    }

    .blue-btn {
        width: 20rem;
    }

    .public-page select, .public-page textarea {
        width: 32.5rem;
        height: 2.75rem;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.24);
        border-radius: 2px;
        margin-left: .5rem;
        color: #666666;
    }

    .public-page textarea {
        height: 10rem;
        padding: 1rem;
        vertical-align: middle;
    }

</style>
<script>


    import {mapGetters} from 'vuex'
    import Close from "./close";

    export default {
        data() {
            return {
                menus: {},
                menus1: [],
                currentMenu: {},
                diolog: null,
                type1: '',
                type2: '',
                content: null,
            }
        },
        computed: mapGetters([
            'userInfo'
        ]),
        methods: {
            settype1(obj) {
                this.currentMenu = obj
            },
            loaddata(obj) {
                this.$emit('loaddata', this.currentMenu, obj)
            },
            publish() {

                this.$post('/edu/user/addCourseRequirement', {
                    uid: this.userInfo.id,

                    industry: this.type1,
                    'function': this.type2,
                }, p => {
                    if (p.httpCode == 200) {
                        // 添加成功
                        this.$emit('close')
                    } else {
                        alert(p.msg)
                    }
                })
            },
            close() {
                this.$emit('close')
            }
        },
        created() {
            this.$get('/edu/dic/getIndustryList', p => {
                this.currentMenu = p.content[0];
                for (let obj of p.content) {
                    let id = obj.id
                    this.menus[id] = obj;
                }
            });

            this.$get('/edu/dic/getFunctionList', p => {
                this.menus1 = p.content
            })
        }
    }
</script>