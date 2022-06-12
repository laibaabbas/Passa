import { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import Modal from "@mui/material/Modal";
import { DateRangePicker } from "react-date-range";

import "./DatePicker.css";

import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 510,
  bgcolor: "background.paper",
  boxShadow: 24,
};

const DatePicker = ({ setFormData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [StringToDates, setStringToDates] = useState([]);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // open close

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  const disableddates = ["06/07/2022", "06/08/2022", "06/09/2022"];
  const dates = disableddates.map((val) => new Date(val));
  // console.log(dates, "dates");
  // console.log(dates[dates.length - 1]);
  return (
    <>
      <div>
        <input
          className="cs_form_field"
          onClick={handleOpen}
          value={`${format(range[0].startDate, "dd-MM-yyyy")} to ${format(
            range[0].endDate,
            "dd-MM-yyyy"
          )}`}
          readOnly
          onClick={() => setOpen((open) => !open)}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div ref={refOne}>
              {open && (
                <>
                  <Box className="icon-container">
                    <CancelPresentationIcon onClick={handleClose} />
                  </Box>
                  <DateRangePicker
                  readOnly={true}
                    onChange={(item) => {
                      console.log(item);
                      setRange([item.selection]);
                      setFormData((pre)=>{
                        return{
                         ...pre,
                         startDate:format(item?.selection?.startDate,"dd-MM-yyyy"),
                         endDate:format(item?.selection?.endDate,"dd-MM-yyyy")
                        }
                      })
                    }}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    initialFocusedRange={""}
                    months={2}
                    direction="horizontal"
                    className="calendarElement"
                    //minDate={StringToDates[StringToDates.length - 1]}
                    //maxDate={addDays(new Date("06/15/2022"),+30)}
                    //disabledDates={StringToDates}
                  />
                </>
              )}
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default DatePicker;
