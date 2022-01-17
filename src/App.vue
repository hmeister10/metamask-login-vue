<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
        <span class="headline">Metamask Login Flow</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <LoginFlow/>
    </v-main>
  </v-app>
</template>

<script>
import LoginFlow from './components/LoginFlow';

export default {
  name: 'App',

  components: {
    LoginFlow,
  },

  data: () => ({
    //
  }),
};
</script>
