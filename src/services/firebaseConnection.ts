import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyClzsCa55WNcJQqbm87xwn-PBBN74TWw3s",
  authDomain: "devlink-d7ab8.firebaseapp.com",
  projectId: "devlink-d7ab8",
  storageBucket: "devlink-d7ab8.appspot.com",
  messagingSenderId: "858028528759",
  appId: "1:858028528759:web:cfe31279a0735ecc9de272",
  measurementId: "G-1M5TPJH74Q",
}
const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
