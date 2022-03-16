// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx0Xkz43KByKgNtdjpo6DGHUpZJR0AEys",
  authDomain: "instaclone-8bbf1.firebaseapp.com",
  projectId: "instaclone-8bbf1",
  storageBucket: "instaclone-8bbf1.appspot.com",
  messagingSenderId: "342058290440",
  appId: "1:342058290440:web:f486bf51e63a830cdcb0bd",
  measurementId: "G-B00GGEHMSH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage } 