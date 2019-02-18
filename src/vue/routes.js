import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import Home from './components/Home.vue';
import MovieDetails from './components/MovieDetails.vue';
import MovieEdit from './components/MovieEdit.vue';

Vue.use(VueRouter);

// initialisation du router

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/movie/:id', component: MovieDetails, name: 'moviedetails' },
        { path: '/movie/:id/edit', component: MovieEdit, name: 'movieedit'}
    ] 
})

// NProgress - barre de chargement lors d'un changement de route

router.beforeResolve((to, from, next) => {
    if (to.name) {
      NProgress.start()
    }
    next()
  })
  
  router.afterEach((to, from) => {
    NProgress.done()
  })
  
export default router