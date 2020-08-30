import * as firebase from "firebase/app";
import "firebase/auth";

export default function ({
  redirect
}) {
  firebase.auth().onAuthStateChanged(user => {
    console.log(user, "user");
    if (!user) {
      redirect('/login')
    }
  });
}
