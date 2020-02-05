<template>
  <div class="content">
    <span @click="goToArtists" title="Ir a inicio" class="title">Mortify</span>
    <span class="author margin-y">(by Franco Tasso)</span>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    goToArtists() {
      this.$router.push({ name: "Artists" });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fredoka+One&display=swap");
.content {
  background-color: #191414;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  align-items: center;
}
.title {
  cursor: pointer;
  font-family: "Fredoka One", cursive;
  color: #1db954;
  font-size: 30px;
}
.author {
  color: rgb(160, 153, 153);
  font-size: 12px;
}
.margin-y {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
