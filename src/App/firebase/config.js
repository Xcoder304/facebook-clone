import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4o-VZKa1LZrhJg-VohV7_4MznlrCqQTA",
  authDomain: "facebook-clone-69da3.firebaseapp.com",
  projectId: "facebook-clone-69da3",
  storageBucket: "facebook-clone-69da3.appspot.com",
  messagingSenderId: "388057901024",
  appId: "1:388057901024:web:5fb3b507bf86fa94172d85",
  measurementId: "G-WCDL65KZHN",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, auth, storage };
