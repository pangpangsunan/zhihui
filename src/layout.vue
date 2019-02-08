<style>
    body {
        background: url(assets/img_bg.png);
        font-size: 16px;
    }
	html {
		font-size:16px!important;
        font-family: SourceHanSansSC-Medium!important;
	}
    @media screen and (max-width: 1024px) {
        html {
            font-family: SourceHanSansSC-Medium!important;
            font-size:13px!important;
        }
    }
    @media screen and (max-width: 768px) {
        html {
            font-family: SourceHanSansSC-Medium!important;
            font-size:13px!important;
            background: #000;
        }

    }
    /*.no-attention*/
    .no-attention {
        text-align: center;
        margin-top: 6rem;
    }
    ul {
        padding: 0;
        margin: 0;
    }
    .tabcontainer {
        margin-top: 1rem;
    }

    #nav {
        background: #e4eaf3;
        padding: 0;
        height: 3.125rem;
    }
    .nav {
        margin: 0;
        padding: 0;
        height: 3.125rem;
    }
    ul.navbg li.active {
        color: #fff;
        cursor: default;
        background-color: #4459CC;
    }


    ul.navbg li.active a, ul.navbg li.active a:hover {
        background: transparent;
		color:#fff;
    }
	 ul.navbg li a:hover{
		 background-color: #4459CC;
		 color:#fff;
	 }
	.nav-tabs li a {
        display: inline-block;
        width: 8.75rem;
        height: 3.125rem;
        line-height: 3.75rem;
        text-align: center;
    }

    .top-left a {
        display: inline-block;
        color: #555555;

    }

    .top-right a {
        display: inline-block;
        margin-top: 1rem;
        margin-left: 1.875rem;
        color: #555555;
    }

    ul.menu > li {
        list-style-type: none;
        float: left;
        margin-left: 1.25rem;
        margin-top: 0.625rem;
    }

    .nav {
        margin: 0;
        padding: 0;
    }

    .navbg li {
        float: left;
        width: 8.75rem;
        height: 3.125rem;
        line-height: 1.875rem;
    }

    .navbg li a:hover {
        background-color: #4459CC;
    }

    .navbg li a {
        display: block;
    
        padding: 0;
        margin: 0;
    }
	.navbg>li>a{
		text-align:center;
		padding:0;
	}

    .bg-black {
        background: #333;
        color: #eee;
    }
	.kefu{
		padding:0;
		margin:0;
	}
	.kefu li {
		list-style-type:none;
	}
	.kefu li:nth-child(1){
		font-size:0.75rem;
	}
	.kefu li:nth-child(2){
		font-family: HelveticaNeue-Medium;
		font-size: 1.25rem;
		color: #FFFFFF;
	}
	.kefu li:nth-child(3),.gray{
		font-size:0.75rem;
		color:#757A7C;
	}
	.bg-black .container {
		position:relative;
		padding-top:1rem;
	}
	.gray{
		position:absolute;
		top:2.8125rem;
	}

</style>
<template>
    <div id="app">
        <div class="bg-black">
            <top></top>
        </div>
        <div class="container tabcontainer">
            <nav id="nav">
                <ul class="nav col-sm-10 top-left navbg">
                    <li :class="active('home')">
                        <router-link to="/">首页</router-link>
                    </li>
                    <li :class="active('courses')">
                        <router-link to="/courses">分类课程</router-link>
                    </li>
                    <li :class="active('buyered')">
                        <router-link to="/buyered">已购课程</router-link>
                    </li>
                    <li :class="active('myview')">
                        <router-link to="/myview">我的关注</router-link>
                    </li>
                </ul>
                <div class="col-sm-2 top-right">
                    <router-link to="/"><i class="glyphicon glyphicon-comment"></i> 消息</router-link>
                    <router-link to="/"><i class="glyphicon glyphicon-envelope"></i> 私信</router-link>
                </div>
            </nav>
        </div>

        <router-view/>
        <br>
        <div class="bg-black">
            <div class="container">
                <div class="col-sm-4 gray">Copyright@2019.All rights reserved</div>
                <div class="col-sm-4 gray">沪CP备 000001号</div>
                <div class="col-sm-4">
                    <ul class="kefu">
                        <li class="text-right">客服电话</li>
                        <li class="text-right">0157-28874128-6</li>
                        <li class="text-right">Email：cs@xiaotongtech.net</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        methods: {
            active(page) {
                if (this.$route.name == page) {
                    return 'active';
                }
                return '';
            }
        },
        components: {
            top: () => import('@/components/top.vue')
        }
    }
</script>
