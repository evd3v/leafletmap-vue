import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/map',
        name: 'Map',
        component: () => import('@/views/Map'),
        children: [
            {
                path: ':id',
                name: 'Mark'
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About')
    },
    {
        path: '*',
        redirect: '/map'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
