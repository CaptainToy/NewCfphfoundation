import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-A6OYRqgIwNTxIF8I1xb0EPfhTnr9ecs",
  authDomain: "cfphf-b6641.firebaseapp.com",
  projectId: "cfphf-b6641",
  storageBucket: "cfphf-b6641.appspot.com",
  messagingSenderId: "46847270066",
  appId: "1:46847270066:web:229a0f0595cfbfb253fdab"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage, collection, addDoc, serverTimestamp, ref, uploadBytes, getDownloadURL };
