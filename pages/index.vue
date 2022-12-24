<script>
import Home from "../components/Home/Home";
import SectionOne from "../components/SectionOne/SectionOne.vue";
import SectionTwo from "../components/SectionTwo/SectionTwo.vue";
export default {
  layout: "app",
  name: "index",
  components: {
    Home,
    SectionOne,
    SectionTwo,
  },
};
</script>
<template>
  <div>
    <SectionOne />
    <SectionTwo />
  </div>
</template>

<style scoped></style>
