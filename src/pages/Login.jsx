import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const residents =
      JSON.parse(
        localStorage.getItem("residents")
      ) || [];

    const user = residents.find(
      (item) =>
        item.email.trim().toLowerCase() ===
          email.trim().toLowerCase() &&
        item.password.trim() ===
          password.trim()
    );

    if (user) {

      localStorage.setItem(
        "resident",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful");

      navigate("/dashboard");

    } else {

      alert("Invalid Email or Password");

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Resident Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;