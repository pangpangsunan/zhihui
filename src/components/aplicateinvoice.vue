<template>
    <div class="diolog">
        <div class="public-page skin-white">
            <div class="font-big">申请发票</div>
            <form class="form-horizontal">
                <div class="select-groups">
                    <label>发票抬头</label>
                    <select v-model="titleId">
                        <option value="">请选择</option>
                        <option v-for="item in arr" :value="item.id">
                            {{ item.title }}
                        </option>
                    </select>
                </div>
                <div class="select-groups">
                    <label>发票类型</label>
                    <select v-model="content">
                        <option value="会务费">会务费</option>
                        <option value="培训费">培训费</option>
                        <option value="咨询费">咨询费</option>
                        <option value="服务费">服务费</option>
                    </select>
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
                titleId: '',
                content: '会务费',
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
            submit() {
                if (!this.titleId) {
                    alert("请选择发票抬头")
                    return;
                }
                this.$post('/edu/invoice/addInvoiceNew', {
                    titleId: this.titleId,
                    content: this.content,
                    orderid: this.orderId
                }, p => {
                    if (p.httpCode == 200) {
                        alert("申请发票成功")
                    } else {
                        alert(p.msg)
                    }
                })
            }
        },
        props: {
            orderId: 0
        }

    }
</script>