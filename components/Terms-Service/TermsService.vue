<template>
  <section class="terms_section" id="Terms">
    <div class="terms_details">
      <page-title />
      <div class="content">
        <h2 class="fw-bold">Terms of Service:</h2>
        <ul class="dash">
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            fugiat.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            fugiat.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            fugiat.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import PageTitle from "../global/PageTitle";
export default {
  name: "TermsService",
  components: { PageTitle },
  data() {
    return {
      data: {},
    };
  },
};
</script>
