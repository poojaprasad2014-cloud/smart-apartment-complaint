import React from "react";
import Sidebar from "../components/Sidebar";

function Profile() {

  const user = JSON.parse(
    localStorage.getItem("resident")
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >

          <h1 style={{ marginBottom: "20px" }}>
            My Profile
          </h1>

          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "3px solid #2563eb",
              marginBottom: "20px"
            }}
          />

          <div
            style={{
              width: "400px",
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}
          >

            <h2
              style={{
                color: "#2563eb",
                marginBottom: "15px"
              }}
            >
              Profile Details
            </h2>

            <p>
              <strong>Name:</strong> {user?.name}
            </p>

            <p>
              <strong>Flat No:</strong> {user?.flatNo}
            </p>

            <p>
              <strong>Email:</strong> {user?.email}
            </p>

            <p>
              <strong>Phone:</strong> {user?.phone}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;