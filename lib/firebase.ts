import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDvCx5Q3kUbF62UXwDENrOSHvO6Im9dKWE",
  authDomain: "khatabook-c887c.firebaseapp.com",
  projectId: "khatabook-c887c",
  storageBucket: "khatabook-c887c.firebasestorage.app",
  messagingSenderId: "1039277992358",
  appId: "1:1039277992358:web:dddb31948d5b8fc3f18767",
  measurementId: "G-HRDCEJZJ5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    console.log("User signed in:", user);
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};


// Call this function when user clicks a "Sign in with Google" button
signInWithGoogle();
