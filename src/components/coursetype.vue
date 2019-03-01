<template>
    <div>
        <div class="left">
            <ul>
                <li @click="showpage('yh')">优惠</li>
                <li @click="showpage('jygl')">经营管理</li>
                <li @click="showpage('yh')">优惠rrrr</li>
                <li @click="showpage('jygl')">经营管理tt</li>
                <li @click="showpage('yh')">优惠bbb</li>
                <li @click="showpage('jygl')">ttt经营管理</li>
                <li @click="showpage('yh')">bbbb优惠</li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li v-for="item in map[currentpage]">
                    <router-link :to="item.path">{{item.title}}</router-link>
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
                map: {
                    yh: [
                        {
                            path: '/courses/laodongfa1',
                            title: '劳动法'
                        },
                        {
                            path: '/courses/laodongfa2',
                            title: '薪酬'
                        },
                        {
                            path: '/courses/laodongfa3',
                            title: '薪酬33333'
                        }
                    ],
                    jygl: [
                        {
                            path: '/courses/laodongfa1',
                            title: '劳动法rrrrrrr'
                        },
                        {
                            path: '/courses/laodongfa2',
                            title: '薪酬rrrrrr'
                        },
                        {
                            path: '/courses/laodongfa3',
                            title: '薪酬33333rrrrrrr'
                        }
                    ],
                },
                currentpage: 'yh'
            }

        },
        methods: {
            showpage(page) {
                this.currentpage = page;
            }
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

    .left li {
        color: #ffff;
        height: 2.5rem;
        line-height: 2.5rem;
        padding-left: 1rem;
    }

    .left li:hover, .left li:active {
        background: #4459CC;
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