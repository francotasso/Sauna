<template>
  <div>
    <div class="container">
      <h1>Página de inicio</h1>
      <SampleComponent />
    </div>
  </div>
</template>

<script>
import SampleComponent from "../Components/SampleComponent";
export default {
  name: "Inicio",
  data() {
    return {};
  },
  components: {
    SampleComponent
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
