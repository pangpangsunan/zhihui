<template>
    <div class="closebtn" @click="hide()">关闭</div>
</template>

<script>
    export default {
        created() {
        },
        methods:{
            hide() {
                this.$emit('hide')
            },
        }
    }
</script>

<style scoped>
.closebtn {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    z-index: 102;
}
</style>