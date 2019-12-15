import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyD53-kdvc9mX85qVoyz_0rsq90bgYZDav0",
    authDomain: "devresources-app.firebaseapp.com",
    databaseURL: "https://devresources-app.firebaseio.com",
    projectId: "devresources-app",
    storageBucket: "devresources-app.appspot.com",
    messagingSenderId: "98306377146",
    appId: "1:98306377146:web:f6b10298d70390296b0983",
    measurementId: "G-SYS38D6SB1"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
//   firebase.analytics();

export default firebase;