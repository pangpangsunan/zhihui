<template>
    <div class="home">
        <br>
        <p class="text-muted">正在播放,美国出口管制新政大盘点</p>
        <div class="col-sm-8 video">
            <video src=""></video>
        </div>
        <div class="col-sm-4">
            <div style="height: 300px;">
                <h4>正在播放,美国出口管制新政大盘点</h4>
                <h5>试看点</h5>
                <p>
                    试看点试看点试看点试看点试看点试看点试看点试看点试看点试
                    看点试看点试看点试看点试看点试看点试看点试看点试看点试看点试看点试看点
                </p>
            </div>
            <div>
                <div class="pull-left">
                    <img src="@/assets/cat.jpg" class="img-circle img-responsive logo pull-left" alt="">
                    <div class="pull-left" style="padding-top:8px">
                        <div class="title"><b>谢领宁</b></div>
                        <div class="text-muted">7人关注</div>
                    </div>
                </div>

                <button class="btn btn-primary pull-right">关注</button>
            </div>
        </div>

        <div class="col-sm-12 bg-white">
            <div style="position: relative;">
                <textarea name="" id="msg" placeholder="输入您的评论"></textarea>
                <button class="bt btn-sm btn-primary send">发送</button>
            </div>
            <div>
                <p class="text-muted">
                    共587条评论
                </p>
                <ul class="comment">
                    <li>
                        <img src="@/assets/cat.jpg" class="img-circle img-responsive logo pull-left" alt="">
                        <div class="pull-left" style="padding-top:8px">
                            <div class="title"><b>谢领宁</b><span class="text-muted">2019-01-01</span></div>
                            <div class="text-muted">7人关注</div>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/cat.jpg" class="img-circle img-responsive logo pull-left" alt="">
                        <div class="pull-left" style="padding-top:8px">
                            <div class="title"><b>谢领宁</b><span class="text-muted">2019-01-01</span></div>
                            <div class="text-muted">7人关注</div>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/cat.jpg" class="img-circle img-responsive logo pull-left" alt="">
                        <div class="pull-left" style="padding-top:8px">
                            <div class="title"><b>谢领宁</b><span class="text-muted">2019-01-01</span></div>
                            <div class="text-muted">7人关注</div>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/cat.jpg" class="img-circle img-responsive logo pull-left" alt="">
                        <div class="pull-left" style="padding-top:8px">
                            <div class="title"><b>谢领宁</b><span class="text-muted">2019-01-01</span></div>
                            <div class="text-muted">7人关注</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    .video {
        background: #000;
        height: 400px;
        border: 2px #000 solid;
    }

    img.logo {
        height: 50px;
        margin-right: 20px;
    }

    .bg-white {
        background: #fff;
    }

    #msg {
        padding: 9px;
        margin-top: 20px;
        width: 100%;
        height: 100px;
        border: none;
        background: #eee;
    }

    .send {
        position: absolute;
        right: 7px;
        bottom: 20px;
        width: 80px;
    }

    ul.comment li {
        list-style-type: none;
        height: 90px;
        border-bottom: 1px solid #ddd;
    }
</style>

<script>
    export default {}
</script>
