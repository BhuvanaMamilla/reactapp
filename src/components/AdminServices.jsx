import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import AdminRegister from "../components/AdminRegister";
import AddCourses from "../components/AddCourses";
import Display from "../components/Display";
import CourseAdd from "../components/CourseAdd";
import Temp from "../components/Temp";
import DisplayUsers from "../components/DisplayUsers";
import "../css/AdminServices.css";
import Updateuser from "./Updateuser";

const AdminServices = () => {
  const [view, setView] = useState("temp");

  const renderContent = () => {
    switch (view) {
      case "DisplayUsers":
        return <DisplayUsers setView={setView} />;
      case "courseAdd":
        return <CourseAdd />;
      case "UserAdd":
        return <AdminRegister />;
      case "display":
        return <Display setView={setView} />;
      case "Updateuser":
        return <Updateuser />;

      default:
        return <Temp />;
    }
  };

  return (
    <div>
      <Navbar2 setView={setView} />
      <div className="admin-content">{renderContent()}</div>
    </div>
  );
};

export default AdminServices;
