import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDq8KCzyZa_BlIDLwKZOqdpXUgvx5x1fOI",
  authDomain: "landloom-ea6c2.firebaseapp.com",
  projectId: "landloom-ea6c2",
  storageBucket: "landloom-ea6c2.appspot.com",
  messagingSenderId: "1071217496752",
  appId: "1:1071217496752:web:7fdaa4e1c41fbbc45d6175",
  measurementId: "G-Q1RC0E2R8M"
};
export  const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };