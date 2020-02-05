import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Artists from '../Pages/Artists.vue'
import Artist from '../Pages/Artist.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
            redirect: { name: 'Artists' }
        },
        {
            path: '/artists',
            name: 'Artists',
            component: Artists
        },
        {
            path: '/artist/:id',
            name: 'Artist',
            component: Artist,
            props: true
        }
    ]
})