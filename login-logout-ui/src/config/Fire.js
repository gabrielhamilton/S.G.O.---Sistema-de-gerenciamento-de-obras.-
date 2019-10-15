import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDcaUXE-xrzsE7fePnXX_EigPwWiIN24T4",
    authDomain: "gerenciador-de-obras.firebaseapp.com",
    databaseURL: "https://gerenciador-de-obras.firebaseio.com",
    projectId: "gerenciador-de-obras",
    storageBucket: "gerenciador-de-obras.appspot.com",
    messagingSenderId: "546276955156"
  };
 const Fire = firebase.initializeApp(config);
 export default Fire;