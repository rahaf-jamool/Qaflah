<template>
  <div>
    <Header />
      <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>
