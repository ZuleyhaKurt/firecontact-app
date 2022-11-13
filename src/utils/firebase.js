
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBdRgOHH1MIiXoQMJ0yas725o88ciIKn5o",
  authDomain: "firecontact-app-5919a.firebaseapp.com",
  projectId: "firecontact-app-5919a",
  storageBucket: "firecontact-app-5919a.appspot.com",
  messagingSenderId: "316570996202",
  appId: "1:316570996202:web:74576b5ed27b05528e7693",
  measurementId: "G-97WS2NS32G"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;