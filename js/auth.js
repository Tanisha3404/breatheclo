import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",  
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE",
  measurementId: "YOUR_MEASUREMENT_ID_HERE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("signin.html")) {
    document.querySelector("form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const fname = document.getElementById("fname").value;
      const lname = document.getElementById("lname").value;
      const email = document.getElementById("email").value;
      const pwd = document.getElementById("pwd").value;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
        await updateProfile(userCredential.user, { displayName: `${fname} ${lname}` });
        alert("Account created successfully!");
        window.location.href = "login.html";
      } catch (error) {
        alert(error.message);
      }
    });

  } else if (path.includes("login.html")) {
    document.querySelector("form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const pwd = document.getElementById("pwd").value;

      try {
        await signInWithEmailAndPassword(auth, email, pwd);
        alert("Logged in successfully!");
        
        window.location.href = "index.html";
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    });

  } else if (path.includes("forgot.html")) {
    document.querySelector("form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;

      try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent!");
        window.location.href = "login.html";
      } catch (error) {
        alert("Error: " + error.message);
      }
    });
  }
});
