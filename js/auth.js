// auth.js (use type="module" in HTML to import this)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// 🔧 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA4lfa7O0WF6F4VNe4GSupqLw9MvxtN-CM",
  authDomain: "breathecloauth.firebaseapp.com",
  projectId: "breathecloauth",
  storageBucket: "breathecloauth.firebasestorage.app",
  messagingSenderId: "625455102501",
  appId: "1:625455102501:web:a637682132acc15f675dcc",
  measurementId: "G-SXHW51GBFL"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🧾 Detect which form to handle
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
        // If no profile.html, redirect to homepage or dashboard
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
