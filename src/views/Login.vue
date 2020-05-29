<template lang="html">
  <div id="firebaseui-auth-container" style="padding-top:40px"></div>
</template>

<script>
import { firebase } from "@firebase/app";
import * as firebaseui from "firebaseui";
export default {
  name: "auth",
  mounted() {
    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: function(authResult) {
          console.log(authResult);
          return true;
        }
      }
    };
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style scoped>
@import url("https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css");
</style>
