import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDcaUXE-xrzsE7fePnXX_EigPwWiIN24T4",
    authDomain: "gerenciador-de-obras.firebaseapp.com",
    databaseURL: "https://gerenciador-de-obras.firebaseio.com",
    projectId: "gerenciador-de-obras",
    storageBucket: "gerenciador-de-obras.appspot.com",
    messagingSenderId: "546276955156",
    appId: "1:546276955156:web:371139cec73a3a770ec301",
    measurementId: "G-W1B3CM7XBG"
  };

 const fire = firebase.initializeApp(config);
 export default fire;