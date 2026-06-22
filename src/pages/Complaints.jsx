import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Complaints() {

const [complaints, setComplaints] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {


const savedComplaints =
  JSON.parse(
    localStorage.getItem("complaints")
  ) || [];

setComplaints(savedComplaints);


}, []);

const handleEdit = (item) => {


localStorage.setItem(
  "editComplaint",
  JSON.stringify(item)
);


};

const handleDeletePage = (item) => {


localStorage.setItem(
  "deleteComplaint",
  JSON.stringify(item)
);


};

const filteredComplaints =
complaints.filter(
(item) =>
String(item.flatNo)
.toLowerCase()
.includes(search.toLowerCase()) ||


    item.complaintType
      .toLowerCase()
      .includes(search.toLowerCase())
);


return (


<div className="dashboard">

  <Sidebar />

  <div className="main-content">

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >

      <h1>Complaint Management</h1>

      <Link to="/add-complaint">
        <button className="add-btn">
          Add Complaint
        </button>
      </Link>

    </div>

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
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {filteredComplaints.length > 0 ? (

          filteredComplaints.map((item) => (

            <tr key={item.id}>

              <td>{item.flatNo}</td>

              <td>{item.complaintType}</td>

              <td>{item.description}</td>

              <td>{item.priority}</td>

              <td>

                {item.status === "Resolved" ? (

                  <span
                    style={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    ✅ Work Completed
                  </span>

                ) : (

                  <span>
                    {item.status || "Pending"}
                  </span>

                )}

              </td>

              <td>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >

                  <Link to="/edit-complaint">
                    <button
                      className="edit-btn"
                      onClick={() =>
                        handleEdit(item)
                      }
                    >
                      Edit
                    </button>
                  </Link>

                  <Link to="/delete-complaint">
                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDeletePage(item)
                      }
                    >
                      Delete
                    </button>
                  </Link>

                </div>

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

export default Complaints;
