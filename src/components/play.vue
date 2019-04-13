<template>
    <div>
        <div class="videosp">
            <video :src="url"
                   id="vd"
                   width="100%"
                   height="100%"
                   ref="video"
                   controls="controls"></video>
        </div>
        <div class="right">
            <p class="title font-big">{{ course.name }}</p>
            <p class="trywatch">试看版</p>
            <p class="content">{{ course.background }}</p>
            <div class="att-wrapper">
                <img :src="course.image" class="img-left">
                <span>{{ course['function'] }}</span>
                <br>
                <span class="font-middle">{{ course.totalNum }}人关注</span>
                <button class="attention-btn blue-btn">关注</button>

                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "play",
        props: {
            course: {},
            url: ''
        },
        created() {
            setInterval(() => {
                let video = this.$refs.video;
                this.$post('/edu/video/savePlayRecord', {
                    uid: this.$store.getters.userInfo.id,
                    cid: this.course.id,
                    currenttime: parseInt(video.currentTime),
                    duration: parseInt(video.duration)
                });
            }, 1000)
        }
    }
</script>

<style scoped>

    .font-middle {
        color: #222222;
    }

    .videosp {
        width: 46rem;
        height: 25rem;
        float: left;
    }

    .course-play .right {
        float: right;
        width: 25rem;
        padding: 1rem;
    }

    .content {
        color: #666666;
    }

    .trywatch {
        font-size: 14px;
        color: #888888;
        letter-spacing: 0;
        line-height: 24px;
    }

    .att-wrapper {
        margin-top: 10rem;
    }

    .attention-btn {
        margin-left: 7rem;
    }

    .title {
        margin-top: 2rem;
        color: #8087AB;
    }

</style>