import firebase from './firebase/firebase.utiles'
import 'firebase/firestore'

const firestore = firebase.firestore();

const users = firestore.doc('users/EUi5NJ45NSsO2DQeDXjG');

console.log(users);