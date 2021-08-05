import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCYUddd3zspheCVQ2vZViM8X2xrQPQkR9s",
    authDomain: "azeleb-salao.firebaseapp.com",
    projectId: "azeleb-salao",
    storageBucket: "azeleb-salao.appspot.com",
    messagingSenderId: "730771732670",
    appId: "1:730771732670:web:3714fe3c158f180af3c6ef"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


