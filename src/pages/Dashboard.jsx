import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {

    const savedComplaints =
      JSON.parse(
        localStorage.getItem("complaints")
      ) || [];

    setComplaints(savedComplaints);

  }, []);

  const totalComplaints = complaints.length;

  const pendingComplaints =
    complaints.filter(
      (item) => item.status === "Pending"
    ).length;

  const resolvedComplaints =
    complaints.filter(
      (item) => item.status === "Resolved"
    ).length;

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Total Complaints</h3>
            <h2>{totalComplaints}</h2>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <h2>{pendingComplaints}</h2>
          </div>

          <div className="card">
            <h3>Resolved</h3>
            <h2>{resolvedComplaints}</h2>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;