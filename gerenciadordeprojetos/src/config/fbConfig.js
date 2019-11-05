import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCfcF8b-lg2cxg8IKQiQdwOj7LHgWcBEck",
    authDomain: "sgoplus.firebaseapp.com",
    databaseURL: "https://sgoplus.firebaseio.com",
    projectId: "sgoplus",
    storageBucket: "sgoplus.appspot.com",
    messagingSenderId: "216457212203",
    appId: "1:216457212203:web:98709483bdc9a8ef01d56e",
    measurementId: "G-Y45XZW6MC2"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true });

  export default firebase;
