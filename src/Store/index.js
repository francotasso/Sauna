import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { artist } from './ArtistModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        artist
    },
    plugins: [createPersistedState()]
})