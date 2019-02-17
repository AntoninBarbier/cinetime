<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn fab light class="primary" slot="activator" fixed bottom><v-icon>add</v-icon></v-btn>
        <v-card>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Name" v-model="newMovie.name"></v-text-field>
                    <v-text-field label="Année de sortie" v-model="newMovie.releaseYear"></v-text-field>
                    <v-text-field label="Langue" v-model="newMovie.language"></v-text-field>
                    <v-text-field label="Nom réalisateur" v-model="newMovie.directorName"></v-text-field>
                    <v-text-field label="Nationalité du réalisateur" v-model="newMovie.directorNationality"></v-text-field>
                    <v-text-field label="Date de naissance du réalisateur" v-model="newMovie.directorBirthdate"></v-text-field>
                    <v-text-field label="Genre" v-model="newMovie.genre"></v-text-field>
                    <v-rating v-model="newMovie.rating"></v-rating>

                    <v-container fluid>
				        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
					    <img :src="imageUrl" height="150" v-if="imageUrl"/>
					    <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                            <input
                                type="file"
                                style="display: none"
                                ref="image"
                                accept="image/*"
                                @change="onFilePicked"
                            >
				        </v-flex>
                    </v-container>

                    <v-card-actions>
                        <v-btn text--black color="primary" @click="addMovie">Add movie</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

// import ajaxApi from '../../ajax.js';

import axios from 'axios';

export default {
    name: 'MovieAdd',
    data() {
        return {
            newMovie: {
                name: '',
                rating: 3,
                releaseYear: '',
                language: '',
                directorName: '',
                directorNationality: '',
                directorBirthdate: '',
                genre: '',
            },
            dialog: false,
            imageName: '',
		    imageUrl: '',
		    imageFile: ''
        }
    },
    methods: {

        pickFile () {
            this.$refs.image.click()
        },
		
		onFilePicked(e) {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
                    this.imageFile = files[0]
                    console.log(this.imageFile); // this is an image file that can be sent to server...
				})
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
        },
        addMovie() {
            this.$store.dispatch('insertMovieInApi', this.newMovie).then(() => {
                this.newMovie = {};
                this.dialog = false;
            });
        }
    }
}

</script>