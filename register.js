
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDT-Er2K5cSVW8P99dux75N6nSmypApODM",
    authDomain: "kaamwale-79ee8.firebaseapp.com",
    projectId: "kaamwale-79ee8",
    storageBucket: "kaamwale-79ee8.firebasestorage.app",
    messagingSenderId: "232965122787",
    appId: "1:232965122787:web:3950ae7f3963b058e273d6",
    measurementId: "G-7QTNJZRB9V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const email=document.getElementById('email').Value;
  const password=document.getElementById('password').value;

  const submit =document.getElementById('submit');
  submit.addEventListener("click",function(event){event.preventDefault()
    alert(5)
  })
