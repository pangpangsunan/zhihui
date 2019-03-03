<template>
    <div>
        <div class="manage-content">
            <div class="font-big">选择你感兴趣的知识</div>
            <div class="font-small">请至少选择一项</div>
            <table class="font-middle">
                <tr>
                    <td>执行力</td>
                    <td>营销策略</td>
                    <td>客户关系维护</td>
                </tr>
                <tr>
                    <td>中层管理</td>
                    <td>销售实战</td>
                    <td>政策解读</td>
                </tr>
            </table>
            <button class="blue-btn">保存</button>
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

    .manage-content table {
        margin: .5rem auto;
        border-collapse: separate;
        border-spacing: 1.2rem;
        color: #444444;
    }

    .manage-content td {
        width: 11.25rem;
        height: 3.5rem;
        background: #F1F1F1;
        border-radius: 2px;
        text-align: center;

    }

    /*.click-choice表示点击选项后每个选项背景色的变化*/
    .manage-content td .click-choice {
        color: #fff;
        background-color: #4459CC;
    }

    .font-small {
        color: #444444;
        margin-top: .5rem;
    }

    .blue-btn {
        width: 12rem;
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
                hasData: false
            }
        },
    }
</script>

