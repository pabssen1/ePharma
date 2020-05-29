import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import "@firebase/storage";
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
export const fapp = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const db = firebase.database();
export const user = firebase.auth();
