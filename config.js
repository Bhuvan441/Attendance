 import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBw9CezlzEhHn75EDKjTBfnRqu9VxRER8c",
  authDomain: "attendance-5918d.firebaseapp.com",
  databaseURL: "https://attendance-5918d-default-rtdb.firebaseio.com",
  projectId: "attendance-5918d",
  storageBucket: "attendance-5918d.appspot.com",
  messagingSenderId: "778513706792",
  appId: "1:778513706792:web:0da4657cc858225b6a2a1d"
};
firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  