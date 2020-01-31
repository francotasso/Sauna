<template>
  <div>
    <Navbar />
    <SearchSong />
    <div v-for="(song, index) in songsFiltered" :key="index" class="songs-content">
      <div v-if="song.preview_url" class="song-box" @click="setCurrentSong(song.name)">{{song.name}}</div>
    </div>
    <PlayerMusic />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    ...mapGetters("artist", ["songsFiltered"])
  },
  methods: {
    ...mapActions("artist", ["getSongs", "setCurrentSong", "cleanCurrentSong"])
  },
  created() {
    //obtiene las canciones por id de artista
    this.getSongs(this.id);
  },
  beforeDestroy() {
    //limpia el campo de la canción actual para que cuando se vuelva a entrar en las canciones de otro artista no se quede grabado la última canción seleccionada
    this.cleanCurrentSong();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
.songs-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.song-box {
  font-family: "Josefin Sans", sans-serif;
  height: 25px;
  width: 400px;
  background-color: rgb(82, 175, 82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}
.song-box:hover {
  cursor: pointer;
  background-color: rgb(64, 146, 64);
}
</style>