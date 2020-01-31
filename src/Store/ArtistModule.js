import { artistService } from '../Services'

const state = {
    items: [],
    songs: [],
    querySong: '',
    currentArtist: null,
    currentSong: null
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
    setCurrentArtist(state, artist) {
        state.currentArtist = artist
    },
    cleanCurrentSong(state) {
        state.currentSong = null
    },
    cleanSearchSong(state) {
        state.querySong = ''
    }
};

const actions = {
    async getItems({ commit }) {
        let items = await artistService.getItems()
        commit('setItems', items.albums.items)
    },
    async getSongs({ commit }, artistId) {
        let songs = await artistService.getSongs(artistId)
        commit('setSongs', songs.tracks.filter(song => song.preview_url))
    },
    setSearchFilter({ commit }, query) {
        commit('setSearchFilter', query)
    },
    setCurrentSong({ commit }, song) {
        commit('setCurrentSong', song)
    },
    setCurrentArtist({ commit }, artist) {
        commit('setCurrentArtist', artist)
    },
    cleanCurrentSong({ commit }) {
        commit('cleanCurrentSong')
    },
    cleanSearchSong({ commit }) {
        commit('cleanSearchSong')
    }
}

export const artist = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}