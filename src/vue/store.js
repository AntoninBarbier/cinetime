import Vue from 'vue';
import VueX from 'vuex';
import axios from 'axios';
import router from './routes';

Vue.use(VueX);

const url = 'http://localhost:3000/api/movies/';

export const store = new VueX.Store({
    state: {
        movie: {},
        movies: []
    },
    mutations: {
        setMovies(state, data) {
            state.movies = data;
        },
        setMovie(state, data) {
            state.movie = data;
        }
    },
    actions: {
        getMoviesFromApi({commit, state}) {
            axios.get(`${url}all`).then(res => {
                commit("setMovies", res.data);
            });
        },
        getSingleMovieFromApi({commit, state}, {id}) {
            axios.get(`${url}${id}`).then(res => {
                commit("setMovie", res.data);
            })
        },
        insertMovieInApi({ dispatch }, data) {
            axios.post(`${url}`, data).then(() => {
                dispatch("getMoviesFromApi");
            })
        },
        removeMovieFromApi({dispatch}, {id}) {
            axios.delete(`${url}${id}`).then(() => {
                router.push("/");
                dispatch("getMoviesFromApi");
            })
        },
        editMovieInApi({dispatch}, data) {
            axios.put(`${url}${data._id}`, data).then(() => {
                dispatch("getSingleMovieFromApi", { id: data._id });
                dispatch("getMoviesFromApi");
                router.push(`/movie/${data._id}`)
            })
        }
    }
})