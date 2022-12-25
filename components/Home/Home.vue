<script>
import MainPage from "../MainPage/MainPage.vue";
import FreightTypes from "../FreightTypes/FreightTypes.vue";
export default {
  name: "home",
  components: {
    MainPage,
    FreightTypes,
  },
};
</script>

<template>
  <main>
    <MainPage />
    <FreightTypes />
  </main>
</template>

<style scoped></style>
