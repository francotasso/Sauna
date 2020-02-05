<template>
  <div class="content">
    <div v-if="currentSong" class="content__player">
      <div class="title-song">{{currentArtist.artists[0].name}} - {{ currentSong.name }}</div>
      <div class="audio-player">
        <audio :src="currentSong.preview_url" controls></audio>
      </div>
    </div>
    <div v-else class="content__player">
      <div class="title-song">
        <span>Seleccione una canción</span>
      </div>
      <div class="audio-player">
        <audio controls class="audio"></audio>
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
    ...mapState("artist", ["currentSong", "currentArtist"])
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 100%;
}
.content__player {
  background-color: #191414;
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #fff;
}
.title-song {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
.audio-player {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
@media screen and (max-width: 550px) {
  .content__player {
    flex-direction: column;
    width: 100%;
  }
  .title-song {
    text-align: center;
    font-size: 18px;
  }
  .audio-player {
    display: flex;
    justify-content: center;
  }
}
</style>
