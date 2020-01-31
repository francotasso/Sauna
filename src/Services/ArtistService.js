import axios from 'axios';

export const artistService = {
    getItems,
    getSongs
}

function getItems() {
    let url = "https://platzi-music-api.now.sh/browse/new-releases"
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(new Error(`Error ${error}`))
            })
    })
}

function getSongs(artistId) {
    let url = `https://platzi-music-api.now.sh/artists/${artistId}/top-tracks?country=PE`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(new Error(`Error ${error}`))
            })
    })
}