require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

import Vuelidate from 'vuelidate'

// import VueSlickCarousel from '@types/slick-carousel'
// const VueSlickCarousel = require('vue-slick-carousel');

// import VueSlickCarousel from 'vue-slick-carousel'


// import carousel from 'vue-owl-carousel'

import router from './router/index.js'
import store from './store/index.js';
import App from './App.vue'
// import VueSplide from '@splidejs/vue-splide';

// import CookieLaw from 'vue-cookie-law'

// import gsap from "gsap";
//   import { ScrollTrigger } from 'gsap/ScrollTrigger'
//   gsap.registerPlugin(ScrollTrigger);

// import VueEllipseProgress from 'vue-ellipse-progress';
// import RadialProgressBar from 'vue-radial-progress'

Vue.use(VueRouter)
Vue.use(Vuelidate)
// Vue.use(CookieLaw)
// Vue.use(VueSlickCarousel)

// Vue.use(VueSplide)
// Vue.use(VueEllipseProgress);
// Vue.use(RadialProgressBar);

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
});