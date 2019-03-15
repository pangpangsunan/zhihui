<template>
    <div class="diolog">
        <div class="public-page skin-white">
            <div class="font-big">申请发票</div>
            <form class="form-horizontal">
                <div class="select-groups">
                    <label>发票抬头</label>
                    <select v-model="titleId" @change="change">
                        <option value="请选择">请选择</option>
                        <option v-for="item in arr" :value="item.id">
                            {{ item.title }}
                        </option>
                    </select>
                </div>
                <div class="select-groups">
                    <label>发票类型</label>
                    <input type="text" :value="invtype|invType" readonly>
                </div>

                <div class="select-groups">
                    <button class="blue-btn" @click="submit">申请</button>
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
        height: 22rem;
        margin: 5rem auto;
        padding: 3rem;
        text-align: center;
        position: relative;
    }

    .select-groups {
        margin-top: 1.5rem;
    }

    .public-page select {
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

    .col-sm-10 input {
        height: 2.75rem;
    }

    .col-sm-2 {
        height: 2.75rem;
        line-height: 2rem;
    }
</style>
<script>

    import {mapGetters} from 'vuex'
    import Close from "./close";

    export default {
        components: {
            close: () => import('@/components/close.vue'),
        },
        data() {
            return {
                arr: [],
                titleId: 0,
                invtype: 0,
            }
        },
        filters: {
            invType: p => {
                return p == 0 ? '个人' : '公司';
            }
        },
        created() {
            this.$get('/edu/invoice/getInvoiceTitleListByUser', {
                uid: this.userInfo.id
            }, p => {
                if (p.httpCode == 200) {
                    this.arr = p.content
                } else {
                    alert(p.msg)
                }
            })
        },
        computed: mapGetters([
            'userInfo'
        ]),
        methods: {
            change() {
                let item = {};
                for (let item1 of this.arr) {
                    if (item1.id === this.titleId) {
                        item = item1;
                    }
                }
                this.invtype = item.type;
            },
            submit() {

            }
        }

    }
</script>