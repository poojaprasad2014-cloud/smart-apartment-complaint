import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function AddComplaint() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    flatNo: "",
    complaintType: "",
    description: "",
    priority: ""
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
      !formData.flatNo ||
      !formData.complaintType ||
      !formData.description ||
      !formData.priority
    ) {
      alert("Please Fill All Fields");
      return;
    }

    const complaints =
      JSON.parse(
        localStorage.getItem("complaints")
      ) || [];

    const newComplaint = {
      id: Date.now(),
      flatNo: formData.flatNo,
      complaintType: formData.complaintType,
      description: formData.description,
      priority: formData.priority,
      assignedStaff: "",
      status: "Pending"
    };

    complaints.push(newComplaint);

    localStorage.setItem(
      "complaints",
      JSON.stringify(complaints)
    );

    alert("Complaint Added Successfully");

    setFormData({
      flatNo: "",
      complaintType: "",
      description: "",
      priority: ""
    });

    navigate("/complaints");

  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <h1>Add Complaint</h1>

        <form
          className="complaint-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="flatNo"
            placeholder="Enter Flat Number"
            value={formData.flatNo}
            onChange={handleChange}
          />

          <input
            type="text"
            name="complaintType"
            placeholder="Enter Complaint Type"
            value={formData.complaintType}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="">
              Select Priority
            </option>

            <option value="Low">
              Low
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="High">
              High
            </option>

            <option value="Critical">
              Critical
            </option>
          </select>

          <button
            type="submit"
            className="add-btn"
          >
            Save Complaint
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddComplaint;