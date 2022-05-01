import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
}

export default firebase;

// firebase .env

// NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDDjI0p8J4UilkRw8xXhh1jxWCsm1q_0nY
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=ireviewer-7dcf1.firebaseapp.com
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=ireviewer-7dcf1
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=ireviewer-7dcf1.appspot.com
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=643878437693
// NEXT_PUBLIC_FIREBASE_APP_ID=1:643878437693:web:4e00d70edd53b10e5a3b54
// NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-G8G79H2H3H

