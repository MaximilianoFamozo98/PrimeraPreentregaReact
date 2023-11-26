import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCbwB4VcTDwqg-OK-em9S_E-Et7K4O6SFE",
  authDomain: "bebidaselpajaro-3c781.firebaseapp.com",
  projectId: "bebidaselpajaro-3c781",
  storageBucket: "bebidaselpajaro-3c781.appspot.com",
  messagingSenderId: "926656899907",
  appId: "1:926656899907:web:c1e62e9cec73c34b6e9df6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)