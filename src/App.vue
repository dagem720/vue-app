<template>
  <div id="app">
    <v-app>
      <!-- <v-app-bar color="#fcb69f" src="https://i.picsum.photos/id/282/1920/200.jpg" absolute>
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
        </template>

        <v-toolbar-title class="white--text">Vuetify Vue</v-toolbar-title>

      </v-app-bar> -->

      <v-content style="margin-top: 150px;">
        <div>
          <v-card flat>
            <v-card-text class="pt-4">
              <v-container>
                <router-view />
              </v-container>
            </v-card-text>
          </v-card>
        </div>

      </v-content>
    </v-app>
  </div>
</template>

<script>
import { routes } from './router'

export default {
  name: 'App',
  components: {

  },
  data: () => ({
    routes
  })
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
