<template>
    <v-container>
        <v-btn @click="deleteMovie" class="primary darken-2">DELETE</v-btn>
        <v-btn @click="$router.push(`/movie/${$route.params.id}/edit`)" class="primary">EDIT</v-btn>
        <v-container>
            <v-layout>
                <v-flex xs5 ma-3>
                    <v-img v-if="movie.posterURL" :src="`${movie.posterURL}`"></v-img>
                    <v-img v-else src="./src/static/noposter.jpg"></v-img>
                </v-flex>
                <v-flex xs7 mt-4 ml-3>
                    <h1 class="display-2 mb-2">{{ movie.name }}</h1>
                    <span>({{ movie.releaseYear }})</span>
                    <div>{{ movie.directorName }}</div>
                    <div class="ml-3">{{ movie.directorNationality }}
                    {{ movie.directorbirthDate }}</div>
                    {{ movie.genre }}
                    {{ movie. language }}
                    <v-rating v-model="movie.rating"></v-rating>
                    <div v-if="movie.posterURL" class="caption">(URL du poster: <em>{{movie.posterURL }}</em>)</div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>

import {mapState} from 'vuex';

export default {
    name: 'MovieDetails',
    computed: {
        movie() {
            return this.$store.state.movie;
        }
    },
    methods: {
        deleteMovie() {
            console.log(this.movie._id);
            this.$store.dispatch("removeMovieFromApi", { id: this.movie._id });
        }
    },
    mounted() {
        this.$store.dispatch("getSingleMovieFromApi", { id: this.$route.params.id });
    }
}

</script>