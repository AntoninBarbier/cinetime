<template>
    <v-container px-0>
            <select v-model="search.field">
                <option value="name">Titre</option>
                <option value="releaseYear">Année</option>
                <option value="genre">Genre</option>
                <option value="directorName">Réalisateur</option>
            </select>
            
                <input type="text" v-model="search.value" placeholder="Search Movie...">
                <div>
                    <movie-item v-for="(movie, index) in resultMovies" :key="movie._id" :index="index" :movie="movie"></movie-item>
                </div>
            <movie-add/>
    </v-container>
</template> 

<script>

import MovieAdd from './MovieAdd.vue'
import MovieItem from './MovieItem.vue'

import {mapState} from 'vuex';

export default {
    name: 'Home',
    components: { MovieAdd, MovieItem },
    data() {
        return {
            search: {
                field: 'name',
                value: ''
            },
        }
    },
    computed: {
        ...mapState({
            movies: state => state.movies
        }),
        filteredMovies() {
            if(this.search.field == 'name') {
                return this.movies.filter(movie => {
                    return movie.name.toLowerCase().includes(this.search.value.toLowerCase())
                })
            }
            if(this.search.field == 'releaseYear') {
                return this.movies.filter(movie => {
                    return movie.releaseYear.toLowerCase().includes(this.search.value.toLowerCase())
                })
            }
            if(this.search.field == 'directorName') {
                return this.movies.filter(movie => {
                    return movie.directorName.toLowerCase().includes(this.search.value.toLowerCase())
                })
            }
            if(this.search.field == 'genre') {
                return this.movies.filter(movie => {
                    return movie.genre.toLowerCase().includes(this.search.value.toLowerCase())
                }) 
            }
        },
        resultMovies() {
            return (this.search.value !== '') ? this.filteredMovies : this.movies;
        }
  },
  mounted() {
      if(!this.movies || this.movies.length === 0)
        this.$store.dispatch("getMoviesFromApi");
  }
}

</script>