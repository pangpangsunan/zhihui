<template>
    <router-view></router-view>
</template>
<style>
    * {
        padding: 0;
        margin: 0;
    }

    @media screen {
        html {
            font-size: 16px;
            font-family: "SourceHanSansSC-Regular";
        }
    }

    @media screen and (max-width: 1024px) {
        html {
            font-size: 13px;
        }
    }

    @media screen and (max-width: 768px) {
        html {
            font-size: 13px;
            background: #000;
        }

    }

    button {
        border: none;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }
</style>
<script>
    export default {
        name: "App"
    }
</script>
