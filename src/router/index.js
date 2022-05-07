import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

function lazyLoad(view)
{
    return () => import (`../pages/${view}.vue`)
}

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: 'default' }
    },
    {
        path: '/login',
        name: 'Login',
        component: lazyLoad('Login'),
        meta: { layout: 'empty' }
    },
    {
        path: '/client/add',
        name: 'ClientAdd',
        component: lazyLoad('client/Add'),
        meta: { layout: 'default' }
    },
    {
        path: '/product/add',
        name: 'ProductAdd',
        component: lazyLoad('product/Add'),
        meta: { layout: 'default' }
    },
    {
        path: '/sale/pdv',
        name: 'SalePDV',
        component: lazyLoad('sale/PDV'),
        meta: { layout: 'empty' }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'PageNotFound',
        component: lazyLoad('PageNotFound'),
        meta: { layout: 'empty' }       
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router