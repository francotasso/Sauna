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
          <div class="artist-name">{{ artist.name }}</div>
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
  async created() {
    //obtiene los items cuando se crea el componente
    await this.getItems();
    console.log(this.items);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
.artists-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-family: "Questrial", sans-serif;
  color: rgb(235, 229, 229);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.artist-box {
  font-family: "Josefin Sans", sans-serif;
  height: 64px;
  width: 780px;
  background-color: rgb(26, 26, 26);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.artist-box:hover {
  cursor: pointer;
  background-color: #1db954;
}
.artist-name {
  margin-left: 1rem;
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
