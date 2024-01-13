// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzFSwIRTAIhvYJmfS9bEwIavW1FU_bLEg",
  authDomain: "shopping-cart-be587.firebaseapp.com",
  projectId: "shopping-cart-be587",
  storageBucket: "shopping-cart-be587.appspot.com",
  messagingSenderId: "761408401",
  appId: "1:761408401:web:b729c9c4860b0a2d858830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore()