import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBcz3O-50lQ35uol-kKIUvp4w-QSH4_JZc",
    authDomain: "insta-clone-19bb2.firebaseapp.com",
    projectId: "insta-clone-19bb2",
    storageBucket: "insta-clone-19bb2.appspot.com",
    messagingSenderId: "231795538553",
    appId: "1:231795538553:web:64b7c24624c27fecb772a8"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase)

export { firebase, FieldValue };