<template>
  <div>footer</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  data: (vm) => ({
    selectedItem: "en",
  }),
  computed: {
    ...mapGetters ({
      locales: 'locales',
      locale : 'locale',
    })
  },
  methods: {
    changeLange() {
      let lang = this.selectedItem;
      console.log(lang);
      this.$store.commit("SET_LANG",{lang});
      this.$i18n.locale = lang;
    },
  },
};
</script>
