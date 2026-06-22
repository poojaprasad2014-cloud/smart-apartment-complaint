import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      alert("Admin Login Successful");

      navigate("/admin-dashboard");

    } else {

      alert("Invalid Admin Credentials");

    }

  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;