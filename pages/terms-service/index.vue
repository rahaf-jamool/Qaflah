<template>
  <div style="padding-top:100px">
    <TermsService />
  </div>
</template>

<script>
import TermsService from "~/components/Terms-Service/TermsService.vue";

export default {
  layout: "app",
  name: "terms-service",
  components: {
    TermsService,
  },
};
</script>

<style scoped></style>
