import firebase from 'firebase/app';
import 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL2EbrXYKEywOJofjMuon4Rh8D9UaUBtw",
  authDomain: "imageupload-f5b47.firebaseapp.com",
  projectId: "imageupload-f5b47",
  storageBucket: "imageupload-f5b47.appspot.com",
  messagingSenderId: "295986854046",
  appId: "1:295986854046:web:2c6feb2181aa176cc4a38f",
  measurementId: "G-V6JTV0ND3M"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
