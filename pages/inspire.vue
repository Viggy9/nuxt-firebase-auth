 <template>
  <div>
    <h1>I'm inspired</h1>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import Cookies from "js-cookie";

export default {
//   middleware: ["login"],

    asyncData({ redirect, req }) { //is called every time before loading the page component.
    //will be called on server-side once and client-side when navigating to further routes.
      if (process.server) {
        let token = Cookies.get('access_token');
        console.log(token, 'token server');
        if(!token){
            redirect('/login');
        }
          //refresh the page, loads the server, then routes, then webapp, routing after that is done on client side.
      //if you go to route inspire, its run on the server side, and thats why page will be rendered.
      //dont have access to firebase obj
      } else {    
          let token = Cookies.get('access_token');
        console.log(token, 'token client');
        if(!token){
            redirect('/login');
        }
        // let user = firebase.auth().currentUser;
        // console.log(user, 'user in inspire.vue')
        // if (!user) {
        // redirect('/login');
        // }
      }
    },
  created() {
    //using created , the page is visible for millseconds.
    //     let user = firebase.auth().currentUser;
    //     if (!user) {
    //       this.$router.push("login");
    //     }
  }
};
</script>

<style>
</style>