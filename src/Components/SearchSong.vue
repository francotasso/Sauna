<template>
  <div class="content">
    <input
      class="search-box"
      type="text"
      v-model="query"
      @keyup="searching(query)"
      placeholder="Ingrese el nombre de la canción"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      query: ""
    };
  },
  computed: {
    ...mapState("artist", ["querySong"])
  },
  methods: {
    ...mapActions("artist", ["setSearchFilter"]),
    //establece el filtro de búsqueda
    searching(q) {
      this.setSearchFilter(q);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Courgette&display=swap");
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.search-box {
  width: 450px;
  border: 1px solid #333;
  border-radius: 10px;
  height: 30px;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: rgb(27, 26, 26);
  color: #fff;
  font-family: "Courgette", cursive;
}
.search-box::placeholder {
  color: rgb(211, 216, 210);
}
.search-box:focus {
  box-shadow: none;
  outline: none;
  outline-width: 0;
}
@media screen and (max-width: 450px) {
  .search-box {
    width: 350px;
  }
}
</style>
