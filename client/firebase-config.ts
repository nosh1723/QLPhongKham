import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyArdz3p1fB51Gc04Aeld0EEtY0IrDTL_BQ",
    authDomain: "qlpk-ef97d.firebaseapp.com",
    projectId: "qlpk-ef97d",
    storageBucket: "qlpk-ef97d.appspot.com",
    messagingSenderId: "999445637804",
    appId: "1:999445637804:web:2ee9dc923aefbcdb0c0d09",
    measurementId: "G-WB742H8WJB"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}