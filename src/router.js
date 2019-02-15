import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('./views/layout.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./views/Home.vue')
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
            ]
        }, {
            path: '/user',
            name: 'user',
            component: () => import('./views/User/layout.vue'),
            children: [
                {
                    path: 'login',
                    component: () => import('./views/User/Login.vue')
                }
            ]
        }
    ]
})
