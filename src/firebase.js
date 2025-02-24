import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-A6OYRqgIwNTxIF8I1xb0EPfhTnr9ecs",
    authDomain: "cfphf-b6641.firebaseapp.com",
    projectId: "cfphf-b6641",
    storageBucket: "cfphf-b6641.appspot.com", // Fixed typo in storageBucket
    messagingSenderId: "46847270066",
    appId: "1:46847270066:web:229a0f0595cfbfb253fdab"
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { db, collection, addDoc, serverTimestamp };
