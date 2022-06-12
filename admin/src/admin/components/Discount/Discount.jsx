import React,{useState, useEffect} from 'react'

import ResuableInput from "../../../commonComponents/ResuableInput/ResuableInput";
import ReusableButton from "../../../commonComponents/ReusableButton/ReusableButton";
import ResuableSelectInput from "../../../commonComponents/ResuableSelectInput/ResuableSelectInput";

import DiscountTable from "../Table/DiscountTable";


import axios from "../../../axiosInstance";

import { toast } from "react-toastify";

const dropdownoptions = [
  { text: "VOLUNTEER", id: 0 },
  { text: "COMMUNITY", id: 1 },
  { text: "FINANCIAL", id: 2 },
];

const Discount = () => {
  const [formData, setFormData] = useState({});
  const [discountData, setDiscountData] = useState([])
  useEffect(() => {
    getDiscount();
  }, [])

  const getDiscount = async()=>{
    let response;
    try {
      response = await axios({
        method: "get",
        url: "/vehicle/discounts",
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("adminToken")
          )}`,
        },
      });
      setDiscountData(response?.data?.data)
      console.log(response, "res");
    } catch (error) {
      console.log(error);
    }
  }
  
  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setFormData({ ...formData, ...obj });
  };

  const SubmitData = async(e)=>{
     e.preventDefault();
    let response;
     try {
      response = await axios({
        method: "post",
        url: "/vehicle/discount",
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("adminToken")
          )}`,
        },
        data:{
          discount:parseInt(formData?.discount),
          userRole:formData?.userRole
        }
      });
     } catch (error) {
      
     }
     console.log(response);
  }
  
  console.log(formData);

  return (
   <>
   <form onSubmit={SubmitData}>
        <div className="categories_section">
          <div className="cs_form_container w-100">
            <div className="cs_form_innercontainer w-100 align-items-center">
              <div className="inline-input-container w-50">
                <ResuableInput
                  type="number"
                  placeholder="Discount"
                  className="cs_form_field"
                  onChange={(e) => _setState("discount", e.target.value)}
                  name="name"
                 // value={formData?.name}
                />
               <ResuableSelectInput
                  required={true}
                  dropdownheading="Select User Role"
                  dropdownOptions={dropdownoptions}
                  onChange={(e) => _setState("userRole", e.target.value)}
                />
              </div>
              <div style={{width:"20%"}}>
                <ReusableButton type="submit" text="Add Discount" />
              </div>
            </div>
          </div>
          <div className="table_container">
          <DiscountTable
       headings={["Role", "Type", "Discount", "Update"]}
       discountData={discountData}
      />
          </div>
        </div>
      </form>
     
     
 
   </>
  )
}

export default Discount