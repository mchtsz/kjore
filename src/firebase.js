import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCY9wfGdbuhq5L1p0v3Z1GhyObB8FmORos',
  authDomain: 'rasktidig.firebaseapp.com',
  projectId: 'rasktidig',
  storageBucket: 'rasktidig.appspot.com',
  messagingSenderId: '902127169014',
  appId: '1:902127169014:web:f7cf4300cc86d799b3abd7',
  measurementId: 'G-ZS8NX7V327'
})

// Initialize Firebase
const app = firebaseApp
const db = getFirestore(app)
export default db // export the initialized app
