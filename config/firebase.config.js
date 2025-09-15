import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-xl5Qo3ojRR0rWMWy6-OWfGUcEplT1wI",
  authDomain: "dealership-3cfdc.firebaseapp.com",
  projectId: "dealership-3cfdc",
  storageBucket: "dealership-3cfdc.firebasestorage.app",
  messagingSenderId: "632840618312",
  appId: "1:632840618312:web:05d11be96a4e324255f37d"
};
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

  export{db,storage}