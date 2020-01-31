import { artistService } from '../Services'

const state = {
    items: [],
    songs: [],
    querySong: '',
    currentSong: ''
};

const getters = {
    songsFiltered(state) {
        return state.songs.filter(song => song.name.toLowerCase().includes(state.querySong.toLowerCase()))
    }
}

const mutations = {
    setItems(state, items) {
        state.items = items
    },
    setSongs(state, songs) {
        state.songs = songs
    },
    setSearchFilter(state, query) {
        state.querySong = query
    },
    setCurrentSong(state, song) {
        state.currentSong = song
    },
    cleanCurrentSong(state) {
        state.currentSong = ''
    }
};

const actions = {
    async getItems({ commit }) {
        let items = await artistService.getItems()
        commit('setItems', items.albums.items)
    },
    async getSongs({ commit }, artistId) {
        let songs = await artistService.getSongs(artistId)
        commit('setSongs', songs.tracks)
    },
    setSearchFilter({ commit }, query) {
        commit('setSearchFilter', query)
    },
    setCurrentSong({ commit }, song) {
        commit('setCurrentSong', song)
    },
    cleanCurrentSong({ commit }) {
        commit('cleanCurrentSong')
    }
}

export const artist = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}