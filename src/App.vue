<template>
  <v-app>
    <v-main>
      <v-container>
        <music-notation/>
      </v-container>
    </v-main>
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
