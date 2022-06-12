import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import BookingForm from "./BookingForm";
import Bookchargers from "./Bookcharges";

import { toast } from "react-toastify";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}

      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            // color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const VehicleCards = ({VehicleData, formData, setFormData, calculateRent,BillingData,ProceedToPayment}) => {

  const [Steps, setSteps] = useState("0");
  const [Open, setOpen] = useState(false);
  

  const handleClickOpen = (key,value) => {
    setOpen(true);
    const obj={}
    obj[key] = value;
    setFormData({...formData,...obj})
  };
  const handleClose = () => {
    setOpen(false);
    setSteps("1");
  };

  console.log(VehicleData,"loVehi");
  return (
    <>
      <div className="row">
        <h1 className="pg-title">Available Vehicle</h1>
        {VehicleData?.map((value, index) => {
          return (
            <div class=" col-xl-3 col-sm-6 col-12">
              <div class="card text-center">
                <img class="card-img-top " src={value?.image} alt="Card cap" />
                <div class="card-body">
                  <p class="card-title">{value?.description} </p>

                  <button id={value?.id} onClick={()=>handleClickOpen("vehicleId",value?.id)} className="btn btn-green ">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={Open}
      >
        {Steps === "1" ? (
          <>
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            ></BootstrapDialogTitle>
            <div className="long-form ">
              <div className="container-lg">
                <div className="form-heading">
                  <h4>Book a Vahicle</h4>
                </div>
                <form>
                  <div class="row">
                    <BookingForm 
                    formData={formData}
                    setFormData={setFormData}
                    VehicleData={VehicleData}
                    />
                    {/* <div className="col-lg-6 ">
                      <input
                        type="text"
                        class="form-control "
                        id="inputDiverName"
                        placeholder="Name of driver"
                      />
                    </div> */}
                    <div className="col-lg-6">
                      <DialogActions>
                        <button
                          onClick={() => {
                            if(formData?.isAcceptedTerms){
                              setSteps("2");
                              calculateRent();
                            }
                            else{
                              toast.error("Please accept the terms and conditons")
                            }
                           
                          }
                          }
                          className="btn btn-green "
                        >
                          Book now
                        </button>
                      </DialogActions>
                      <div class="form-check">
                        <input
                        required
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                          onChange={(e)=>{
                            setFormData({
                            ...formData,
                            isAcceptedTerms: e.target.checked
                          })}}
                        />
                        <label class="form-check-label " for="defaultCheck1">
                          <a href="/">Term & Conditions</a>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {Steps === "2" ? (
          <>
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={() => setSteps("1")}
            ></BootstrapDialogTitle>

            <Bookchargers 
            BillingData={BillingData}
            ProceedToPayment={ProceedToPayment}
            />
            <div className="cnl-contain">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <DialogActions>
                      <button onClick={handleClose} className="btn  cancel-btn">
                        Cancel Booking
                      </button>
                    </DialogActions>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </BootstrapDialog>
    </>
  );
};

export default VehicleCards;
