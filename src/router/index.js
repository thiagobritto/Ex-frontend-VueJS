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
        path: '/register',
        name: 'Register',
        component: lazyLoad('Register'),
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