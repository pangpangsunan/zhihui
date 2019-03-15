<template>
    <div>
        <div class="manage-content">
            <div class="font-big">选择你感兴趣的知识</div>
            <div class="font-small">请至少选择一项</div>
            <ul class="font-middle">
                <li>只想了</li>
                <li>只想了</li>
                <li>只想了</li>
                <li>只想了</li>
                <li>只想了</li>
                <li>只想了</li>
            </ul>
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

    .manage-content ul {
        margin: .5rem auto;
        border-collapse: separate;
        border-spacing: 1.2rem;
        color: #444444;
        width: 47rem;
    }

    .manage-content li {
        width: 11.25rem;
        height: 3.5rem;
        line-height: 3.5rem;
        background: #F1F1F1;
        border-radius: 2px;
        text-align: center;
        margin-left: 3rem;
        margin-top: 1rem;
        float: left;

    }

    /*.click-choice表示点击选项后每个选项背景色的变化*/
    .manage-content li .click-choice {
        color: #fff;
        background-color: #4459CC;
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
            this.$get('/edu/collection/getCollectionPage', {
                uid: this.userInfo.id,
                type: 2
            }, p => {
                this.arr = p.content.records
                this.hasData = !!p.content.records
            })
        },
        computed: mapGetters([
            'userInfo'
        ]),
        data() {
            return {
                arr: [],
                hasData: false
            }
        },
    }
</script>

