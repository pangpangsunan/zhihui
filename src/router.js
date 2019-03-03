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
                    component: () => import( './views/Courses.vue'),
                    name: 'courses'
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
                    path: 'courseInfo/:id',
                    name: 'courseInfo',
                    component: () => import( './views/CourseInfo.vue')
                },
                {
                    path: 'coursePlay/:id',
                    name: 'coursePlay',
                    component: () => import( './views/CoursePlay.vue')
                },
                {
                    path: 'teacher/:id',
                    name: 'teacher',
                    component: () => import( './views/Teacher.vue')
                },
                {
                    path: 'help',
                    component: () => import('./views/Help.vue')
                },
                {
                    path: 'privatemsg',
                    component: () => import('./views/PrivateMsg.vue')
                },
                {
                    path: 'chat/:id',
                    name: 'chat',
                    component: () => import('./views/Chat.vue')
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
                    path: 'forget',
                    component: () => import('./views/User/ForgetPwd.vue')
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
                    path: 'validateemail',
                    component: () => import('./views/User/ValidateEmail.vue')
                },
                {
                    path: 'validatephone',
                    component: () => import('./views/User/ValidatePhone.vue')
                },
                {
                    path: 'register',
                    component: () => import('./views/User/Register.vue')
                }

            ]
        },
        {
            path: '/manage',
            name: 'manage',
            component: () => import('./views/layout.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./views/Manage/layout.vue'),
                    children: [
                        {
                            path: 'interest',
                            component: () => import('./views/Manage/Interest.vue')
                        },
                        {
                            path: 'order',
                            component: () => import('./views/Manage/Order.vue')
                        },
                        {
                            path: 'invoice',
                            component: () => import('./views/Manage/Invoice.vue')
                        },
                        {
                            path: 'bindphone',
                            component: () => import('./views/Manage/BindPhone.vue')
                        },
                        {
                            path: 'updateinfo',
                            component: () => import('./views/Manage/UpdateInfo.vue')
                        },
                        {
                            path: 'updatepasswords',
                            component: () => import('./views/Manage/UpdatePassword.vue')
                        },
                    ]
                },

            ]

        }
    ],
});

router.beforeEach((to, from, next) => {
    // console.log(to);
    next()
});

export default router;
