<template>
  <div>
    <v-card class="mx-auto" :color="(isLoggedIn) ? '#089f38' : '#1976d2'" dark>
      <v-card-title>
        <v-icon large left> mdi-link </v-icon>
        <span class="text-h6 font-weight-light">Login</span>
      </v-card-title>
      <v-card-subtitle>
        <span class="text-h6 font-weight-light">
          {{ subtitle }}
        </span>
      </v-card-subtitle>

      <v-card-text class="text-h5 font-weight-bold"> </v-card-text>

      <v-card-actions>
        <!-- login button -->
        <v-btn
          elevation="2"
          large
          class="mb-3"
          @click="handleLogin"
          :loading="waiting"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { isLoggedIn, login } from "../web3";
export default {
  name: "Login",
  props: {
    state: {
      type: String,
    },
  },
  data() {
    return {
      loggedIn: false,
      waiting: true,
    };
  },
  async created() {
    this.getUser();
    window.setTimeout(async () => {
      if (this.isRegistered) {
        this.loggedIn = await isLoggedIn();
        console.log(this.loggedIn);
        if (this.loggedIn) {
          this.$emit("setState", "LOGGED_IN");
        }
      }
      this.waiting = false;
    }, 3000);
  },
  computed: {
    isRegistered() {
      return this.state === "REGISTERED";
    },
    isLoggedIn() {
      return this.state === "LOGGED_IN";
    },
    subtitle() {
      if (this.waiting) {
        return "Checking login status...";
      } else {
        if (this.loggedIn) {
          return "You are logged in!";
        } else {
          return "Sign a random challenge with your wallet and let the system verify it";
        }
      }
    },
  },
  methods: {
    getUser() {
      // if user in local storage
      // else set empty name and email
      const user = JSON.parse(localStorage.getItem("user")) || {
        name: "",
        email: "",
      };
      this.user = user;
      // this.saved = true;
    },
    async handleLogin() {
      if (this.isRegistered) {
        await login();
        this.loggedIn = await isLoggedIn();
        this.$emit("setState", "LOGGED_IN");
      }
    },
  },
};
</script>