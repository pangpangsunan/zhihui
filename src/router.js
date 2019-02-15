import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('./views/layout.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./views/Home.vue'),
                    meta: {
                        msg: "ths is msg"
                    }
                },
                {
                    path: 'courses',
                    component: () => import( './views/Courses.vue')
                },
                {
                    path: 'buyered',
                    component: () => import( './views/Buyered.vue')
                },
                {
                    path: 'myview',
                    component: () => import( './views/MyView.vue')
                },
                {
                    path: 'courseInfo',
                    component: () => import( './views/CourseInfo.vue')
                },
                {
                    path: 'coursePlay',
                    component: () => import( './views/CoursePlay.vue')
                },
                {
                    path: 'teachersHome',
                    component: () => import( './views/TeachersHome.vue')
                },
            ],
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('./views/User/layout.vue'),
            children: [
                {
                    path: 'login',
                    component: () => import('./views/User/Login.vue')
                },
                {
                    path: 'fogetpwd',
                    component: () => import('./views/User/FogetPwd.vue')
                },
                {
                    path: 'resetpwd',
                    component: () => import('./views/User/ResetPwd.vue')
                },
                {
                    path: 'success',
                    component: () => import('./views/User/Success.vue')
                },
                {
                    path: 'validate',
                    component: () => import('./views/User/Validate.vue')
                },
                {
                    path: 'register',
                    component: () => import('./views/User/Register.vue')
                }

            ]
        }
    ],
});

router.beforeEach((to, from, next) => {
    // console.log(to);
    next()
});

export default router;
