<template>
  <div class="content">
    <div v-if="currentSong" class="content__player">
      <div class="title-song">{{ currentSong.name }}</div>
      <div>
        <audio :src="currentSong.preview_url" controls></audio>
      </div>
    </div>
    <div v-else class="content__player">
      <div class="title-song">Seleccione una canción</div>
      <div class="audio-player">
        <audio controls></audio>
      </div>
    </div>
  </div>
</template>

<script>
//<img src="https://img.icons8.com/ios/50/000000/pause.png">
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
      return song != null ? song.name : "Seleccione una canción";
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
}
.content__player {
  background-color: rgb(32, 30, 30);
  display: flex;
  justify-content: space-around;
  width: 800px;
  padding: 1rem;
  color: #fff;
  border-radius: 3rem;
}
.title-song {
  padding-top: 0.5rem;
}
@media screen and (max-width: 550px) {
  .content__player {
    flex-direction: column;
    width: 100%;
  }
  .title-song {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 18px;
  }
  .audio-player {
    display: flex;
    justify-content: center;
  }
}
</style>
