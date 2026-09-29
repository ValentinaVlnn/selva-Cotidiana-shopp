import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDW5Qkqs7dlsF4AFAjteG_pQRM3zvlgxbk",
  authDomain: "selva-cotidiana-shop.firebaseapp.com",
  projectId: "selva-cotidiana-shop",
  storageBucket: "selva-cotidiana-shop.firebasestorage.app",
  messagingSenderId: "944753558028",
  appId: "1:944753558028:web:7d61c8068fa20dd2712429"
};

export const app = initializeApp(firebaseConfig);