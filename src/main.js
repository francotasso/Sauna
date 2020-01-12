import Vue from 'vue'
import App from './App.vue'
import { router } from './Router'
import store from './Store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
