// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkSvVgld8IuSw6BWhj618yRT8fO9TZO3c",
  authDomain: "vyayaprabandhana.firebaseapp.com",
  projectId: "vyayaprabandhana",
  storageBucket: "vyayaprabandhana.appspot.com",
  messagingSenderId: "107205659585",
  appId: "1:107205659585:web:a3bfcd2f440e4c1174fd40",
  measurementId: "G-FF244LGM3Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
