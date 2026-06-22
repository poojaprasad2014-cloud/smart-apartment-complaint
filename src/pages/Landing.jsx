import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">

      <div className="overlay">

        <div className="hero-card">

          <div className="logo">
            🏢
          </div>

          <h1>
            GREEN VALLEY APARTMENTS
          </h1>

          <p className="title">
            Smart Apartment Complaint Management System
          </p>

          <p className="sub-text">
            Manage Complaints, Maintenance Requests
            and Resident Services Efficiently.
          </p>

          {/* Resident Access */}

          <div className="btn-group">

            <Link to="/register">
              <button className="register-btn">
                Register
              </button>
            </Link>

            <Link to="/login">
              <button className="login-btn">
                Resident Login
              </button>
            </Link>

          </div>

          {/* Management Access */}

          <div
            style={{
              marginTop: "20px"
            }}
          >

            <h2
              style={{
                color: "#1e3a8a",
                marginBottom: "15px"
              }}
            >
              Management Portal
            </h2>

            <div className="btn-group">

              <Link to="/admin-login">
                <button className="login-btn">
                  🔑 Admin Portal
                </button>
              </Link>

              <Link to="/staff-login">
                <button className="login-btn">
                  🛠 Staff Portal
                </button>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Landing;