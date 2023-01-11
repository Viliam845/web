import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnl56KLyqSW9aKM6PDzrs1TumvUP3hFSw",
    authDomain: "databaza-90404.firebaseapp.com",
    projectId: "databaza-90404",
    storageBucket: "databaza-90404.appspot.com",
    messagingSenderId: "206794664927",
    appId: "1:206794664927:web:f9b85f0828f89403ce726a",
    measurementId: "G-7BBR4P0PDG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();