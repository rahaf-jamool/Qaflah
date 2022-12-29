<script>
import About from "../components/About/About.vue";
export default {
  layout: "app",
  name: "index",
  components: {
    About,
  },
};
</script>
<template>
  <div style="padding-top: 100px;">
    <About />
  </div>
</template>

<style scoped></style>
