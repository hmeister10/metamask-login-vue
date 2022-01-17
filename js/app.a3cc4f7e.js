(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/metamask-login-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e){},20:function(t,e){},21:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",[n("span",{staticClass:"headline"},[t._v("Metamask Login Flow")])])],1),n("v-main",[n("LoginFlow")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-main",{staticClass:"grey lighten-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",lg:"4"}},[n("Connect",{attrs:{state:t.state},on:{setState:t.setState}})],1),n("v-col",{attrs:{cols:"12",lg:"4"}},[n("Register",{attrs:{state:t.state},on:{setState:t.setState}})],1),n("v-col",{attrs:{cols:"12",lg:"4"}},[n("Login",{attrs:{state:t.state},on:{setState:t.setState}})],1)],1),"LOGIN"===t.state?n("v-row",[n("v-btn",{staticClass:"mb-3",attrs:{elevation:"2",large:""},on:{click:t.restartLogin}},[t._v(" Restart ")])],1):t._e()],1)],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto",attrs:{color:t.cardColor,dark:""}},[n("v-card-title",[n("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-link ")]),n("span",{staticClass:"text-h6 font-weight-light"},[t._v("Onboard Metamask")])],1),n("v-card-subtitle",[n("span",{staticClass:"text-h6 font-weight-light"},[t._v(" "+t._s(t.subtitle)+" ")])]),n("v-card-text",{staticClass:"text-h5 font-weight-bold"},[t.accounts.length>0?n("v-list",{attrs:{dense:""}},t._l(t.accounts,(function(e){return n("v-list-item",{key:e.id},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e))])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.copyToClipboard(e)}}},[n("v-icon",[t._v("mdi-content-copy")])],1)],1)],1)})),1):t._e()],1),n("v-card-actions",[n("v-list-item",{staticClass:"grow"},[n("v-btn",{attrs:{elevation:"2",large:""},on:{click:t.handleConnect}},[t._v(t._s(t.buttonText))])],1)],1)],1),n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" ")])],1)},u=[],l=n("5526"),d=n("1da1"),f=(n("d3b7"),n("25f0"),n("96cf"),n("99e5")),v=n.n(f),g=new v.a(window.web3.currentProvider),m=null,p=function(t){t},h=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=window.sessionStorage.getItem("signature"),!e||!m){t.next=19;break}return console.log("signature exists"),t.prev=3,n=window.sessionStorage.getItem("nonce"),console.log("Existing sign in session, validating user..."),t.next=8,x(n,e);case 8:return a=t.sent,console.log("Existing sign is for valid user: ",a),t.abrupt("return",!0);case 13:throw t.prev=13,t.t0=t["catch"](3),console.log(t.t0),t.t0;case 17:t.next=21;break;case 19:return console.log("metamask is not logged in"),t.abrupt("return",!1);case 21:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",m);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:p("CONNECTED"),m=e;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Signing message..."),t.abrupt("return",g.eth.personal.sign(e,m,(function(){console.log("signed")})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.eth.accounts.recover(e,n);case 2:return a=t.sent,t.abrupt("return",m.toLowerCase()==a.toLowerCase());case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=S(),t.next=3,k(e);case 3:return n=t.sent,t.next=6,x(e,n);case 6:return window.sessionStorage.setItem("nonce",e),window.sessionStorage.setItem("signature",n),t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){return(Math.floor(1e4*Math.random())+1e4).toString().substring(1)},_="Click here to install MetaMask!",y="Connect",O="Connected",T="#089f38",V="Start by installing the Metamask Extension",I="Connect your wallet to the current application",R="Nice! your wallet is now connected",E={name:"Connect",data:function(){return{accounts:[],snackbar:!1,snackbarText:"Copied to clipboard",timeout:2e3}},created:function(){var t=this;if(l["a"].isMetaMaskInstalled()){window.ethereum.on("accountsChanged",this.handleNewAccounts);var e=sessionStorage.getItem("autoConnect");return"true"===e&&this.connect(),function(){window.ethereum.off("accountsChanged",t.handleNewAccounts)}}},methods:{handleNewAccounts:function(t){t.length>0&&(w(t[0]),this.$emit("setState","CONNECTED")),this.accounts=t},handleConnect:function(){sessionStorage.setItem("autoConnect",!0),this.connect()},connect:function(){window.ethereum.request({method:"eth_requestAccounts"}).then(this.handleNewAccounts)},copyToClipboard:function(t){this.snackbar=!0,this.snackbarText="Copied to clipboard: "+t,navigator.clipboard.writeText(t)}},computed:{subtitle:function(){return this.buttonText===_?V:this.buttonText===O?R:I},cardColor:function(){return this.buttonText===O?T:"#1976d2"},buttonText:function(){return l["a"].isMetaMaskInstalled()?this.accounts.length>0?O:y:_}}},j=E,N=n("2877"),L=n("6544"),M=n.n(L),A=n("8336"),$=n("b0af"),D=n("99d9"),P=n("132d"),G=n("8860"),J=n("da13"),B=n("1800"),F=n("5d23"),q=n("2db4"),U=Object(N["a"])(j,c,u,!1,null,null,null),Y=U.exports;M()(U,{VBtn:A["a"],VCard:$["a"],VCardActions:D["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"],VIcon:P["a"],VList:G["a"],VListItem:J["a"],VListItemAction:B["a"],VListItemContent:F["a"],VListItemTitle:F["b"],VSnackbar:q["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto",attrs:{color:t.loggedIn?"#089f38":"#1976d2",dark:""}},[n("v-card-title",[n("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-link ")]),n("span",{staticClass:"text-h6 font-weight-light"},[t._v("Login")])],1),n("v-card-subtitle",[n("span",{staticClass:"text-h6 font-weight-light"},[t._v(" "+t._s(t.subtitle)+" ")])]),n("v-card-text",{staticClass:"text-h5 font-weight-bold"}),n("v-card-actions",[n("v-btn",{staticClass:"mb-3",attrs:{elevation:"2",large:"",loading:t.waiting},on:{click:t.handleLogin}},[t._v(" Login ")])],1)],1)],1)},H=[],K={name:"Login",props:{state:{type:String}},data:function(){return{loggedIn:!1,waiting:!0}},created:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getUser(),window.setTimeout(Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isRegistered){e.next=5;break}return e.next=3,h();case 3:t.loggedIn=e.sent,t.loggedIn&&t.$emit("setState","LOGGED_IN");case 5:t.waiting=!1;case 6:case"end":return e.stop()}}),e)}))),3e3);case 2:case"end":return e.stop()}}),e)})))()},computed:{isRegistered:function(){return"REGISTERED"===this.state},subtitle:function(){return this.waiting?"Checking login status...":this.loggedIn?"You are logged in!":"Sign a random challenge with your wallet and let the system verify it"}},methods:{getUser:function(){var t=JSON.parse(localStorage.getItem("user"))||{name:"",email:""};this.user=t},handleLogin:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isRegistered){e.next=7;break}return e.next=3,C();case 3:return e.next=5,h();case 5:t.loggedIn=e.sent,t.$emit("setState","LOGGED_IN");case 7:case"end":return e.stop()}}),e)})))()}}},Q=K,W=Object(N["a"])(Q,z,H,!1,null,null,null),X=W.exports;M()(W,{VBtn:A["a"],VCard:$["a"],VCardActions:D["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"],VIcon:P["a"]});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto",attrs:{color:t.isSaved?"#089f38":"#1976d2",dark:""}},[n("v-card-title",[n("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-link ")]),n("span",{staticClass:"text-h6 font-weight-light"},[t._v("Gather More information")])],1),n("v-card-subtitle",[n("span",{staticClass:"text-h6 font-weight-light"},[t._v(" You have the users address, but gather some basic identity information to make your application more personal. ")])]),n("v-card-text",{staticClass:"text-h5 font-weight-bold"},[n("v-text-field",{staticClass:"mb-3",attrs:{label:"Name",outlined:"",color:"tertiary",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),n("v-text-field",{staticClass:"mb-3",attrs:{label:"Email",outlined:"",color:"tertiary",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),n("v-card-actions",[n("v-btn",{staticClass:"mb-3",attrs:{elevation:"2",large:"",disabled:t.isSaved,loading:t.waiting},on:{click:t.save}},[t._v(" "+t._s(t.isSaved?"Saved":"Save")+" ")]),t.isSaved?n("v-btn",{staticClass:"mb-3",attrs:{elevation:"2",large:""},on:{click:t.clear}},[t._v(" clear ")]):t._e()],1)],1),n("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[n("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" ")])],1)},tt=[],et=n("5530"),nt=(n("b0c0"),n("e9c4"),{name:"Register",props:{state:{type:String}},data:function(){return{saved:!1,waiting:!0,user:{name:"",email:""},snackbar:!1,snackbarText:"",timeout:2e3}},created:function(){var t=this;this.getUser(),window.setTimeout(Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.checkSaved()&&(t.saved=!0),t.waiting=!1;case 2:case"end":return e.stop()}}),e)}))),2e3)},computed:{isConnected:function(){return"NOT_CONNECTED"!==this.state},isSaved:function(){return!(!this.isConnected||!this.saved)&&this.checkSaved()}},methods:{checkSaved:function(){var t=b(),e=JSON.parse(localStorage.getItem("user"));if(e){var n=this.user.name===e.name,a=void 0!=t,r=this.user.email===e.email;return n&&a&&r&&this.$emit("setState","REGISTERED"),n&&a&&r}return!1},getUser:function(){var t=JSON.parse(localStorage.getItem("user"))||{name:"",email:""};this.user=t},clear:function(){localStorage.removeItem("user"),this.user={name:"",email:""},this.saved=!1},save:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:n=e.sent,n?(a=t.user,""!=a.name&&""!=a.email?(localStorage.setItem("user",JSON.stringify(Object(et["a"])(Object(et["a"])({},a),{},{account:n}))),t.snackbarText="Saved",t.snackbar=!0,t.$emit("setState","REGISTERED"),t.saved=!0):(t.snackbarText="Please fill in all fields",t.snackbar=!0)):(t.snackbarText="Please connect your wallet first",t.snackbar=!0);case 4:case"end":return e.stop()}}),e)})))()}}}),at=nt,rt=n("8654"),it=Object(N["a"])(at,Z,tt,!1,null,null,null),st=it.exports;M()(it,{VBtn:A["a"],VCard:$["a"],VCardActions:D["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"],VIcon:P["a"],VSnackbar:q["a"],VTextField:rt["a"]});var ot={name:"LoginFlow",components:{Connect:Y,Login:X,Register:st},data:function(){return{state:"NOT_CONNECTED"}},methods:{setState:function(t){this.state=t},restartLogin:function(){localStorage.removeItem("user"),localStorage.removeItem("autoConnect"),sessionStorage.removeItem("signature"),sessionStorage.removeItem("nonce"),this.state="NOT_CONNECTED"}}},ct=ot,ut=n("7496"),lt=n("62ad"),dt=n("a523"),ft=n("f6c4"),vt=n("0fd9"),gt=Object(N["a"])(ct,s,o,!1,null,null,null),mt=gt.exports;M()(gt,{VApp:ut["a"],VBtn:A["a"],VCol:lt["a"],VContainer:dt["a"],VMain:ft["a"],VRow:vt["a"]});var pt={name:"App",components:{LoginFlow:mt},data:function(){return{}}},ht=pt,bt=n("40dc"),wt=n("2a7f"),kt=Object(N["a"])(ht,r,i,!1,null,null,null),xt=kt.exports;M()(kt,{VApp:ut["a"],VAppBar:bt["a"],VMain:ft["a"],VToolbarTitle:wt["a"]});var Ct=n("f309");a["a"].use(Ct["a"]);var St=new Ct["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:St,render:function(t){return t(xt)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){}});
//# sourceMappingURL=app.a3cc4f7e.js.map