import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StaffLogin() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (
      (username === "ravi" && password === "123") ||
      (username === "arun" && password === "123") ||
      (username === "suresh" && password === "123")
    ) {

      let staffName = "";

      if (username === "ravi") {
        staffName = "Ravi";
      }

      if (username === "arun") {
        staffName = "Arun";
      }

      if (username === "suresh") {
        staffName = "Suresh";
      }

      localStorage.setItem(
        "staffName",
        staffName
      );

      alert("Staff Login Successful");

      navigate("/staff-dashboard");

    } else {

      alert("Invalid Username or Password");

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Staff Login</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
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

export default StaffLogin;