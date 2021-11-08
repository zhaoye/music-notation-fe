<template>
  <v-app>
    <v-navigation-drawer app>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <music-notation/>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import MusicNotation from './components/MusicNotation.vue'

export default {
  name: 'App',

  components: {
    MusicNotation
  },

  data: () => ({
    //
  }),
}
</script>
