<template>
  <div>
    <Navbar />
    <div class="artists-content">
      <h1 class="title">Listado de artistas</h1>
      <div v-for="(item, index) in items" :key="index">
        <div
          v-for="artist in item.artists"
          :key="artist.id"
          @click="exploreSongs(artist.id)"
          class="artist-box"
        >{{artist.name}}</div>
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
    ...mapActions("artist", ["getItems"]),
    //método para pasar a la página de canciones una vez seleccionado el artista
    exploreSongs(id) {
      this.$router.push({ name: "Artist", params: { id: id } });
    }
  },
  async created() {
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
  color: #333;
  margin-bottom: 1.5rem;
}
.artist-box {
  font-family: "Josefin Sans", sans-serif;
  height: 50px;
  width: 300px;
  background-color: rgb(230, 185, 132);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.artist-box:hover {
  cursor: pointer;
  background-color: rgb(206, 157, 102);
}
</style>
