<template>
  <div>
    <v-card class="mx-auto" :color="isSaved ? '#089f38' : '#1976d2'" dark>
      <v-card-title>
        <v-icon large left> mdi-link </v-icon>
        <span class="text-h6 font-weight-light">Gather More information</span>
      </v-card-title>
      <v-card-subtitle>
        <span class="text-h6 font-weight-light">
          You have the users address, but gather some basic identity information
          to make your application more personal.
        </span>
      </v-card-subtitle>

      <v-card-text class="text-h5 font-weight-bold">
        <!-- name input field -->
        <v-text-field
          v-model="user.name"
          label="Name"
          outlined
          color="tertiary"
          required
          class="mb-3"
          name="name"
        ></v-text-field>

        <!-- email input field -->
        <v-text-field
          v-model="user.email"
          label="Email"
          outlined
          color="tertiary"
          required
          class="mb-3"
          name="email"
          type="email"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <!-- save button -->
        <v-btn elevation="2" large class="mb-3" @click="save" :disabled="isSaved" :loading="waiting">
          {{ isSaved ? "Saved" : "Save" }}
        </v-btn>
        <v-btn 
          v-if="isSaved"
          elevation="2" 
          large 
          class="mb-3" 
          @click="clear">
          clear
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { getAccount } from "../web3";
export default {
  name: "Register",
  props: {
    state: {
      type: String,
    },
  },
  data() {
    return {
      saved: false,
      waiting: true,
      user: {
        name: "",
        email: "",
      },
      snackbar: false,
      snackbarText: "",
      timeout: 2000,
    };
  },
  created() {
    this.getUser();
    window.setTimeout(async () => {
      if(this.checkSaved()) {
        this.saved = true
        this.$emit("setState", "REGISTERED");
      }
      this.waiting = false;
    }, 2000);
    
  },
  computed: {
    isConnected() {
      return this.state !== "NOT_CONNECTED";
    },
    isSaved() {
      if (this.isConnected && this.saved) {
        return this.checkSaved()
      }
      return false;
    },
  },
  methods: {
    checkSaved() {
      const account = getAccount();
      const user = JSON.parse(localStorage.getItem("user"));
      if(user) {

        const userMatches = this.user.name === user.name;
        const accountExists = account != undefined;
        const emailMatches = this.user.email === user.email;
        return userMatches && accountExists && emailMatches;
      }
      return false
    },
    getUser() {
      // if user in local storage
      // else set empty name and email
      const user = JSON.parse(localStorage.getItem("user")) || {
        name: "",
        email: "",
      };
      this.user = user;
    },
    clear() {
      localStorage.removeItem("user");
      this.user = {
        name: "",
        email: "",
      };
      this.saved = false;
    },
    async save() {
      const account = await getAccount();
      if (account) {
        const { user } = this;
        if (user.name != "" && user.email != "") {
          localStorage.setItem("user", JSON.stringify({ ...user, account }));
          this.snackbarText = "Saved";
          this.snackbar = true;

          this.$emit("setState", "REGISTERED");
          this.saved = true
        } else {
          this.snackbarText = "Please fill in all fields";
          this.snackbar = true;
        }
      } else {
        this.snackbarText = "Please connect your wallet first";
        this.snackbar = true;
      }
    },
  },
};
</script>