import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBYFpClbM8GmgZlUizuhobkOQDxk4ZoIOc",
  authDomain: "risforrooster-d6fb6.firebaseapp.com",
  projectId: "risforrooster-d6fb6",
  storageBucket: "risforrooster-d6fb6.appspot.com",
  messagingSenderId: "882810604913",
  appId: "1:882810604913:web:e51df0be6ff5af2a4dbad0",
  measurementId: "G-0XDLZZQGFD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;