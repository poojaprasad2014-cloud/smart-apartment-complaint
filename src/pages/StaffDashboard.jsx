import React, { useEffect, useState } from "react";
import StaffSidebar from "../components/StaffSidebar";

function StaffDashboard() {

const [complaints, setComplaints] = useState([]);

useEffect(() => {


const loadComplaints = () => {

  const staffName =
    localStorage.getItem("staffName");

  const allComplaints =
    JSON.parse(
      localStorage.getItem("complaints")
    ) || [];

  const assignedComplaints =
    allComplaints.filter(
      (item) =>
        item.assignedStaff === staffName
    );

  setComplaints(assignedComplaints);

};

loadComplaints();

const interval = setInterval(
  loadComplaints,
  1000
);

return () =>
  clearInterval(interval);


}, []);

const updateStatus = (id, status) => {


const allComplaints =
  JSON.parse(
    localStorage.getItem("complaints")
  ) || [];

const updatedComplaints =
  allComplaints.map((item) =>
    item.id === id
      ? {
          ...item,
          status: status
        }
      : item
  );

localStorage.setItem(
  "complaints",
  JSON.stringify(updatedComplaints)
);

const staffName =
  localStorage.getItem("staffName");

const assignedComplaints =
  updatedComplaints.filter(
    (item) =>
      item.assignedStaff === staffName
  );

setComplaints(assignedComplaints);


};

return (


<div className="admin-layout">

  <StaffSidebar />

  <div className="admin-content">

    <h1>My Assigned Complaints</h1>

    <table className="complaint-table">

      <thead>
        <tr>
          <th>Flat No</th>
          <th>Complaint Type</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {complaints.length > 0 ? (

          complaints.map((item) => (

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

                {item.status === "Pending" && (
                  <span className="status-pending">
                    Pending
                  </span>
                )}

                {item.status === "Resolved" && (
                  <span className="status-resolved">
                    Resolved
                  </span>
                )}

              </td>

              <td>

                {item.status === "Assigned" && (

                  <button
                    className="start-btn"
                    onClick={() =>
                      updateStatus(
                        item.id,
                        "In Progress"
                      )
                    }
                  >
                    Start Work
                  </button>

                )}

                {item.status === "In Progress" && (

                  <div className="action-buttons">

                    <button
                      className="delete-btn"
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Pending"
                        )
                      }
                    >
                      Pending
                    </button>

                    <button
                      className="complete-btn"
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Resolved"
                        )
                      }
                    >
                      Complete
                    </button>

                  </div>

                )}

                {item.status === "Pending" && (

                  <button
                    className="start-btn"
                    onClick={() =>
                      updateStatus(
                        item.id,
                        "In Progress"
                      )
                    }
                  >
                    Continue Work
                  </button>

                )}

                {item.status === "Resolved" && (

                  <button
                    className="edit-btn"
                    onClick={() => {

                      const confirmRestart =
                        window.confirm(
                          "Restart this complaint?"
                        );

                      if (confirmRestart) {

                        updateStatus(
                          item.id,
                          "In Progress"
                        );

                      }

                    }}
                  >
                    Restart Work
                  </button>

                )}

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
              No Assigned Complaints
            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

</div>


);

}

export default StaffDashboard;
