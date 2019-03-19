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
            font-size: 12px;
            background: #000;
        }

    }

    button {
        border: none;
        background: none;
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

    /*font-middle是表示20号的字体*/
    .font-big {
        font-size: 1.25rem;
    }

    /*font-middle是表示14号的字体*/
    .font-middle {
        font-size: .88rem;
    }

    /*font-middle是表示13号的字体*/
    .font-small {
        font-size: .81rem;
    }

    /*font-middle是表示12号的字体*/
    .font-bestsmall {
        font-size: .75rem;
    }

    .border-rad {
        border-radius: 2px;
    }
    .lightgray-btn,.darkgray-btn{
        width: 12.5rem;
        height: 2.5rem;
        background: #AAAAAA;
        border-radius: 4px;
        color: #fff;
    }
    .lightgray-btn {
        border: 1px solid #AAAAAA ;
        background-color: #F3F5F7;
        color: #000;
    }

    .blue-btn, .orange-btn, .white-btn {
        width: 6.75rem;
        height: 2.25rem;
        border-radius: 2px;
        color: #fff;
        font-size: 0.875rem;
        border: none;
    }

    .font-style-gray {
        color: #222222;
        font-size: 1rem;
    }
    .grayfont {
        color: #666666;
    }

    .font-style-lightgray {
        color: #888888;
        font-size: .875rem;
    }

    .blue-btn {
        background: #4459CC;
    }

    .orange-btn {
        background-color: #F5892A;
        color: #fff;
    }

    .white-btn {
        background-color: #fff;
        border: 1px solid #F5892A;
        color: #F5892A;
    }

    .offline, .online {
        display: inline-block;
        width: 2.5rem;
        height: 1.25rem;
        line-height: 1.25rem;
        border-radius: 0.625rem;
        background-color: #4459cc;
        font-size: 0.625rem;
        color: #fff;
        text-align: center;
        margin-left: 5px;
    }

    .online {
        background-color: #1caf5f;
    }

    .clear {
        clear: both;
    }
    .closebtn {
        position: absolute;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
        z-index: 102;
    }



</style>
<script>
    export default {
        name: "App"
    }
</script>
