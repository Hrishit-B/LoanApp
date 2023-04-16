import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
    getAuth,
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

const checkAuthState = async() => {
    onAuthStateChanged(auth, user => {
        if(user) {
            window.location.href="#"
        }
        else {
            window.location.href="../templates/log.html"
        }
    })
}

const signoutButton = document.getElementById("signout");
signoutButton.addEventListener("click", () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error.message);
      });
})




checkAuthState();
