<template>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" :data-slide-to="k" v-for="(v,k) in imgs"
                :class="k==0?'active':''"></li>
        </ol>
        <div class="carousel-inner">
            <div :class="k==0?'item active':'item'" v-for="(v,k) in imgs">
                <img :src="v.image" id="carouselimg">
            </div>
        </div>
    </div>
</template>

<style scoped>
    #carouselimg {
        width: 100%;
        height: 300px;
    }
</style>

<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/carousel/getCarouselList').then(p => {
                this.imgs = p.data.content
            })
        },
        data() {
            return {
                imgs: [],
            }
        }
    }
</script>
