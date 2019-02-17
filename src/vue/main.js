import Vue from 'vue'; //librairie "vue" dans node_modules
import App from './App.vue'; //fichier app.vue local
import router from './routes.js';
import { store } from './store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#e0A000',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
});

import Home from './components/Home.vue'

Vue.component('Home', Home);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})