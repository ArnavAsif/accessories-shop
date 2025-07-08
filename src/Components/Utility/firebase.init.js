// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuiQskPPKYzwxyCOely702Z1UIIFnwvBU",
  authDomain: "accessories-shop-437da.firebaseapp.com",
  projectId: "accessories-shop-437da",
  storageBucket: "accessories-shop-437da.firebasestorage.app",
  messagingSenderId: "544538713437",
  appId: "1:544538713437:web:587b30795cd6909cf3dcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);