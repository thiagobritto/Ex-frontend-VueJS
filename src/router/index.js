import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../pages/Register.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router