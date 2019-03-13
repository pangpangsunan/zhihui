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

    export default {
        created() {
            this.$get('/edu/carousel/getCarouselList', p => {
                this.imgs = p.content
            })
        },
        data() {
            return {
                imgs: [],
            }
        }
    }
</script>
