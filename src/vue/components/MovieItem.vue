<template>
    <v-flex xs12 sm6 md3>
        <v-card id="moviecard" class="ma-3 text-xs-center grey lighten-4" @click="$router.push({ path: `/movie/${movie._id}` })">
            <v-reponsive>
                <v-img v-if="movie.posterURL" :src="`${movie.posterURL}`"></v-img>
                <v-img v-else src="./src/static/noposter.jpg"></v-img>
            </v-reponsive>
            <v-card-text>
            <div class="subheading mb-1">{{ movie.name }}</div>
            <span v-if="movie.releaseYear">{{ movie.releaseYear }} -<em> {{ movie.directorName }}</em></span>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['movie'],
}
</script>