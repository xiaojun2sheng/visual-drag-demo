import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
    },
    {
        path: '/prepage',
        name: 'prepage',
        component: () => import('@/views/PrePage'),
    },
]

export default new Router({
    routes,
})
