
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAjWeTPlSiePUR4vouoWRGI0B3jg0BE31M",
    authDomain: "cv-gen-2324a.firebaseapp.com",
    projectId: "cv-gen-2324a",
    storageBucket: "cv-gen-2324a.firebasestorage.app",
    messagingSenderId: "611935576689",
    appId: "1:611935576689:web:6a83785058a4ee446ff1d0",
    measurementId: "G-Y23Z71N42R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;