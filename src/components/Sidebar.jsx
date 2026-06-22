import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    navigate("/", {
      replace: true
    });

  };

  return (

    <div className="admin-sidebar">

      <h2>🏢 Resident Panel</h2>

      <ul>

        <li>
          <Link to="/dashboard">
            📊 Dashboard
          </Link>
        </li>

        <li>
          <Link to="/complaints">
            📝 Complaints
          </Link>
        </li>

        <li>
          <Link to="/profile">
            👤 Profile
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

export default Sidebar;