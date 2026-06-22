import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

function ManageComplaints() {

  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const savedComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    setComplaints(savedComplaints);

  }, []);

  const assignStaff = (id, staff) => {

    const updatedComplaints = complaints.map((item) =>
      item.id === id
        ? {
            ...item,
            assignedStaff: staff,
            status: staff ? "Assigned" : "Pending"
          }
        : item
    );

    setComplaints(updatedComplaints);

    localStorage.setItem(
      "complaints",
      JSON.stringify(updatedComplaints)
    );

    if (staff !== "") {
      alert(`Work Assigned To ${staff}`);
    }

  };

  const filteredComplaints = complaints.filter(
    (item) =>
      String(item.flatNo)
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.complaintType
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-content">

        <h1>Manage Complaints</h1>

        <input
          type="text"
          placeholder="Search by Flat No or Complaint Type"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "350px",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />

        <table className="complaint-table">

          <thead>

            <tr>
              <th>Flat No</th>
              <th>Complaint Type</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Assigned Staff</th>
            </tr>

          </thead>

          <tbody>

            {filteredComplaints.length > 0 ? (

              filteredComplaints.map((item) => (

                <tr key={item.id}>

                  <td>{item.flatNo}</td>

                  <td>{item.complaintType}</td>

                  <td>{item.description}</td>

                  <td>

                    <span
                      className={
                        item.priority === "Low"
                          ? "priority-low"
                          : item.priority === "Medium"
                          ? "priority-medium"
                          : item.priority === "High"
                          ? "priority-high"
                          : "priority-critical"
                      }
                    >
                      {item.priority}
                    </span>

                  </td>

                  <td>

                    {item.status === "Pending" && (
                      <span className="status-pending">
                        Pending
                      </span>
                    )}

                    {item.status === "Assigned" && (
                      <span className="status-progress">
                        Assigned
                      </span>
                    )}

                    {item.status === "In Progress" && (
                      <span className="status-progress">
                        In Progress
                      </span>
                    )}

                    {item.status === "Resolved" && (
                      <span className="status-resolved">
                        Resolved
                      </span>
                    )}

                    {item.status === "Not Resolved" && (
                      <span className="status-notresolved">
                        Not Resolved
                      </span>
                    )}

                  </td>

                  <td>

                    <select
                      value={item.assignedStaff || ""}
                      onChange={(e) =>
                        assignStaff(
                          item.id,
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Select Staff
                      </option>

                      <option value="Ravi">
                        Ravi
                      </option>

                      <option value="Arun">
                        Arun
                      </option>

                      <option value="Suresh">
                        Suresh
                      </option>

                    </select>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: "20px"
                  }}
                >
                  No Complaints Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ManageComplaints;