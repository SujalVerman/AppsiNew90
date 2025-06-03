import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("login-input-email").value;
    const password = document.getElementById("login-input-password").value;
  
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
  
    if (res.ok) {
      alert("Login successful!");
      navigate("/"); // or navigate to a dashboard page
    } else {
      alert(data.msg || "Login failed!");
    }
  }
  
  return (
      <form onSubmit={handleLogin}>
    <div id="login-wrapper">
      <div id="login-left" style={{ backgroundImage: `url(/Signup.jpg)` }}>
      <button id="login-back" onClick={handleBackClick} style={{ background: "none", border: "none", cursor: "pointer" }}>
  &lt; Back
</button>


        <h3 id="login-brand">Appsi Studio</h3>
        <h1 id="login-title">Explore Near<br />Nature Spots</h1>
      </div>

      <div id="login-right">
        <h2 id="login-welcome">Welcome Back</h2>
        <p id="login-subtext">Enter your email and password to access your account</p>

        <label id="login-label-email">Email</label>
        <input id="login-input-email" type="email" placeholder="Enter your email" />

        <label id="login-label-password">Password</label>
        <div id="login-password-container">
          <input id="login-input-password" type="password" placeholder="Enter your password" />
          <span id="login-eye">&#128065;</span>
        </div>

        <div id="login-options">
          <label id="login-remember">
            <input type="checkbox" />
            Remember me
          </label>
          <a id="login-forgot" href="#login">Forgot password? <span id="login-change">Change now</span></a>
        </div>

        <button id="login-button">Sign In</button>

        <p id="login-signup">
          Don&apos;t have an account? <a href="#Signup" id="login-signup-link" onClick={()=>{navigate("/Signup")}}>Sign Up</a>
        </p>
      </div>
    </div>
      </form>
  );
};

export default LoginPage;
