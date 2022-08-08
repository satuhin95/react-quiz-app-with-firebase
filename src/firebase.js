// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const app = initializeApp({
//   apiKey: process.env.REACT_QUIZ_API_KEY,
//   authDomain: process.env.REACT_QUIZ_AUTO_DOMAIN,
//   projectId:process.env.REACT_QUIZ_PROJECT_ID,
//   storageBucket:process.env.REACT_QUIZ_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_QUIZ_MESSAGING_SENDER_ID,
//   appId:process.env.REACT_QUIZ_APP_ID
// });

// // Initialize Firebase
// export default  app ;

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyCyMhZgPklOCJsDTGmkwW0Osinu-OTJd8Y",

  authDomain: "react-quiz-dev-c9083.firebaseapp.com",

  databaseURL: "https://react-quiz-dev-c9083-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "react-quiz-dev-c9083",

  storageBucket: "react-quiz-dev-c9083.appspot.com",

  messagingSenderId: "784779135151",

  appId: "1:784779135151:web:2587232d299d4d9ff22c5a"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);