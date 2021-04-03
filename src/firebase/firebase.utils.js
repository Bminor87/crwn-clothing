import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuz5-mtAR55Zkrfca6h-ThVsMF47rF4Ps",
    authDomain: "crwn-db-73a0b.firebaseapp.com",
    projectId: "crwn-db-73a0b",
    storageBucket: "crwn-db-73a0b.appspot.com",
    messagingSenderId: "230159477762",
    appId: "1:230159477762:web:6dc258cc97d440384f8b1b"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;