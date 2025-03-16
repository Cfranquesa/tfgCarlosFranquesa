// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc4Y1sjOOhI9t8FBqjHgv2er10Ya8J5GI",
  authDomain: "uaprojecttfg.firebaseapp.com",
  projectId: "uaprojecttfg",
  storageBucket: "uaprojecttfg.firebasestorage.app",
  messagingSenderId: "593461109487",
  appId: "1:593461109487:web:c88779db980076839c311a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
