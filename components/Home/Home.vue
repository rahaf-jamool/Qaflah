<script>
import MainPage from "../MainPage/MainPage.vue";
import FreightTypes from "../FreightTypes/FreightTypes.vue";
import BriefPage from "../BriefPage/BriefPage.vue";
import CompaniesServices from "../CompaniesServices/CompaniesServices.vue";
import Gallery from "../Media/Gallery/Gallery.vue";
export default {
  name: "home",
  components: {
    MainPage,
    FreightTypes,
    BriefPage,
    CompaniesServices,
    Gallery,
  },
};
</script>

<template>
  <main>
    <MainPage />
    <FreightTypes />
    <BriefPage />
    <CompaniesServices />
    <Gallery />
  </main>
</template>

<style scoped></style>
