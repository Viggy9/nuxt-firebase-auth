<template>
  <v-container style="height:100%">
    <v-card flat class="d-flex mx-auto align-center" width="350" style="height:100%">
      <v-card-text>
        <div class="title my-2 d-flex justify-center">Login</div>
        <v-form>
          <v-text-field
            v-model="username"
            label="Enter username"
            outlined
            dense
            prepend-icon="mdi-account-circle"
          ></v-text-field>
          <v-text-field
            type="password"
            prepend-icon="mdi-account-lock"
            label="Enter password"
            v-model="password"
            outlined
            dense
          ></v-text-field>
          <div class="d-flex justify-center">
            <v-btn @click="submit()" dark color="primary">Log In</v-btn>
          </div>
        </v-form>
        <div v-if="error" style="color:red;text-align:center">{{error.message}}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import * as firebase from "firebase/app";
// import "firebase/auth";
import Cookies from "js-cookie";

export default {
  created() {},
  data() {
    return {
      username: null,
      password: null,
      error: ""
    };
  },
  methods: {
    submit() {
      console.log(this.username, "username");
      this.$fireAuth // instead of firebase.auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(user => {
            this.$fireAuth
            .currentUser.getIdToken(true)
            .then(token => {
              Cookies.set("access_token", token);
              console.log(user, "username");
              this.$router.push("inspire");
            });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style>
</style>