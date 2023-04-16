import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
//Update the below URL with the appropriate version if necessary.
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyDDcxTnNexQCnntRVbmzY_5LzznH4ScOko",
  authDomain: "loanapp-60be2.firebaseapp.com",
  databaseURL: "https://loanapp-60be2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "loanapp-60be2",
  storageBucket: "loanapp-60be2.appspot.com",
  messagingSenderId: "218950582794",
  appId: "1:218950582794:web:9b0715ee83e848378c55f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
    window.location.href="user"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode === 'auth/wrong-password'){
      alert("You have entered the wrong password")
    }
    if(errorCode === 'auth/user-not-found'){
      alert("No users found")
    }
    else{
      alert(error.message);
    }
    console.log(errorCode + errorMessage)
    });
  
  });
