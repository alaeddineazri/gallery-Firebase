
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDEFG8wmgSGRsILvwA2Nl-6eKwNJtO337g",
  authDomain: "photogallery-f9ef1.firebaseapp.com",
  projectId: "photogallery-f9ef1",
  storageBucket: "photogallery-f9ef1.appspot.com",
  messagingSenderId: "209246783489",
  appId: "1:209246783489:web:3b89ed2b56a6ba91e25800"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };