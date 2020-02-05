<template>
  <div>
    <Navbar />
    <SearchSong v-if="songsFiltered.length > 0 || querySong != ''" />
    <div class="content" :class="songsFiltered.length == 0 ? 'margin-info' : ''">
      <div class="artist-content">
        <img
          :src="currentArtist.images[1].url"
          :width="currentArtist.images[1].width"
          :height="currentArtist.images[1].height"
        />
        <div class="artist-info">
          <hr />
          <span class="margin-x">Artista: {{ currentArtist.artists[0].name }}</span>
          <hr />
          <span class="margin-x">Total de canciones: {{ songsFiltered.length }}</span>
          <hr />
          <span class="margin-x">Último lanzamiento: {{ currentArtist.release_date | switchFormat }}</span>
          <hr />
          <span class="margin-x">
            Disponible a la venta en
            {{ currentArtist.available_markets.length }} países
          </span>
          <hr />
        </div>
      </div>
      <div class="side-content">
        <div class="songs-content">
          <div v-for="(song, index) in songsFiltered" :key="index" class="song-content">
            <div class="song-box" @click="setCurrentSong(song)">
              <div class="song__name">{{ song.name }}</div>
              <div class="song__release-date">{{ song.album.release_date | switchFormat }}</div>
            </div>
          </div>
        </div>
        <div v-if="songsFiltered.length > 0">
          <MusicPlayer />
        </div>
        <div v-if="songsFiltered.length == 0" class="no-available-songs">
          <p>No hay canciones disponibles</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Navbar from "../Components/Navbar";
import SearchSong from "../Components/SearchSong";
import MusicPlayer from "../Components/MusicPlayer";
export default {
  name: "Artist",
  props: ["id"],
  data() {
    return {};
  },
  components: {
    Navbar,
    SearchSong,
    MusicPlayer
  },
  computed: {
    ...mapState("artist", ["querySong", "currentArtist"]),
    ...mapGetters("artist", ["songsFiltered"])
  },
  filters: {
    switchFormat(date) {
      return date
        .split("-")
        .reverse()
        .join("-");
    }
  },
  methods: {
    ...mapActions("artist", [
      "getSongs",
      "setCurrentSong",
      "cleanCurrentSong",
      "cleanSearchSong"
    ])
  },
  created() {
    //obtiene las canciones por id de artista
    this.getSongs(this.id);
  },
  beforeDestroy() {
    //limpia el campo de la canción actual para que cuando se vuelva a entrar en las canciones de otro artista no se quede grabado la última canción seleccionada
    this.cleanCurrentSong();
    //limpia el campo de búsqueda de canción
    this.cleanSearchSong();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
.content {
  display: flex;
  justify-content: center;
}
.side-content {
  display: flex;
  flex-direction: column;
}
.artist-content {
  display: flex;
  color: #fff;
  flex-direction: column;
  font-family: "Josefin Sans", sans-serif;
}
.artist-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 250px;
}
.margin-x {
  margin-left: 1rem;
  margin-right: 1rem;
}
.songs-content {
  overflow-y: scroll;
  height: 450px;
}
.songs-content::-webkit-scrollbar {
  width: 6px;
}
.songs-content::-webkit-scrollbar-thumb {
  background-color: rgb(31, 31, 31);
  border-radius: 4px;
}
.songs-content::-webkit-scrollbar-track {
  border-radius: 4px;
}
.songs-content::-webkit-scrollbar-track:hover,
.songs-content::-webkit-scrollbar-track:active {
  background-color: rgb(44, 43, 43);
}
.song-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.song-box {
  font-family: "Josefin Sans", sans-serif;
  width: 815px;
  background-color: rgb(26, 26, 26);
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.song-box:hover {
  cursor: pointer;
  background-color: rgb(31, 30, 29);
}
.song__name {
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.song__release-date {
  margin-right: 1rem;
  margin-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.sticky {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}
.no-available-songs {
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  margin: 2rem 4rem;
  color: #fff;
}
@media screen and (max-width: 1200px) {
  .content {
    flex-direction: column;
    flex-wrap: wrap;
  }
  .artist-content {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  }
}
@media screen and (max-width: 900px) {
  .song-box {
    width: 600px;
  }
}
@media screen and (max-width: 700px) {
  .song-box {
    width: 500px;
  }
}
@media screen and (max-width: 600px) {
  .song-box {
    width: 450px;
  }
}
@media screen and (max-width: 550px) {
  .sticky {
    margin-top: 1rem;
    position: relative;
  }
  .song-box {
    width: 400px;
  }
  .artist-content {
    flex-direction: column;
    align-items: center;
  }
}
</style>
