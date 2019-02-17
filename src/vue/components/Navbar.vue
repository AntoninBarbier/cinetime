<template>
    <nav>
        <v-toolbar flat app dark class="darkgrey" height="100">
            <!-- <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon> -->
            <v-toolbar-title>
            <router-link :to="{ name: 'Home' }">
                <span class="font-weight-light">Cine</span><span>Time</span>
            </router-link>
            </v-toolbar-title>
                <v-spacer></v-spacer>
                <div>
                    <v-btn class="" fab @click="$router.push('/')"><v-icon>home</v-icon></v-btn>
                </div>
        </v-toolbar>
        <!-- <v-navigation-drawer app v-model="drawer">
        </v-navigation-drawer> -->
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
}
</script>

<style>

#nprogress .bar {
  background: #fbc02d;
  height: 5px;
}

#nprogress .spinner-icon {
  border-top-color: #fbc02d;
  border-left-color: orange;
}

a {
    text-decoration: none;
    color: white !important;
}

</style>