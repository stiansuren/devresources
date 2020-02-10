import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD53-kdvc9mX85qVoyz_0rsq90bgYZDav0",
  authDomain: "devresources-app.firebaseapp.com",
  databaseURL: "https://devresources-app.firebaseio.com",
  projectId: "devresources-app",
  storageBucket: "devresources-app.appspot.com",
  messagingSenderId: "98306377146",
  appId: "1:98306377146:web:f6b10298d70390296b0983",
  measurementId: "G-SYS38D6SB1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const signIn = async (email: string, password: string) => {
  let user;
  try {
    const snapshot = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    user = snapshot?.user?.email;
  } catch (e) {
    console.error("Error getting user: ", e);
  }
  return user;
};

export const signOut = async () => {
  const isSignedOut = firebase
    .auth()
    .signOut()
    .then(function() {
      console.log("Signed out");
      return true;
    })
    .catch(function(error) {
      console.log("Could not sign out");
      return false;
    });

  return isSignedOut;
};

export const addAuthObserver = (observer: Function) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      observer(user.email, true);
    } else {
      observer("", false);
    }
  });
};

export default firebase;
