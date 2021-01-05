import firebase from 'firebase/app'
import "firebase/auth"

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCBvQZooy4x_ksAdJXRYPabHyf8ElFYSi8",
    authDomain: "fittrax-8ba47.firebaseapp.com",
    databaseURL: "https://fittrax-8ba47-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fittrax-8ba47",
    storageBucket: "fittrax-8ba47.appspot.com",
    messagingSenderId: "238395124789",
    appId: "1:238395124789:web:3fe7b4c26db186a71ad57c",
    measurementId: "G-91KEPN8S7D"

})

export const firebaseAuth = firebaseApp.auth()
export default firebaseApp 