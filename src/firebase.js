import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDMSh9oV1P8PMibrig7RI0ydL02t33IoQo",
  authDomain: "personal-6e47f.firebaseapp.com",
  databaseURL: "https://personal-6e47f.firebaseio.com",
  projectId: "personal-6e47f",
  storageBucket: "personal-6e47f.appspot.com",
  messagingSenderId: "566210077047",
  appId: "1:566210077047:web:647f2166781cd59eff8172",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore();


/* const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const userRef = db.collection(“users”).add({
  fullname: this.state.fullname,
  email: this.state.email
});   */
