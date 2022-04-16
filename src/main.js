import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/style.css'

import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import EmptyLayout from '@/components/layouts/EmptyLayout.vue'
import NavbarLayout from '@/components/layouts/NavbarLayout.vue'

const app = createApp(App)
app.component('default-layout', DefaultLayout)
app.component('empty-layout', EmptyLayout)
app.component('navbar-layout', NavbarLayout)

app.use(store)
app.use(router)
app.mount('#app')