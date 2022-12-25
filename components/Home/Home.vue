<script>
import MainSection from "../MainSection/MainSection.vue";
import FreightTypes from "../FreightTypes/FreightTypes.vue";
export default {
  name: "home",
  components: {
    MainSection,
    FreightTypes,
  },
};
</script>

<template>
  <main>
    <MainSection />
    <FreightTypes />
  </main>
</template>

<style scoped></style>
