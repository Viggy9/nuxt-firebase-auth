<template>
  <v-app>
    <v-app-bar dense fixed dark app flat color="blue">
      <v-img
        style="position:absolute;"
        height="35"
        contain
        src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
      ></v-img>
      <div class="ml-12 title">Firebase</div>
      <v-row class="justify-center">
      <nuxt-link v-if="!loggedIn" to="login">
        <v-btn text>Login</v-btn>
      </nuxt-link>
      <v-btn v-else text @click="logout()">Logout</v-btn>
      <nuxt-link to="/">
        <v-btn text>Home</v-btn>
      </nuxt-link>
      <nuxt-link to="inspire">
        <v-btn text>Inspire</v-btn>
      </nuxt-link>
      </v-row>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer app class="d-flex justify-center">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import Cookies from "js-cookie";
export default {
  mounted() {
    console.log("hello");
    this.setUpFirebase();
  },
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    setUpFirebase() {
      this.$fireAuth.onAuthStateChanged(user => {
        console.log(user, "user default");
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
          Cookies.remove("access_token");
        }
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(data => {
          this.$router.push("/");
        });
    }
  }
};
</script>
