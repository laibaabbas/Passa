import React,{useState, useEffect} from "react";

import TextField from '@mui/material/TextField';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';

import InputComponent from '../../commonComponents/Input/InputComponent'
import DatePicker from '../../commonComponents/DatePicker/DatePicker'
import { addDays } from 'date-fns'


const BookingForm = ({setFormData, VehicleData, formData}) => {
const [range, setRange] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
])
const _setState = (key,value)=>{
  const obj={}
  obj[key] = value;
  setFormData({...formData,...obj})
}


  return (
    <>
     
      <div class="col-lg-6">
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
         <DateRangePicker
         shouldDisableDate={disableWeekends}
          calendars={1}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
            setFormData({
              ...formData,
              startDate: moment(newValue[0]).format("DD-MM-YYYY"),
              endDate: moment(newValue[1]).format("DD-MM-YYYY")
            })
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <Box sx={{display:"flex", flexDirection:"column", width:"100%"}}> 
              <TextField sx={{marginBottom:"5%", background:"#f3f3f3"}} {...startProps} />
              <TextField sx={{marginBottom:"5%", background:"#f3f3f3", outline:"none"}} {...endProps} />
              </Box>
            </React.Fragment>
          )}
        />
      </div>
    </LocalizationProvider> */}

       
        <DatePicker
        range={range} 
        setRange={setRange}
        setFormData={setFormData}
        VehicleData={VehicleData?.filter((val)=>(val?.id===formData?.vehicleId))}
        />
      <InputComponent
         required={true}
       type="text"
       className="form-control"
       id="inputPhoneNumber"
       placeholder="Phone Number"
       onChange={(e)=>_setState("phoneNumber", e.target.value)}
      />
         <InputComponent
            required={true}
       type="email"
       className="form-control"
       id="inputEmail"
       placeholder="Email"
       onChange={(e)=>_setState("email", e.target.value)}
      />
      </div>
      <div class=" col-lg-6">
        <select
        required
         onChange={(e)=>_setState("bookingReason", e.target.value)}
        class="form-control form-select">
          <option value="">Select booking reason</option>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
        <InputComponent
           required={true}
      type="text"
      className="form-control"
      id="inputEmergancyNumber"
      placeholder="Emergency phone number"
       onChange={(e)=>_setState("emergencyPhoneNumber", e.target.value)}
      />
         <InputComponent
            required={true}
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="Address"
       onChange={(e)=>_setState("address", e.target.value)}
      />
       <InputComponent
      required={true}
      type="text"
      className="form-control"
      id="driverLicenseNumber"
      placeholder="Driver License Number"
       onChange={(e)=>_setState("driverLicenseNumber", e.target.value)}
      />

      </div>
    </>
  );
};

export default BookingForm;
