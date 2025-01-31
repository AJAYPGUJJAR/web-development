import React from "react";
import AdminSidebar from "./AdminSidebar";

export default function Loader() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <div>Loading..</div>
    </div>
  );
}
