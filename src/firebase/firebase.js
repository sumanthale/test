import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_TOKEN,
  authDomain: process.env.REACT_APP_ONE,
  databaseURL: process.env.REACT_APP_TWO,
  projectId: process.env.REACT_APP_THREE,
  storageBucket: process.env.REACT_APP_FOUR,
  messagingSenderId: process.env.REACT_APP_FIVE,
  appId: process.env.REACT_APP_SIX,
});

export const db = getFirestore();

export const auth = getAuth(firebaseApp);
