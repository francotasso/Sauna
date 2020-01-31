<template>
  <div>
    <Navbar />
    <SearchSong v-if="songsFiltered.length > 0 || querySong != ''" />
    <div class="content">
      <div class="artist-content">
        <img
          :src="currentArtist.images[1].url"
          :width="currentArtist.images[1].width"
          :height="currentArtist.images[1].height"
        />
        <div class="artist-info">
          <p class="margin-info">
            Artista: {{ currentArtist.artists[0].name }}
          </p>
          <p class="margin-info">
            Último lanzamiento: {{ currentArtist.release_date | switchFormat }}
          </p>
          <p class="margin-info">
            Total de canciones: {{ songsFiltered.length }}
          </p>
          <p class="margin-info">
            Disponible a la venta en
            {{ currentArtist.available_markets.length }} países
          </p>
        </div>
      </div>
      <div class="songs-content">
        <div
          v-for="(song, index) in songsFiltered"
          :key="index"
          class="song-content"
        >
          <div class="song-box" @click="setCurrentSong(song)">
            <div>{{ song.name }}</div>
            <div>
              {{ song.album.release_date | switchFormat }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="songsFiltered.length > 0"
      :class="songsFiltered.length < 11 ? 'sticky' : ''"
    >
      <PlayerMusic />
    </div>
    <div v-if="songsFiltered.length == 0" class="no-available-songs">
      <p>No hay canciones disponibles</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Navbar from "../Components/Navbar";
import SearchSong from "../Components/SearchSong";
import PlayerMusic from "../Components/PlayerMusic";
export default {
  name: "Artist",
  props: ["id"],
  data() {
    return {};
  },
  components: {
    Navbar,
    SearchSong,
    PlayerMusic
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
.artist-content {
  display: flex;
  color: #fff;
  flex-direction: column;
  font-family: "Josefin Sans", sans-serif;
}
.artist-info {
  padding: 1.5rem 1rem;
}
.song-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.song-box {
  font-family: "Josefin Sans", sans-serif;
  height: 25px;
  width: 780px;
  background-color: rgb(39, 38, 38);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
}
.song-box:hover {
  cursor: pointer;
  background-color: rgb(31, 30, 29);
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
.margin-info {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
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
    margin-left: 1.5rem;
  }
  .song-box {
    width: 400px;
    justify-content: space-around;
  }
  .artist-content {
    flex-direction: column;
    align-items: center;
  }
  .sticky {
    right: 9%;
  }
}
</style>
