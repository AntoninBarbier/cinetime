<template>
    <div>
        <v-btn @click="deleteMovie" class="primary darken-2">DELETE</v-btn>
        <v-btn @click="$router.push(`/movie/${$route.params.id}/edit`)" class="primary">EDIT</v-btn>
        {{ movie.name }}
    </div>
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