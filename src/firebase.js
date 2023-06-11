// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzwCjZHmE_owIlzU6pl95fjTWbUt4nS08",
  authDomain: "sayed-portfolio.firebaseapp.com",
  projectId: "sayed-portfolio",
  storageBucket: "sayed-portfolio.appspot.com",
  messagingSenderId: "740558826114",
  appId: "1:740558826114:web:61e6eb47a74b0bccf8e29b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;