<template>
    <div>
        <div class="left">
            <ul>
                <li @click="settype1(item)" v-for="item in menus">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li v-for="item in menus1" v-if="currentMenu.id==item.industryid">
                    <a @click.prevent="loaddata(item)">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                menus: {},
                menus1: [],
                currentMenu: {},
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
            this.$get('/edu/dic/getIndustryList', p => {
                this.currentMenu = p.content[0];
                for (let obj of p.content) {
                    let id = obj.id;
                    this.menus[id] = obj;
                }
            });

            this.$get('/edu/dic/getFunctionList', p => {
                this.menus1 = p.content
            })
        }
    }
</script>

<style scoped>
    .left {
        height: 19.5rem;
        background: #222222;
        background: rgba(34, 34, 34, 0.60);
        width: 16%;
        float: left;
    }

    .left ul {
        padding-top: 1.5rem;

    }

    .active {
        background: #4459CC;
    }

    .left li {
        color: #ffff;
        height: 2.5rem;
        line-height: 2.5rem;
        padding-left: 1rem;
    }

    .left li:hover, .left li:active {
        background: #4459CC;
        cursor: pointer;
    }

    .right {
        width: 80%;
        padding-top: 2rem;
    }

    .right li {
        float: left;
        margin-left: 1rem;
    }

    .right a {
        color: #ffff;
    }
</style>