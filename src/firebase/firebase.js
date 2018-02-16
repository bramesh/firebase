import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyDZ0H-bpme4tqxDwpNakcBIuhFoM81jUdk",
  authDomain: "residentmanager-163f8.firebaseapp.com",
  databaseURL: "https://residentmanager-163f8.firebaseio.com",
  projectId: "residentmanager-163f8",
  storageBucket: "residentmanager-163f8.appspot.com",
  messagingSenderId: "259203742895"
};

const devConfig = {
  apiKey: "AIzaSyDZ0H-bpme4tqxDwpNakcBIuhFoM81jUdk",
  authDomain: "residentmanager-163f8.firebaseapp.com",
  databaseURL: "https://residentmanager-163f8.firebaseio.com",
  projectId: "residentmanager-163f8",
  storageBucket: "residentmanager-163f8.appspot.com",
  messagingSenderId: "259203742895"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
