 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.10/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.10/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBZXvHhYYSXlvi7A_lGdxTmKt7rUdsN5KU",
   authDomain: "gta-triplea.firebaseapp.com",
   projectId: "gta-triplea",
   storageBucket: "gta-triplea.appspot.com",
   messagingSenderId: "758978004595",
   appId: "1:758978004595:web:1f0fff68e51635a002cc06",
   measurementId: "G-E7X91ZSE5P"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);