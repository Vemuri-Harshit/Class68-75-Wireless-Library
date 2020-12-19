import * as firebase from 'firebase';
require ('@firebase/firestore');

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZ7MCpZUvfEZyBMGjFkoT465pYBxwnWwQ",
    authDomain: "wireless-library-79b53.firebaseapp.com",
    databaseURL: "https://wireless-library-79b53.firebaseio.com",
    projectId: "wireless-library-79b53",
    storageBucket: "wireless-library-79b53.appspot.com",
    messagingSenderId: "231174339302",
    appId: "1:231174339302:web:09d3a5fdcf0e5425345927"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();