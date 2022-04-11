// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALouy1XChKGQil-K6rM8SlK5hKh1bf2ZE",
    authDomain: "login-projects-with-firebase.firebaseapp.com",
    projectId: "login-projects-with-firebase",
    storageBucket: "login-projects-with-firebase.appspot.com",
    messagingSenderId: "496437275992",
    appId: "1:496437275992:web:26701ebcb459d02ff7092d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;