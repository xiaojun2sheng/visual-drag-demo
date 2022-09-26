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
        path: '/perview',
        name: 'perview',
        component: () => import('@/views/PerView'),
    },
]

export default new Router({
    routes,
})
