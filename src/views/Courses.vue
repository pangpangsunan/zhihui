<template>
    <div class="container">
        <div class="container" style="position: relative">
            <div class="diolog-coursetype" v-if="showDialog">
                <coursetype @loaddata="loaddata"></coursetype>
            </div>
        </div>
        <p class="nav-title">全部 - {{ obj1.name }} - {{ obj2.name }}</p>
        <div class="subtitle">
            <div class="course-number">{{ arr.length }}门课程</div>
            <div class="dropdown course-type">
                <button class="drop-btn" type="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                    <span class="course-type">全部类型
				        <span class="caret"></span>
			        </span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dLabel">
                    <li>
                        <a @click.prevent="reload(1)">线上</a>
                    </li>
                    <li>
                        <a @click.prevent="reload(2)">线下</a>
                    </li>
                    <li>
                        <a @click.prevent="reload(3)">专栏</a>
                    </li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
        <div class="courses-category border-rad">
            <div class="pro skin-white" v-for="item in arr">
                <router-link :to="{name:'courseInfo',params:{id:item.id}}">
                    <img :src="item.image" class="course-img">
                    <div class="course-list">
                        <div class="course-name">{{ item.name }}<span class="online">{{ item.type|coursType }}</span>
                        </div>
                        <div class="course-price font-middle">￥{{ item.price }}</div>
                        <div class="course-teacher font-bestsmall">
                            <img src="@/assets/ic_home_teacher.png">
                            {{ item['function'] }}
                        </div>
                        <div class="course-location font-bestsmall">
                            <img src="@/assets/ic_location.png">
                            {{ item.address }}
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>
<style scoped>

    .course-name {
        margin-top: 1rem;
    }

    .course-list {
        padding-left: 1rem;
    }

    .course-teacher, .course-price {
        margin-top: .8rem;
    }

    .pro {
        width: 22.25rem;
        height: 21rem;
        margin-left: 1.2rem;
        margin-top: 1rem;
    }

    .course-img {
        width: 22.25rem;
        height: 12.875rem;
    }

    .diolog-coursetype {
        width: 100%;
        height: 20rem;
        background: rgba(34, 34, 34, 0.80);
        border-radius: 2px;
        position: absolute;
        left: 0;
        margin: 0 auto;

    }

    @media (max-width: 768px) {

        .pro {
            margin-left: 4rem;
            margin-top: 2rem;
        }

    }

</style>
<script>
    /*
    大分类接口 http://zh.zhihui-app.com/edu/dic/getIndustryList
    小分类 http://zh.zhihui-app.com/edu/dic/getFunctionList
     */


    export default {
        created() {
            this.$get('/edu/course/getCoursePageByTeacher?id=1', p => {
                this.courseList = p.content.records
            });

            this.$store.bus.$on('showMenu', () => {
                this.showDialog = true;
            });

            this.$get('/edu/course/getCourseListByPage?status=2', p => {
                this.arr = p.content.records
            });
        },
        data() {
            return {
                courseList: [],
                showDialog: true,
                arr: [],
                type: 0,
                obj1: {},
                obj2: {}
            }
        },
        components: {
            coursetype: () => import('@/components/coursetype.vue')
        }, methods: {
            loaddata(obj1, obj2) {
                this.obj1 = obj1;
                this.obj2 = obj2;
                this.showDialog = false;
                this.$get('/edu/course/getCoursePageByIndustryAndFunction', {
                    industryid: obj1.id,
                    functionid: obj2.id,
                    type: this.type,
                }, p => {
                    if (p.httpCode == 200) {
                        this.arr = p.content.records
                    }
                })
            },
            reload(type) {
                this.type = type;
                this.loaddata(this.obj1, this.obj2);
            }
        }
    }
</script>
