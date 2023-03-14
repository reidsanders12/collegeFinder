import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword, signupEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_RH17JIVKHhVTw1mgoh_FeTDnOZJbmeE",
  authDomain: "collegefinder-a1025.firebaseapp.com",
  databaseURL: "https://collegefinder-a1025-default-rtdb.firebaseio.com",
  projectId: "collegefinder-a1025",
  storageBucket: "collegefinder-a1025.appspot.com",
  messagingSenderId: "773582129177",
  appId: "1:773582129177:web:0ba3c597def8ee0fc80288",
  measurementId: "G-E9G1BYBEWR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the email and password input fields
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

// Add an event listener to the login button
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in with email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});

  // Sign in with email and password
  firebase.auth().signUpWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");
  
    messageElement.textContent = message;
    messageElement.classList.remove("form_message--success", ".form_message--error");
    messageElement.classList.add('form_message--${type}');
  }
  
  function setInputError(inputElement, message) {
    inputElement.classList.add("form_input--error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
  }
  
  function clearInputError(inputElement) {
    inputElement.classList.remove("form_input--error")
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#creatAccount");
    const forgotPassForm = document.querySelector("#forgot");
    const contentForm = document.querySelector("#contents");
  
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
  
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
  
    document.querySelector("#linkforgotPass").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        forgotPassForm.classList.remove("form--hidden");
    });
  
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
  
        //Preform your AJAX/Fetch login
        setFormMessage(loginForm, "error", "Invalid username/password combination");
  
    });
    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length > 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });
  
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
  });
