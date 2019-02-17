<template>
    <v-container>
        <v-form>
            <h2>Film</h2>
            <v-text-field label="Titre" v-model="movie.name" required></v-text-field>
            <v-text-field label="Année de sortie" v-model="movie.releaseYear"></v-text-field>
            <h2>Réalisateur</h2>
            <v-text-field label="Nom" v-model="movie.directorName"></v-text-field>
            <v-text-field label="Nationalité" v-model="movie.directorNationality"></v-text-field>
            <v-text-field label="Date de naissance" v-model="movie.directorBirthdate"></v-text-field>
            <v-text-field label="Langue" v-model="movie.language"></v-text-field>
            <v-text-field label="Genre" v-model="movie.genre"></v-text-field>
            <v-rating v-model="movie.rating"></v-rating>
            <v-btn @click="updateMovie">Modfier le film</v-btn>
        </v-form>
    </v-container>
</template>

<script>

export default {
    name: 'MovieEdition',
    computed: {
        movie() {
            return this.$store.state.movie;
        }
    },
    methods: {
        updateMovie() {
            this.$store.dispatch("editMovieInApi", this.movie);
        }
    },
    mounted() {
        this.$store.dispatch("getSingleMovieFromApi", { id: this.$route.params.id });
    }
}

</script>