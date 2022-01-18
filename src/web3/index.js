import Web3 from "web3";
export let web3 = null;
if(window.web3){
  web3 = new Web3(window.web3.currentProvider);
}
export let account = null;
export let isAuthenticated = false;
export let state = "NOT_CONNECTED"

export const setState = (newState) => {
  state = newState;
}

export const isLoggedIn = async () => {
  const existingSign = window.sessionStorage.getItem('signature')
  if (existingSign && account) {
      // metamask is logged in
      console.log('signature exists')
      try {
        // get nonce from sessionStorage
        const nonce = window.sessionStorage.getItem('nonce')

        console.log("Existing sign in session, validating user...",)
        const isVerified = await verifySignature(nonce, existingSign)

        console.log("Existing sign is for valid user: ", isVerified)
        return true
      
      } catch(e) {
          console.log(e)
          throw(e)
      }
  } else {
      // metamask is not logged in
      console.log('metamask is not logged in')
      return false
  }
}

export const getAccount = async () => {
  return account
}

export const setAccount = async (newAccount) => {
  setState("CONNECTED")
  account = newAccount;
}

export const init = async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      const accountsQuery = await window.ethereum.send('eth_requestAccounts');
      
      // Accounts now exposed
      account = accountsQuery.result[0];
      isAuthenticated = true;
    
    } catch (error) {
      console.log({error})
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use Mist/MetaMask's provider.
    const web3 = window.web3;
    console.log("Injected web3 detected.");
    this.web3 = web3;
  }
  // Fallback to localhost; use dev console port by default...
  else {
    const provider = new Web3.providers.HttpProvider(
      "http://127.0.0.1:8545"
    );
    const web3 = new Web3(provider);
    console.log("No web3 instance injected, using Local web3.");
    this.web3 = web3;
  }
}

export const sign = async (message) => {
  console.log("Signing message...")
  return web3.eth.personal.sign(message, account, ()=> {console.log("signed")});
}

export const verifySignature = async (nonce, signature) => {
  
  // use the nonce and signature to recover the public address
  const signAddress = await web3.eth.accounts.recover(nonce, signature); 
  
  // compare the recovered address to the account address
  return account.toLowerCase() == signAddress.toLowerCase()
}

export const login = async () => {
  const nonce = generateNonce()
  const signature = await sign(nonce)
  await verifySignature(nonce, signature)
  
  // set nonce in session storage
  window.sessionStorage.setItem('nonce', nonce)
  window.sessionStorage.setItem('signature', signature)
  return true
}

export const generateNonce = () => ((Math.floor(Math.random() * 10000) + 10000).toString().substring(1));


