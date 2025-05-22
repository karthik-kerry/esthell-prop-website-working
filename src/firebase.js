import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDABKc2k9U0ezhvPoyQq8POLQDpMmoO7E",
  authDomain: "esthell-properties.firebaseapp.com",
  projectId: "esthell-properties",
  storageBucket: "esthell-properties.firebasestorage.app",
  messagingSenderId: "4113990017",
  appId: "1:4113990017:web:c9b88b5b8149492d3a2880",
  measurementId: "G-ZEP191FXLD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();