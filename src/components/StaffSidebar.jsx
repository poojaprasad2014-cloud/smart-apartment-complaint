import React from "react";
import { Link, useNavigate } from "react-router-dom";

function StaffSidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("staffName");

    navigate("/", {
      replace: true
    });

  };

  return (

    <div className="admin-sidebar">

      <h2>🔧 Staff Panel</h2>

      <ul>

        <li>
          <Link to="/staff-dashboard">
            📋 My Complaints
          </Link>
        </li>

        <li>
          <button
            type="button"
            className="logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </li>

      </ul>

    </div>

  );

}

export default StaffSidebar;