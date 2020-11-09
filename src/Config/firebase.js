// From here firebase.js ac to dc clone

import firebase from 'firebase';









var firebaseConfig = {
    apiKey: "AIzaSyDXF-8-4BX8JHuIVXxXIrESfHMo1geOi0c",
    authDomain: "olx-clone-ahmed.firebaseapp.com",
    databaseURL: "https://olx-clone-ahmed.firebaseio.com",
    projectId: "olx-clone-ahmed",
    storageBucket: "olx-clone-ahmed.appspot.com",
    messagingSenderId: "436836363927",
    appId: "1:436836363927:web:b2f6ce5d59bf1b656803d2",
    measurementId: "G-KX9XQ2J591"
};
// Initialize Firebase

// export default firebase.initializeApp(firebaseConfig); //ac to ghous sir

export const firebaseApp = firebase.initializeApp(firebaseConfig); // ac to dc clone cp
const db = firebaseApp.database();
export const auth = firebase.auth();
// google login function

export const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider }


export default db;


// const db = firebaseApp.firestore();