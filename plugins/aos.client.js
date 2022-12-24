import Vue from "vue";
import aos from "aos";
import "aos/dist/aos.css";

Vue.component( "aos ", aos );

aos.init({
  duration: 1000,
  once: false,
  offset: 200
});
