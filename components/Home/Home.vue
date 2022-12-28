<script>
import MainPage from "../MainPage/MainPage.vue";
import FreightTypes from "../FreightTypes/FreightTypes.vue";
import BriefPage from "../BriefPage/BriefPage.vue";
import CompaniesDeliveries from "../CompaniesDeliveries/CompaniesDeliveries.vue";
import SpecialOffers from "../SpecialOffers/SpecialOffers.vue";
import MediaCenter from "../MediaCenter/MediaCenter.vue";
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
