import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Complaints from "./pages/Complaints";
import AddComplaint from "./pages/AddComplaint";
import EditComplaint from "./pages/EditComplaint";
import DeleteComplaint from "./pages/DeleteComplaint";
import Profile from "./pages/Profile";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageComplaints from "./pages/ManageComplaints";
import ViewResidents from "./pages/ViewResidents";

import StaffLogin from "./pages/StaffLogin";
import StaffDashboard from "./pages/StaffDashboard";


function App() {
return ( <BrowserRouter>


  <Routes>

    <Route path="/"element={<Landing />}/>

    <Route path="/register"element={<Register />}/>

    <Route path="/login"element={<Login />}/>

    <Route path="/dashboard"element={<Dashboard />}/>

    <Route path="/complaints"element={<Complaints />}/>

    <Route path="/add-complaint"element={<AddComplaint />}/>

    <Route path="/edit-complaint"element={<EditComplaint />}/>

    <Route path="/delete-complaint"element={<DeleteComplaint />}/>

    <Route path="/profile"element={<Profile />}/>

    <Route path="/admin-login"element={<AdminLogin />}/>

    <Route path="/admin-dashboard"element={<AdminDashboard />}/>

    <Route path="/manage-complaints"element={<ManageComplaints />}/>

    <Route path="/view-residents"element={<ViewResidents />}/>

    <Route path="/staff-login" element={<StaffLogin />} />
    <Route path="/staff-dashboard" element={<StaffDashboard />} />

   

  </Routes>

</BrowserRouter>


);
}

export default App;
