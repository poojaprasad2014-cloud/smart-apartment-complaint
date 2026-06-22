import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function EditComplaint() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    flatNo: "",
    complaintType: "",
    description: "",
    priority: "",
    status: "Pending"
  });

  useEffect(() => {

    const complaint = JSON.parse(
      localStorage.getItem("editComplaint")
    );

    if (complaint) {
      setFormData(complaint);
    }

  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = (e) => {

    e.preventDefault();

    let complaints =
      JSON.parse(
        localStorage.getItem("complaints")
      ) || [];

    complaints = complaints.map((item) =>
      item.id === formData.id
        ? formData
        : item
    );

    localStorage.setItem(
      "complaints",
      JSON.stringify(complaints)
    );

    alert("Complaint Updated Successfully");

    navigate("/complaints");
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <h1>Edit Complaint</h1>

        <form
          className="complaint-form"
          onSubmit={handleUpdate}
        >

          <input
            type="text"
            name="flatNo"
            value={formData.flatNo}
            onChange={handleChange}
          />

          <input
            type="text"
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>

          <button type="submit">
            Update Complaint
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditComplaint;