import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBG-FVnK-4ng5kyjssCxfF3CjEBBFjDqcw",
    authDomain: "dans-crwn-db.firebaseapp.com",
    databaseURL: "https://dans-crwn-db.firebaseio.com",
    projectId: "dans-crwn-db",
    storageBucket: "dans-crwn-db.appspot.com",
    messagingSenderId: "1003406219722",
    appId: "1:1003406219722:web:6a73509be2bb43b8ee1733",
    measurementId: "G-70G9PEX3EH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  


  // get the gooogle auth provider class 
  const provider = new firebase.auth.GoogleAuthProvider();

  //set custom params
  provider.setCustomParameters({
      // make google sign in pop up
      prompt: 'select_account',
  });

  // create a function that will select the google sign in  
  // from the sign in with pop ups options
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
