import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_TOKEN,
  authDomain: 'solona-buddha.firebaseapp.com',
  databaseURL: 'https://solona-buddha-default-rtdb.firebaseio.com',
  projectId: 'solona-buddha',
  storageBucket: 'solona-buddha.appspot.com',
  messagingSenderId: '330432463139',
  appId: '1:330432463139:web:cd73de669138a4d3110c96',
});

export const db = getFirestore();

export const auth = getAuth(firebaseApp);
