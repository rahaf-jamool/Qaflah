<template>
  <section class="about_section" id="About">
    <div class="about_details">
      <page-title :title="data.title" />
      <div class="content">
        <h2>publishing and graphic design</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. It is also used
          to temporarily replace text in a process called greeking, which allows
          designers to consider the form of a webpage or publication, without
          the meaning of the text influencing the design.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import PageTitle from "../global/PageTitle";
export default {
  name: "About",
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
