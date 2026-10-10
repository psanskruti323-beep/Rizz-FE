// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVk7-zwJrdh95JMQi6aQ4RXmkQGaZUrc0",
  authDomain: "auth-20-06-2010.firebaseapp.com",
  projectId: "auth-20-06-2010",
  storageBucket: "auth-20-06-2010.firebasestorage.app",
  messagingSenderId: "29660317432",
  appId: "1:29660317432:web:97145ea3a105e92e695d0d",
  measurementId: "G-RFTZVW8JJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;