<template>
    <div class="diolog">
        <div class="public-page skin-white">
            <div class="font-big">发布课程需求</div>
            <form class="form-horizontal">
                <div class="select-groups">
                    <label>所属行业</label>
                    <select>
                        <option value="请选择">请选择</option>
                        <option v-for="item in menus">
                            {{item.name}}
                        </option>
                    </select>
                </div>
                <div class="select-groups">
                    <label>适用职能</label>
                    <select>
                        <option value="请选择">请选择</option>
                        <option v-for="item in menus1" v-if="currentMenu.id==item.industryid">
                            {{item.name}}
                        </option>
                    </select>
                </div>
                <div class="select-groups">
                    具体描述
                    <textarea></textarea>
                </div>
                <div class="select-groups">
                    <button class="blue-btn">发布</button>
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
    import axios from 'axios'
    import qs from 'querystring'
    import {mapGetters} from 'vuex'
    import Close from "./close";

    export default {
        data() {
            return {
                menus: {},
                menus1: [],
                currentMenu: {},
                diolog:null
            }

        },
        methods: {
            settype1(obj) {
                this.currentMenu = obj
            },
            loaddata(obj) {
                this.$emit('loaddata', this.currentMenu, obj)
            }
        },
        created() {
            axios.get('/edu/dic/getIndustryList').then(p => {
                this.currentMenu = p.data.content[0];
                for (let obj of p.data.content) {
                    let id = obj.id
                    this.menus[id] = obj;
                }
            });

            axios.get('/edu/dic/getFunctionList').then(p => {
                this.menus1 = p.data.content
            })
        }
    }
</script>