import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function DeleteComplaint() {

  const navigate = useNavigate();

  const handleDelete = () => {

    const complaint = JSON.parse(
      localStorage.getItem("deleteComplaint")
    );

    const complaints = JSON.parse(
      localStorage.getItem("complaints")
    ) || [];

    const updatedComplaints = complaints.filter(
      (item) => item.id !== complaint.id
    );

    localStorage.setItem(
      "complaints",
      JSON.stringify(updatedComplaints)
    );

    alert("Complaint Deleted Successfully");

    navigate("/complaints");

  };

  const handleCancel = () => {

    navigate("/complaints");

  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="auth-card">

          <h2>Delete Complaint</h2>

          <p
            style={{
              textAlign: "center",
              marginBottom: "20px"
            }}
          >
            Are you sure you want to delete this complaint?
          </p>

          <button
            className="delete-btn"
            onClick={handleDelete}
            style={{
              width: "100%",
              marginBottom: "10px"
            }}
          >
            Confirm Delete
          </button>

          <button
            className="edit-btn"
            onClick={handleCancel}
            style={{
              width: "100%"
            }}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );

}

export default DeleteComplaint;