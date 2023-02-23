import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCb1_NofguO8ll81sP0DPv94QvfYinmoaY",
  authDomain: "altas-zapas-524fd.firebaseapp.com",
  projectId: "altas-zapas-524fd",
  storageBucket: "altas-zapas-524fd.appspot.com",
  messagingSenderId: "479512585355",
  appId: "1:479512585355:web:8ddb49548f086b07f7a08e",
};

const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
  return app;
};
