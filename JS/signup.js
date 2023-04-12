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

document.getElementById('signupForm').addEventListener('submit', (e) => {
e.preventDefault();
const displayName = document.getElementById('displayName').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Your account has been created!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
            alert('The email address is already in use by another account.');
        } else {
            alert(error.message);
        }
        
        console.log(errorCode + errorMessage)
    })

    
  });

  const checkAuthState = async() => {
    onAuthStateChanged(auth, user => {
        if(user) {
            window.location.href="login"
        }
    });
}

checkAuthState();