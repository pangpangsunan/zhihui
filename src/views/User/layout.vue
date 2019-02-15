<template>
    <div>
        <router-view></router-view>
        <bottom></bottom>
    </div>
</template>

<style>
    body {
        background: #f0f;
    }
</style>

<script>
    export default {
        components: {
            bottom: () => import('@/components/bottom.vue')
        }
    }
</script>
