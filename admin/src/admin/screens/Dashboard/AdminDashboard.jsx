import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AdminDashboard.css";
import { useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Vahicles from "../../components/Vahicles/Vahicles";
import Bookings from '../../components/Bookings/Bookings'
import VehicleIssue from '../../components/VehicleIssue/VehicleIssue'
import ReturnVehicle from '../../components/ReturnVehicle/ReturnVehicle'
import Discount from '../../components/Discount/Discount'
const AdminDashboard = () => {
  const { section } = useParams();
  console.log(section);
  return (
    <div className="dashboard_screen">
      <div className="db_sidebar_section">
        <Sidebar />
      </div>
      <div className="db_main_section">
        {section === "categories" && <Categories />}
        {section === "vahicles" && <Vahicles />}
        {section === "booking" && <Bookings />}
        {section === "vehicleissue" && <VehicleIssue/>}
        {section === "returnvehicle" && <ReturnVehicle/>}
        {section === "discount" && <Discount/>}
      </div>
    </div>
  );
};

export default AdminDashboard;
