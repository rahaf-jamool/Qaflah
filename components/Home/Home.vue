<script>
import MainPage from "./MainPage.vue";
import FreightTypes from "./FreightTypes.vue";
import BriefPage from "./BriefPage.vue";
import CompaniesDeliveries from "../CompaniesDeliveries/CompaniesDeliveries.vue";
import SpecialOffers from "./SpecialOffers.vue";
import MediaCenter from "./MediaCenter.vue";
export default {
  name: "home",
  components: {
    MainPage,
    FreightTypes,
    BriefPage,
    CompaniesDeliveries,
    SpecialOffers,
    MediaCenter,
  },
};
</script>

<template>
  <main>
    <MainPage />
    <FreightTypes />
    <BriefPage />
    <CompaniesDeliveries />
    <SpecialOffers />
    <MediaCenter />
  </main>
</template>

<style scoped></style>
