<template>
  <v-container style="height:100%">
    <v-row class="align-center flex-column">
      <div class="title">Nuxt-Firebase Webapp</div>
      <div class="mt-6">
        1. Install firebase using the command - npm i firebase
        <br />2. Install nuxt/firebase module - npm i @nuxtjs/firebase
        <br />3. Add it to the nuxt.config.js 
        <br/>
        modules: [
        [
        '@nuxtjs/firebase',
        {
        config: {
            //Replace this with the config object from the firebase project you created.
        },
        services: {
        auth: true // Just as example. Can be any other service.
        }
        }
        ]
        ]
        <br />4. By simply configuring this module in your nuxt.config.js file, you can use all Firebase Services throughout your app. 
        You can use it in global context(Ex: this.$fireAuth - Authentication object from Firebase)
        <br/> 5. If you press on Inspire, you can notice you wont be able to route to that path as it is authenticated. This is done using Cookies- npm i js-cookie.
        When you login , we store the token as cookies.
        <br/> 6. You can do the validation in two ways : 1) Middleware - create a js file and check if cookie exists before going to Inspire page , if it doesnt, route it back to login.
        <br/> 7. Another way to do this - Async Data - fetches data and pre-renders it on the server w/o the store. its called before loading the page component. It will be called on server-side once and client-side while navigating.
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>