import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminSidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    navigate("/", {
      replace: true
    });

  };

  return (

    <div className="admin-sidebar">

      <h2>🏢 Admin Panel</h2>

      <ul>

        <li>
          <Link to="/admin-dashboard">
            📊 Dashboard
          </Link>
        </li>

        <li>
          <Link to="/manage-complaints">
            📝 Manage Complaints
          </Link>
        </li>

        <li>
          <Link to="/view-residents">
            👥 View Residents
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

export default AdminSidebar;