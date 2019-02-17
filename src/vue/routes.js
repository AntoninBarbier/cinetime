import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import Home from './components/Home.vue';
import MovieDetails from './components/MovieDetails.vue';
import MovieEdit from './components/MovieEdit.vue';
import Test from './components/Test.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/movie/:id', component: MovieDetails, name: 'moviedetails' },
        //component: () => import('./components/moviedetails.vue')
        { path: '/movie/:id/edit', component: MovieEdit, name: 'movieedit'},
        { path: '/test', component: Test, name: 'Test'}
    ] 
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
  })
  
  router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
  })

export default router