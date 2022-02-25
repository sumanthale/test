import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import config from './config.json';

const firebaseApp = initializeApp({
  ...config,
});

export const auth = getAuth(firebaseApp);
