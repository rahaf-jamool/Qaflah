<template>
  <section class="word_section" id="Word">
    <div class="word_details">
      <page-title :title="data.title" />
      <div class="content">
        <h2 class="fw-bold">A Word from CEO:</h2>
        <ul class="dash">
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
  name: "Word",
  components: { PageTitle },
  data() {
    return {
      data: {
        title: "About us",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
