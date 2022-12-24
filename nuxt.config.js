export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Qaflah",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      },
      { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      },
      { src: "https://unpkg.com/aos@2.3.1/dist/aos.js" },
      {
        src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",
      },
    ],
  },

  ssr: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vue-awesome-swiper", mode: "client" },
    { src: "~/plugins/v-video-embed", mode: "client" },
    { src: "~/plugins/words", mode: "client" },
    { src: "~/plugins/router", mode: "client" },
    { src: "~/plugins/owl.js", mode: "client" },
    { src: "~/plugins/lightbox.js", mode: "client" },
    { src: "~/plugins/aos.client.js", mode: "client" },
    { src: "~/plugins/vue-i18n.js" },
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/public/assets/css/main.css",
    "~/public/assets/scss/main.scss",
    "swiper/css/swiper.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  //fontawesome start
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    // component: 'fa',
    icons: {
      // solid: ['faSearch','faAnalytics'],
      // brands: ['faTwitter','faFacebook','faPinterestP','faInstagram']
      solid: true,
      regular: true,
      brands: true,
    },
  },
  //fontawesome end
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Simple usage
    "cookie-universal-nuxt",

    // With options
    ["cookie-universal-nuxt", { alias: "cookiz" }],
  ],
  router: {
    middleware: ["i18n"],
    // Run the middleware/user-agent.js on every page
    //middleware: 'check-token'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
