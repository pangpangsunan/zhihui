<template>
    <div class="diolog">
        <div class="public-page skin-white">
            <div class="font-big">申请发票</div>
            <form class="form-horizontal">
                <div class="select-groups">
                    <label>发票抬头</label>
                    <select>
                        <option value="请选择">请选择</option>
                        <option v-for="item in arr">
                            {{item.title}}
                        </option>
                    </select>
                </div>
                <div class="select-groups">
                    <label>发票类型</label>
                    <select>
                        <option value="请选择">请选择</option>
                        <option v-for="item in arr">
                            {{item.type}}
                        </option>
                    </select>
                </div>

                <div class="select-groups">
                    <button class="blue-btn">申请</button>
                </div>
            </form>
            <close></close>
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
    import axios from 'axios'
    import qs from 'querystring'
    import {mapGetters} from 'vuex'
    import Close from "./close";


    export default {
        components: {
            close: () => import('@/components/close.vue'),
        },
        data() {
            return {
                arr: [],
                diolog: null
            }
        },
        created() {
            axios.get('/edu/invoice/getInvoiceTitleListByUser', {
                params:{
                    uid:this.userInfo.id
                }
            }).then(p => {
                if (p.data.httpCode == 200) {
                    this.arr = p.data.content

                } else {
                    alert(p.data.msg)

                }
            })

        },

        computed: mapGetters([
            'userInfo'
        ])

    }
</script>