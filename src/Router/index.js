import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Inicio from '../Views/Inicio.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
            redirect: { name: 'Inicio' }
        },
        {
            path: '/inicio',
            name: 'Inicio',
            component: Inicio
        }
    ]
})