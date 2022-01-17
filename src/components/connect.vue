<template>
  <div>
    <v-card class="mx-auto" :color="cardColor" dark>
      <v-card-title>
        <v-icon large left> mdi-link </v-icon>
        <span class="text-h6 font-weight-light">Onboard Metamask</span>
      </v-card-title>
      <v-card-subtitle>
        <span class="text-h6 font-weight-light">
          {{subtitle}}
        </span>
      </v-card-subtitle>

      <v-card-text class="text-h5 font-weight-bold">
        <!-- list all the accounts -->
        <v-list dense v-if='accounts.length > 0 '>
          <v-list-item v-for="account in accounts" :key="account.id">
            <v-list-item-content>
              <v-list-item-title>{{ account }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <!-- add copy to clipboard button -->
              <v-btn icon @click="copyToClipboard(account)">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-btn elevation="2" large @click="handleConnect">{{ buttonText }}</v-btn>
        </v-list-item>
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
import MetaMaskOnboarding from "@metamask/onboarding";
import { setAccount } from '../web3';
const ONBOARD_TEXT = "Click here to install MetaMask!";
const CONNECT_TEXT = "Connect";
const CONNECTED_TEXT = "Connected";
const CARD_COLOR_CONNECTED = '#089f38';
const SUBTITLE_ONBOARD = "Start by installing the Metamask Extension";
const SUBTITLE_CONNECT = "Connect your wallet to the current application";
const SUBTITLE_CONNECTED = "Nice! your wallet is now connected";

export default {
  name: "Connect",
  data: () => ({
    accounts: [],
    snackbar: false,
    snackbarText: "Copied to clipboard",
    timeout: 2000,
  }),
  created() {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {     
      window.ethereum.on("accountsChanged", this.handleNewAccounts);

      // check auto connect from session storage
      const autoConnect = sessionStorage.getItem("autoConnect");

      if(autoConnect === "true") {
        this.connect();
      }

      return () => {
        window.ethereum.off("accountsChanged", this.handleNewAccounts);
      };
    }
  },
  methods: {
    handleNewAccounts(newAccounts) {
      // save account to web3 instance
      if(newAccounts.length > 0) {
        setAccount(newAccounts[0])
        this.$emit('setState', 'CONNECTED');
      }
      
      this.accounts = newAccounts;
    },
    handleConnect() {
     // set autoConnect to true in session storage
     sessionStorage.setItem("autoConnect", true);
     this.connect()
    },
    connect() {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(this.handleNewAccounts);
    },
    copyToClipboard(account) {
      this.snackbar = true;
      this.snackbarText = "Copied to clipboard: " + account;
      navigator.clipboard.writeText(account);
    },
  },
  computed: {
   subtitle() {
    // set subtitle based on buttonText
    if (this.buttonText === ONBOARD_TEXT) {
      return SUBTITLE_ONBOARD;
    } else if (this.buttonText === CONNECTED_TEXT) {
      return SUBTITLE_CONNECTED;
    } else {
      return SUBTITLE_CONNECT;
    }
   },
   cardColor() {
    if(this.buttonText === CONNECTED_TEXT) {
      return CARD_COLOR_CONNECTED;
    } else {
      return "#1976d2";
    }
   },
   buttonText() {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        if (this.accounts.length > 0) {
          // onboarding.current.stopOnboarding();
          // set card color
          return CONNECTED_TEXT;
          // setDisabled(true);
        } else {
          // setDisabled(false);
          return CONNECT_TEXT;
        }
      } else {
        return ONBOARD_TEXT;
      }
    },
  },
};
</script>

