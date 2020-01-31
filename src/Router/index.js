import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Inicio from '../Pages/Inicio.vue'
import Artist from '../Pages/Artist.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    redirect: '/inicio',
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
        },
        {
            path: '/artist/:id',
            name: 'Artist',
            component: Artist,
            props: true
        }
    ]
})