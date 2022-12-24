export const state = () => ({
    locales: [
      {
        name: "Arabic",
        value: "ar",
      },
      {
        name: "English",
        value: "en",
        
      },
    ],
    locale: "en",
  });

  export const getters = {
    locales: (state) => state.locales,
  };
  export const mutations = {
    // set Language
    SET_LANG(state, locale) {
      state.locale = locale;
      this.$cookies.set("lang", locale);
    },
  };
  export const actions = {};

