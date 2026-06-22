import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

function ViewResidents() {

  const [residents, setResidents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const savedResidents =
      JSON.parse(
        localStorage.getItem("residents")
      ) || [];

    setResidents(savedResidents);

  }, []);

  const filteredResidents =
    residents.filter(
      (item) =>
        item.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        String(item.flatNo)
          .toLowerCase()
          .includes(search.toLowerCase())
    );

  return (

    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-content">

        <h1>Resident Details</h1>

        <input
          type="text"
          placeholder="Search by Name or Flat No"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "400px",
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
              <th>Name</th>
              <th>Flat No</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>

          </thead>

          <tbody>

            {filteredResidents.length > 0 ? (

              filteredResidents.map((item, index) => (

                <tr key={index}>

                  <td>{item.name}</td>

                  <td>{item.flatNo}</td>

                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "20px"
                  }}
                >
                  No Residents Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ViewResidents;