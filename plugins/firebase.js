 import * as firebase from 'firebase/app';
 import 'firebase/auth' 
   /* // Your web app's Firebase configuration */
 const firebaseConfig = {
   apiKey: "AIzaSyC5DMRhe9PAWNzGdIhhDuNqPb-lGUa8lBQ",
   authDomain: "test-9399a.firebaseapp.com",
   databaseURL: "https://test-9399a.firebaseio.com",
   projectId: "test-9399a",
   storageBucket: "test-9399a.appspot.com",
   messagingSenderId: "446736180242",
   appId: "1:446736180242:web:de85037afdc01fc905e4cb",
   measurementId: "G-D0MYFM77XH"
 }; 
   /* // Initialize Firebase */
 let app = null;
 if (firebase.app.length) {
   app = firebase.initializeApp(firebaseConfig)
 }

 export default firebase
