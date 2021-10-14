import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA593A0JSNi87RW0Pd0oDoYvRzPQlJJmLY",
    authDomain: "todolist-aa90b.firebaseapp.com",
    projectId: "todolist-aa90b",
    storageBucket: "todolist-aa90b.appspot.com",
    messagingSenderId: "482546717722",
    appId: "1:482546717722:web:264cbce461ab5ada49eda3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app)