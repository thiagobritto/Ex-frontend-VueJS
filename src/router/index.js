import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

// import client from './client'
// import product from './product'

const lazyLoad = (view) => {
    return () => import(`@/pages/${view}.vue`)
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: 'default' }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'PageNotFound',
        component: lazyLoad('PageNotFound'),
        meta: { layout: 'empty' }
    },
    {
        path: '/login',
        name: 'Login',
        component: lazyLoad('Login'),
        meta: { layout: 'empty' }
    },
    {
        path: '/sale/pdv',
        name: 'SalePDV',
        component: lazyLoad('sale/PDV'),
        meta: { layout: 'empty' }
    },
    {
        path: '/register/client',
        name: 'RegisterClient',
        component: lazyLoad('RegisterClient'),
        meta: { layout: 'default' }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router