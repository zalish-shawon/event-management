// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjcTWcGvrGjK-L9fMo1-BBuYz1nnl1a5U",
  authDomain: "event-managment-21266.firebaseapp.com",
  projectId: "event-managment-21266",
  storageBucket: "event-managment-21266.appspot.com",
  messagingSenderId: "168752941524",
  appId: "1:168752941524:web:b8ccdd3272aaa6ae222e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app