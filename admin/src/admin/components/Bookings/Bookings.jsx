
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "../../../axiosInstance";

import BookingTable from '../Table/BookingTable'

import { toast } from "react-toastify";




const Bookings = () => {
    const [BookingsData, setBookingsData] = useState()
    const [deleting, setDeleting] = useState(false);
    const [Approving, setApproving] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        getBookings();
    }, [])
    
    const getBookings = async () => {
        const res = await axios.get("vehicleBooking/list?limit=10&page=1", {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
          },
        });
        console.log(res,"booking");
        setBookingsData(()=>{
            return{
                BookingsCredentials:res?.data?.data
            }
        })
      };
      
      const UpdatingBooking = async(id)=>{
          try {
            setDeleting(id);
            let res = await axios({
              method: "put",
              url: "/vehicleBooking/" + id,
              headers: {
                authorization: `Bearer ${JSON.parse(
                  localStorage.getItem("adminToken")
                )}`,
              },
              data:{
                approvedStatus: "REJECTED",
                paymentStatus: "PENDING"
            }
            });
            console.log(res,"");
            if(res?.data?.type==="success"){
              getBookings();
              toast.success("Status Successfully Updated")
            }
            setDeleting(false);
          } catch (error) {
            alert(error.response.data.message);
          }
      } 
      const ApproveBooking = async(id,startdate, enddate, firstname, lastname)=>{
          console.log(id,startdate, enddate, firstname, lastname);
        try {
            setApproving(id);
            let res = await axios({
              method: "put",
              url: "/vehicleBooking/"+id,
              headers: {
                authorization: `Bearer ${JSON.parse(
                  localStorage.getItem("adminToken")
                )}`,
              },
              data:{
                approvedStatus: "APPROVED",
                paymentStatus: "PENDING"
            }
            });
            if(res?.data?.type==="success"){
              getBookings();
              toast.success("Status Successfully Updated")
              navigate("/admin-dashboard/vehicleissue",{
                state: 
                { 
                  bookingId: id, 
                  startDate:startdate,  
                  endDate:enddate,
                  firstName:firstname, 
                  lastName:lastname
                }})
              console.log(res,"check");
              console.log(id,"id");
            }
            setApproving(false);
          } catch (error) {
            alert(error.response.data.message);
          }
      }
  return (
   <>
   
    <div className="table_container">
   <BookingTable
    headings={["Name", "Booking Date", "End Date", "Approved Status", "Payment Status", "Booking Reason", "Approve", "Reject"]}
    BookingsData={BookingsData}
    UpdatingBooking={UpdatingBooking}
    ApproveBooking={ApproveBooking}
    deleting={deleting}
    Approving={Approving}
   />
    </div>
   </>
  )
}

export default Bookings