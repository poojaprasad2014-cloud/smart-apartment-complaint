import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {

const [complaints, setComplaints] = useState([]);
const [residents, setResidents] = useState([]);

useEffect(() => {


const savedComplaints =
  JSON.parse(
    localStorage.getItem("complaints")
  ) || [];

const savedResidents =
  JSON.parse(
    localStorage.getItem("residents")
  ) || [];

setComplaints(savedComplaints);
setResidents(savedResidents);


}, []);

const totalComplaints =
complaints.length;

const pendingComplaints =
complaints.filter(
(item) =>
item.status === "Pending"
).length;

const inProgressComplaints =
complaints.filter(
(item) =>
item.status === "In Progress"
).length;

const resolvedComplaints =
complaints.filter(
(item) =>
item.status === "Resolved"
).length;

return (


<div className="admin-layout">

  <AdminSidebar />

  <div className="admin-content">

    <h1>Dashboard</h1>

    <div className="cards">

      <div className="card">
        <h3>Total Residents</h3>
        <h2>{residents.length}</h2>
      </div>

      <div className="card">
        <h3>Total Complaints</h3>
        <h2>{totalComplaints}</h2>
      </div>

      <div className="card">
        <h3>Pending Complaints</h3>
        <h2>{pendingComplaints}</h2>
      </div>

      <div className="card">
        <h3>In Progress</h3>
        <h2>{inProgressComplaints}</h2>
      </div>

      <div className="card">
        <h3>Resolved Complaints</h3>
        <h2>{resolvedComplaints}</h2>
      </div>

    </div>

  </div>

</div>


);

}

export default AdminDashboard;
