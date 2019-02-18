<template>
    <router-view></router-view>
</template>
<style>
    * {
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 16px;
        font-family: "SourceHanSansSC-Regular";
    }

    button {
        border: none;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
</style>
<script>
    export default {
        name: "App"
    }
</script>
