<template scoped>
    <div class="container">
        <p class="nav-title">帮助与反馈</p>
        <div class="box-help skin-white border-rad">
            <p class="font-style-gray explain"><span class="blue-icon"></span>关于取消课程与变更策略</p>
            <p class="font-style-lightgray">
                立众的根办度有治，白毛将气构合统列，色孟养W花件。 委无层值三价油据例，社就节有目商越，或那W满织制还。 量热上半体花接形确，米六适面日治压今，马合I再积告王。
                千提这京圆满必状率边组情布，便增又到物里已过候率家结，叫战等P没苗该构在N受。 政快说意位安标格术，半了采特土金团战技，间和S文线J素引。 什住品整习本由，见本眼理问，建届贡达吩。
                以感单共即级志在本，这感听可数级做，军属7该布肃命。 京话结命支地，多由走或面热，或K花枪。 第候接候线意当族了，入已开活各验等，了义K园区丽而。
            </p>
            <p class="font-style-gray explain"><span class="blue-icon"></span>关于评分系统说明</p>
            <p class="font-style-lightgray">
                立众的根办度有治，白毛将气构合统列，色孟养W花件。 委无层值三价油据例，社就节有目商越，或那W满织制还。 量热上半体花接形确，米六适面日治压今，马合I再积告王。
                千提这京圆满必状率边组情布，便增又到物里已过候率家结，叫战等P没苗该构在N受。 政快说意位安标格术，半了采特土金团战技，间和S文线J素引。 什住品整习本由，见本眼理问，建届贡达吩。
                以感单共即级志在本，这感听可数级做，军属7该布肃命。 京话结命支地，多由走或面热，或K花枪。 第候接候线意当族了，入已开活各验等，了义K园区丽而。
            </p>
            <p class="font-style-gray explain"><span class="blue-icon"></span>关于投诉争议的说明</p>
            <p class="font-style-lightgray">
                立众的根办度有治，白毛将气构合统列，色孟养W花件。 委无层值三价油据例，社就节有目商越，或那W满织制还。 量热上半体花接形确，米六适面日治压今，马合I再积告王。
                千提这京圆满必状率边组情布，便增又到物里已过候率家结，叫战等P没苗该构在N受。 政快说意位安标格术，半了采特土金团战技，间和S文线J素引。 什住品整习本由，见本眼理问，建届贡达吩。
                以感单共即级志在本，这感听可数级做，军属7该布肃命。 京话结命支地，多由走或面热，或K花枪。 第候接候线意当族了，入已开活各验等，了义K园区丽而。
            </p>
            <p class="font-style-gray explain"><span class="blue-icon"></span>关于投诉争议的说明</p>
            <p class="font-style-lightgray">
                立众的根办度有治，白毛将气构合统列，色孟养W花件。 委无层值三价油据例，社就节有目商越，或那W满织制还。 量热上半体花接形确，米六适面日治压今，马合I再积告王。
                千提这京圆满必状率边组情布，便增又到物里已过候率家结，叫战等P没苗该构在N受。 政快说意位安标格术，半了采特土金团战技，间和S文线J素引。 什住品整习本由，见本眼理问，建届贡达吩。
                以感单共即级志在本，这感听可数级做，军属7该布肃命。 京话结命支地，多由走或面热，或K花枪。 第候接候线意当族了，入已开活各验等，了义K园区丽而。
            </p>
        </div>
        <div class="inputcon">
            <textarea placeholder="请输入反馈内容" class="return-input">wwwwwwww</textarea>
            <button class="send-btn border-rad">提交</button>
        </div>
    </div>
</template>
<style scoped>
    .box-help {
        width: 71.25rem;
        padding: 1.3rem;
    }

    .blue-icon {
        width: 4px;
        height: 1.2rem;
        background-color: #4459CC;
        margin-right: .5rem;
        display: inline-block;
        position: relative;
        top: .2rem;
    }

    .inputcon {
        margin-top: 2rem;
    }

    .return-input {
        width: 71.25rem;
        height: 12.5rem;
        background-color: #fff;
        border: none;
        padding: 1rem;
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
        }
    }
</script>

