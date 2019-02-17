<template>
    <v-card flat class="yellow darken-2 ml-3 mb-3 mt-3 mr-3" @click="$router.push({ path: `/movie/${movie._id}` })">
        {{ movie. name }}
        {{ movie.directorName }}
    </v-card>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['movie']
}
</script>