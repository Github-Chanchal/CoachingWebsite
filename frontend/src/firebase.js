
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLZ_nuE9JC3wepKTANPKoddpTqKLKsHCM",
  authDomain: "auth-6a5b8.firebaseapp.com",
  projectId: "auth-6a5b8",
  storageBucket: "auth-6a5b8.appspot.com",
  messagingSenderId: "864233502493",
  appId: "1:864233502493:web:20be4bd11df1c1ac7293f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
