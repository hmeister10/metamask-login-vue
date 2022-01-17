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
        <v-row v-if="isLoggedIn">
          <v-col cols="12" lg="8">
            <v-card>
              <v-card-title>
                <span class="text-h5 font-weight-bold">
                  Welcome, {{ user.name }}
                </span>
              </v-card-title>
              <v-card-text>
                <span class="text-h6">
                  Email: {{ user.email }}
                </span>
              </v-card-text>
              <v-card-actions>
                <v-btn elevation="2" large class="mb-3" @click="logout">
                  Logout
                </v-btn>
                <v-btn elevation="2" large class="mb-3" @click="restartLogin">
                  Restart Journey
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Connect from "./connect.vue";
import Login from "./login.vue";
import Register from "./register.vue";
import { getAccount } from "../web3";

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
  computed: {
    isLoggedIn() {
      return this.state === "LOGGED_IN";
    },
    user() {
      // if loggedIn  return user
      if(this.isLoggedIn) {
        
        // get user from localstorage
        const user = JSON.parse(localStorage.getItem("user"));

        // get account
        const account = getAccount();

        return {
          name: user.name,
          email: user.email,
          account: account,
        };
      
      }
      // else return null
      return null;
    },
  },
  methods:{
    setState( state) {
      console.log("Setting State to " + state)
      this.state = state;
    },
    restartLogin() {
      // clear local storage
      localStorage.removeItem("user");

      // clear session storage
      sessionStorage.removeItem("autoConnect");
      sessionStorage.removeItem("signature");
      sessionStorage.removeItem("nonce");

      this.state = "NOT_CONNECTED";

    },
    logout() {

      // clear session storage
      sessionStorage.removeItem("signature");
      sessionStorage.removeItem("nonce");

      this.state = "REGISTERED";
    },
  }
};
</script>
