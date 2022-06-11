import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

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
            color: (theme) => theme.palette.grey[500],
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

const ReserveTicket = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="btn btn-green res-ticket " onClick={handleClickOpen}>
        Reserve your ticket
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>

        <div className="long-form donation-dialog signUp">
          <div className="container-lg">
            <div className="form-heading">
              <h4>Reserve your ticket</h4>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <span className="SignUpAs">Ticket type</span>
                </div>
                <div className="col-lg-12">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label
                      class="form-check-label radio-label"
                      for="inlineRadio1"
                    >
                      Individual
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label
                      class="form-check-label radio-label"
                      for="inlineRadio2"
                    >
                      Family
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div className="col-lg-12">
                  <select required class="form-control form-select">
                    <option value="">Sufi Nights by PAASA</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <select required class="form-control form-select">
                    <option value="">No of tickets</option>
                    <option value="1">11</option>
                    <option value="2">12</option>
                    <option value="3">13</option>
                  </select>
                  <div class="form-check  ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label " for="defaultCheck1">
                      <a href="/">Term & Conditions</a>
                    </label>
                  </div>
                  <button onClick={handleClose} className="btn btn-green ">
                    Proceed to payment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </BootstrapDialog>
    </>
  );
};

export default ReserveTicket;
