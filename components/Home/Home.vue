<script>
import MainPage from "../MainPage/MainPage.vue";
import FreightTypes from "../FreightTypes/FreightTypes.vue";
import BriefPage from "../BriefPage/BriefPage.vue";
import CompaniesServices from "../CompaniesServices/CompaniesServices.vue";
export default {
  name: "home",
  components: {
    MainPage,
    FreightTypes,
    BriefPage,
    CompaniesServices,
  },
};
</script>

<template>
  <main>
    <MainPage />
    <FreightTypes />
    <BriefPage />
    <CompaniesServices />
  </main>
</template>

<style scoped></style>
