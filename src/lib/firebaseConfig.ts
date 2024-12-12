
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//     apiKey: "AIzaSyAjWeTPlSiePUR4vouoWRGI0B3jg0BE31M",
//     authDomain: "cv-gen-2324a.firebaseapp.com",
//     projectId: "cv-gen-2324a",
//     storageBucket: "cv-gen-2324a.firebasestorage.app",
//     messagingSenderId: "611935576689",
//     appId: "1:611935576689:web:6a83785058a4ee446ff1d0",
//     measurementId: "G-Y23Z71N42R"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDVFlPgiOBsqQC28FU7A8KJAGKjpswrtls",
    authDomain: "optimcv1.firebaseapp.com",
    projectId: "optimcv1",
    storageBucket: "optimcv1.firebasestorage.app",
    messagingSenderId: "164776752773",
    appId: "1:164776752773:web:fe739e7d11b3c150ea5bec",
    measurementId: "G-VB63J2S3TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;