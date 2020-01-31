<template>
  <div class="content">
    <div class="content__player">
      <div class="title-song">{{currentSong | noEmpty}}</div>
      <div>
        <img src="https://img.icons8.com/ios/50/000000/play-button-circled.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("artist", ["currentSong"])
  },
  filters: {
    noEmpty(song) {
      return song != "" ? song : "Seleccione una canción";
    }
  }
};
</script>

<style scoped>
.content {
  color: #333;
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  font-size: 30px;
  font-weight: 50px;
}
.content__player {
  background-color: rgb(201, 196, 196);
  display: flex;
  justify-content: space-around;
  width: 800px;
  padding: 1rem;
}
.title-song {
  padding-top: 0.5rem;
}
</style>