// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmYgqZ7MuwTUysx8wI73KExihobKhdcPw",
    authDomain: "user-email-password-auth-5a0ba.firebaseapp.com",
    projectId: "user-email-password-auth-5a0ba",
    storageBucket: "user-email-password-auth-5a0ba.appspot.com",
    messagingSenderId: "461497507629",
    appId: "1:461497507629:web:ec5073632f5f23f0cffda4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;