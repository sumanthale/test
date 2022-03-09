import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import config from './config.json';

const firebaseApp = initializeApp({
  ...config,
});

export const db = getFirestore();

export const auth = getAuth(firebaseApp);
