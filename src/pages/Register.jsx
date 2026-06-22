import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    flatNo: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    const residents =
      JSON.parse(
        localStorage.getItem("residents")
      ) || [];

    const existingUser =
      residents.find(
        (user) =>
          user.email.toLowerCase() ===
          formData.email.toLowerCase()
      );

    if (existingUser) {

      alert("Email already registered");
      return;

    }

    residents.push(formData);

    localStorage.setItem(
      "residents",
      JSON.stringify(residents)
    );

    alert("Registration Successful");

    navigate("/login");

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Resident Registration</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="flatNo"
            placeholder="Flat Number"
            value={formData.flatNo}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="bottom-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>

  );
}

export default Register;