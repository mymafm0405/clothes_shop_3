import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyAkwItKh-J77ZQ5ONGLr3CPdmPnBfQmbe0",
  authDomain: "clothes-shop-b6815.firebaseapp.com",
  databaseURL: "https://clothes-shop-b6815.firebaseio.com",
  projectId: "clothes-shop-b6815",
  storageBucket: "clothes-shop-b6815.appspot.com",
  messagingSenderId: "965559870603",
  appId: "1:965559870603:web:9c968aa5ec1979acb6a08e",
  measurementId: "G-8TG3XXLZ41",
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async(userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      console.log('user created!')
    } catch (error) {
      console.log(error)
    }

    return userRef;
  }
}

export default firebase;