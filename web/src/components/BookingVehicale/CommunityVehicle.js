import React, {useState,useEffect} from "react";
import AppBar from "../../commonComponents/AppBar";
import VehicleCards from "./VehicleCards";

import { toast } from "react-toastify";

import axios from "../../axiosInstance";

const CommunityVehicle = () => {
useEffect(() => {
  getVehicles()
}, [])
const [VehicleData, setVehicleData] = useState([])
const [BillingData, setBillingData] = useState()
const [formData, setFormData] = useState({})
const getVehicles= async()=>{
  let response;
    try {
      response = await axios.get("/vehicle/");
      console.log(response);
      setVehicleData(response?.data?.data)
    } catch (e) {
      console.trace(e);
    }
}
const calculateRent = async()=>{
  console.log(formData);
  const obj={
    startDate:formData?.startDate, 
    endDate:formData?.endDate,
    vehicleId:formData?.vehicleId
  }
  let response;
    try {
      console.log(obj);
      response = await axios.post("/vehicleBooking/calculateRent",obj);
      setBillingData(response?.data?.data)
      console.log(response);
    } catch (e) {
      console.trace(e);
    }
}
const ProceedToPayment = async()=>{
  const obj = {
    ...formData,
    amountCharged:BillingData?.totalPriceWithSecurity,
    firstName: "Mujahid",
    lastName: "Rasool",
    nameOfDriver: "Fahad",
  }
  console.log(obj);
  let response;
  try {
    response = await axios.post("/vehicleBooking/addBooking",obj);
    console.log(response);
    if(response?.data?.type=="success"){
      toast.success("Data Saved Successfully")
      getVehicles()
    }
    if(response?.data?.type=="error"){
      toast.error(response?.data?.message)
    }
  } catch (e) {
    console.trace(e);
    toast.error(e?.response?.data?.message)
  }
}
  return (
    <>
      <AppBar />
      <section className="p-t120 ">
        <div className="wt-bnr-inr  m-b40 p-t100">
          <div className="container-lg">
            <div className="banner-title-name p-tb20">
              <h1 className="wt-title">Community Vehicle</h1>
            </div>

            <div className="banner-image">
              <img className="rounded" src="./vehicles/header-car.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="page-contant">
          <div className="container-lg">
            <div className="para">
              <p>
                With the help of Department of Multicultural Affairs, Office of
                the Premier and Cabinet, under Stronger Together grant program,
                PAASA purchased a 12-seater van for the Pakistani community in
                SA. This vehicle is for hire for the community members whenever
                they need it subject to the availability of the vehicle. Some of
                the purposes of this vehicle is to pick and drop newly arrived
                families from airport to their place and to provide transport
                assistance to the new migrants, elderly community members,
                socially isolated members, families and community groups.
              </p>
            </div>
          </div>
          <div className="container-lg">
            <VehicleCards
            VehicleData={VehicleData}
            formData={formData} 
            setFormData={setFormData}
            calculateRent={calculateRent}
            BillingData={BillingData}
            ProceedToPayment={ProceedToPayment}
            setVehicleData={setVehicleData}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityVehicle;
