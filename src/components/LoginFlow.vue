<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" lg="4">
            <Connect :state="state" @setState='setState' />
          </v-col>

          <v-col cols="12" lg="4">
            <Register :state="state" @setState='setState'/>
          </v-col>

          <v-col cols="12" lg="4">
            <Login :state="state" @setState='setState'/>
          </v-col>
        </v-row>
        <v-row v-if="state === 'LOGIN'">
          <v-btn elevation="2" large class="mb-3" @click="restartLogin">
            Restart
          </v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Connect from "./connect.vue";
import Login from "./login.vue";
import Register from "./register.vue";

export default {
  name: "LoginFlow",
  components: {
    Connect,
    Login,
    Register,
  },
  data: () => ({
    state: "NOT_CONNECTED",
  }),
  methods:{
    setState( state) {
      this.state = state;
    },
    restartLogin() {
      // clear local storage
      localStorage.removeItem("user");
      localStorage.removeItem("autoConnect");
      
      // clear session storage
      sessionStorage.removeItem("signature");
      sessionStorage.removeItem("nonce");

      this.state = "NOT_CONNECTED";

    },
  }
};
</script>
