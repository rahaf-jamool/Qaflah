<template class="myCompaniesDeliveries">
  <div class="companiesservices">
    <CompaniesServices />
    <DeliveryServices />
  </div>
</template>

<script>
import "../../public/assets/css/CompaniesDeliveries.css";
import "../CompaniesServices/CompaniesServices.vue";
import "../DeliveryServices/DeliveryServices.vue";

export default {
  name: "companiesservices",
};
</script>

<style scoped></style>
