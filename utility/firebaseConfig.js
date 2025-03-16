// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGqDwsZzb6ss72--Yr45FRWHsF8j9aK1s",
  authDomain: "carebank-e4cb4.firebaseapp.com",
  projectId: "carebank-e4cb4",
  storageBucket: "carebank-e4cb4.firebasestorage.app",
  messagingSenderId: "452496345294",
  appId: "1:452496345294:web:bd21079a36050f8787689f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// InitializeAuth persistence
const auth =initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize FireStore
const db = getFirestore(app);

export {auth,db}