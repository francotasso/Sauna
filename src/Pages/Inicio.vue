<template>
  <div>
    <Navbar />
    <div class="artists-content">
      <h1 class="title">Listado de artistas</h1>
      <div v-for="(item, index) in items" :key="index">
        <div
          v-for="artist in item.artists"
          :key="artist.id"
          @click="exploreSongs(artist, item)"
          class="artist-box"
        >
          <div>{{ artist.name }}</div>
          <img :src="item.images[2].url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
import Navbar from "../Components/Navbar";
export default {
  name: "Inicio",
  data() {
    return {};
  },
  computed: {
    ...mapState("artist", ["items"])
  },
  components: {
    Navbar
  },
  methods: {
    ...mapActions("artist", ["getItems", "setCurrentArtist"]),
    //método para pasar a la página de canciones una vez seleccionado el artista
    exploreSongs(artist, item) {
      this.setCurrentArtist(item);
      this.$router.push({ name: "Artist", params: { id: artist.id } });
    }
  },
  created() {
    //obtiene los items cuando se crea el componente
    this.getItems();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sigmar+One&display=swap");
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
.artists-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
.title {
  font-family: "Sigmar One", cursive;
  color: rgb(235, 229, 229);
  margin-bottom: 1.5rem;
}
.artist-box {
  font-family: "Josefin Sans", sans-serif;
  height: 64px;
  width: 780px;
  background-color: rgb(39, 38, 38);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-left: 2rem;
}
.artist-box:hover {
  cursor: pointer;
  background-color: rgb(31, 30, 29);
}
@media screen and (max-width: 800px) {
  .artist-box {
    width: 600px;
  }
}
@media screen and (max-width: 650px) {
  .artist-box {
    width: 500px;
  }
}
@media screen and (max-width: 530px) {
  .artist-box {
    width: 450px;
  }
}
@media screen and (max-width: 450px) {
  .artist-box {
    width: 400px;
  }
}
</style>
