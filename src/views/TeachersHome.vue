<template>
    <div class="container">
        <p class="nav-title">讲师主页</p>
        <div class="teacher-wrapper">
            <div class="teacher-wrapper-top">
                <img src="@/assets/cat.jpg" class="teacher-img">
                <div class="teacher-name">123ee</div>
                <div class="fans-number">1750 粉丝</div>
                <div class="msg-btn">
                    <button class="blue-btn">关注</button>
                    <button class="orange-btn" style="margin-left: 1rem">私信</button>
                </div>
            </div>
            <div class="teacher-info">
                <p class="teacher-tag">个人简介</p>
                <p style="text-align: left;">
                    国际贸易与海事事务专家、世界海关组织认证培训师、联合国安理会贸易管制专家智库成员。十一年中国海关工作经验，主要研究领域包括：商品归类、海关估价、原产地规则、风险管理、贸易管制等，曾为中国入世谈判提供智力支持。受国内外多个平台和机构邀请，常年为社会各界提供：理论研究、政策咨询、专题演讲、培训辅导等专业服务。</p>
                <p class="spread" @click="expand=true" v-show="!expand"><img src="@/assets/ic_expand.png"> 展开</p>
                <div v-show="expand">
                    <div class="clearfix"></div>
                    <p class="teacher-tag">过往客户</p>
                    <p>服务客户主要为欧美一线企业，产业领域设计：汽车、电子、化工、生物医药、服装和快消品等。</p>
                    <p class="teacher-tag">语言能力</p>
                    <p>中文</p>
                    <p class="teacher-tag">从业经验</p>
                    <p>1999-12-31 至 2011-12-31 上海海关</p>
                    <p class="spread" @click="expand=false" v-show="expand"><img src="@/assets/ic_less.png"> 收起</p>
                </div>
            </div>
        </div>
        <div class="subtitle">
            <div class="course-number">{{courseList.length}}门课程</div>
            <div class="dropdown course-type">
                <button class="drop-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="course-type">全部类型
				        <span class="caret"></span>
			        </span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dLabel">
                    <li>
                        <router-link to="/">线上</router-link>
                    </li>
                    <li>
                        <router-link to="/">线下</router-link>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
        <div class="courses-type">

            <div class="pro">
                <router-link to="/courseInfo">
                    <div class="top-img"></div>
                    <div class="p-title">美国出口管制新政大盘点<span class="online">线上</span></div>
                    <div class="price">￥1200</div>
                    <div class="name">
                        <img src="@/assets/ic_home_teacher.png">
                        谢顿宁
                    </div>
                    <div class="name">
                        <img src="@/assets/ic_location.png">
                        上海市梅龙镇广场9楼
                    </div>
                </router-link>
            </div>
            <div class="pro">
                <div class="topImg"></div>
                <div class="p-title">美国出口管制新政大盘点<span class="online">线上</span></div>
                <div class="price">￥1200</div>
                <div class="name">
                    <img src="@/assets/ic_home_teacher.png">
                    谢顿宁
                </div>
                <div class="name">
                    <img src="@/assets/ic_location.png">
                    上海市梅龙镇广场9楼
                </div>
            </div>
            <div class="pro">
                <div class="topImg"></div>
                <div class="p-title">美国出口管制新政大盘点<span class="online">线上</span></div>
                <div class="price">￥1200</div>
                <div class="name">
                    <img src="@/assets/ic_home_teacher.png">
                    谢顿宁
                </div>
                <div class="name">
                    <img src="@/assets/ic_location.png">
                    上海市梅龙镇广场9楼
                </div>
            </div>
            <div class="pro">
                <div class="topImg"></div>
                <div class="p-title">美国出口管制新政大盘点<span class="online">线上</span></div>
                <div class="price">￥1200</div>
                <div class="name">
                    <img src="@/assets/ic_home_teacher.png">
                    谢顿宁
                </div>
                <div class="name">
                    <img src="@/assets/ic_location.png">
                    上海市梅龙镇广场9楼
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

    .teacher-wrapper {
        border-radius: 2px;
        background-color: #F3F5F7;
        text-align: center;
    }

    .teacher-wrapper-top {
        background: #FFFFFF;
        height: 20rem;

    }

    .teacher-img {
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 7.5rem;
        margin-top: 3rem;

    }
    .subtitle {
       margin-top: 2rem!important;
    }

    .teacher-info {
        font-size: .812rem;
        color: #666666;
        padding: 1rem 1rem 2rem 1rem;
        /*height: 8.75rem;*/
        overflow: hidden;
    }


    .spread {
        color: #4459CC;
        font-size: .8125rem;
        float: right;
        cursor: pointer;
    }

    .teacher-tag {
        font-size: .875rem;
        color: #8087AB;
        padding: .7rem 0;
    }

    .teacher-name {
        color: #222222;
        margin-top: 1rem;
    }

    .fans-number {
        color: #888888;
        font-size: .875rem;
        margin-top: .5rem;
    }


    .msg-btn {
        margin-top: 1rem;
    }

    .courses-type {
        background-color: #F3F5F7;
        border-radius: 2px;
        display: flex;
        flex-wrap: wrap;
    }



    .pro {
        width: 22.25rem;
        height: 20.25rem;
        margin-left: 1.2rem;
        background-color: #fff;
        margin-top: 1rem;
    }

    .top-img {
        width: 22.25rem;
        height: 12.875rem;
        background-color: blue;
    }

    .p-title {
        font-size: 1rem;
        color: #222222;
        letter-spacing: 0.5px;
        line-height: 1.5rem;
        padding: 0.5rem 1rem 1rem 1rem;
    }

    .price {
        font-size: 0.875rem;
        color: #F5892A;
        letter-spacing: 0.5px;
        line-height: 1.2rem;
        padding: 0 1rem;
    }

    .name {
        padding: 0.3rem 1.1rem;
        font-size: 0.75rem;
        color: #666666;
        letter-spacing: 0.2px;
        line-height: 0.75rem;
    }
    @media screen and (max-width: 768px) {


        .teachname {
            font-size: 16px;
        }
    }
</style>
<script>
    import axios from 'axios'

    export default {
        created() {
            axios.get('/edu/course/getTeacherInfoByCourse?id=1').then(p => {
                this.courseList = p.data.content.records
            })
        },
        data() {
            return {
                courseList: [],
                expand: false
            }
        },
    }

</script>
