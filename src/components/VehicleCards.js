import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import BookingForm from "./BookingVehicale/BookingForm";
import Bookchargers from "./BookingVehicale/Bookcharges";

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
const VehicleCards = () => {
  const data = [
    {
      img: "./vehicles/car1.jpg",
      parah: "Hyundai sonata 2021: Pries, Verbrauch, FOTOS, Techische Daten",
    },
    {
      img: "./vehicles/car2.jpg",
      parah: "Hyundai sonata 2021: Pries, Verbrauch, FOTOS, Techische Daten",
    },
    {
      img: "./vehicles/car3.jpg",
      parah: "Hyundai sonata 2021: Pries, Verbrauch, FOTOS, Techische Daten",
    },
    {
      img: "./vehicles/car4.jpg",
      parah: "Hyundai sonata 2021: Pries, Verbrauch, FOTOS, Techische Daten",
    },
  ];
  const [Steps, setSteps] = useState("1");
  const [Open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="row">
        <h1 className="pg-title p-tb10">Available Vehicle</h1>
        {data.map((value, index) => {
          return (
            <div class=" col-xl-3  col-md-6 col-sm-12">
              <div class="card text-center">
                <img class="card-img-top " src={value.img} alt="Card cap" />
                <div class="card-body">
                  <p class="card-title">{value.parah} </p>

                  <button onClick={handleClickOpen} className="btn btn-green ">
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
                    <BookingForm />
                    <div className="col-lg-6 "></div>
                    <div className="col-lg-6">
                      <DialogActions>
                        <button
                          onClick={() => setSteps("2")}
                          className="btn btn-green "
                        >
                          Book now
                        </button>
                      </DialogActions>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
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
              onClose={handleClose}
            ></BootstrapDialogTitle>

            <Bookchargers />

            <DialogActions>
              <button
                onClick={() => setSteps("1")}
                className="btn btn-outline-gray "
              >
                Cancel Booking
              </button>
            </DialogActions>
          </>
        ) : (
          ""
        )}
      </BootstrapDialog>
    </>
  );
};

export default VehicleCards;
