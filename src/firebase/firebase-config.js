import {initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: 'AIzaSyCZnaybYacGOJcIwHBS9728tXKytNxZhbY',

  authDomain: 'prontoqr-5c496.firebaseapp.com',

  projectId: 'prontoqr-5c496',

  storageBucket: 'prontoqr-5c496.appspot.com',

  messagingSenderId: '18303295601',

  appId: '1:18303295601:web:bfc23e08ff04b924de7bd0',

  measurementId: 'G-XQ1RVL73C5',
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

