import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import ResuableInput from "../../../commonComponents/ResuableInput/ResuableInput";
import ResuableImageInput from "../../../commonComponents/ResuableImageInput/ResuableImageInput";
import ResuableSelectInput from "../../../commonComponents/ResuableSelectInput/ResuableSelectInput";

import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import { Formik, Field, Form, FieldArray } from "formik";

import "./Vehicleissue.css";

const Adjustments = { title: "", charges: "", adjustment: "" };

const dropdownoptions = [
  { text: "FULL", id: 0 },
  { text: "HALF", id: 1 },
  { text: "QUATER", id: 2 },
  { text: "HALF QUATER", id: 3 },
];
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const ReturnVehicle = () => {
  const [formData, setFormData] = useState({});
  const [Images, setImages] = useState([]);
  const [category, setCategory] = useState({
    name: "",
    description: "",
    isActive: false,
  });
 const [extraMilege, setExtraMilege] = useState({})
 const [ExtraDays, setExtraDays] = useState({})
  const location = useLocation();
  const _setStateImages = (key, value) => {
    const obj = {
      images: value,
      source: key,
    };
    const objtwo = {};
    objtwo[key] = value?.name;
    setImages([...Images, obj]);
    setFormData({ ...formData, ...objtwo });
  };
  /////extra milege object
  const _setExtraMilege =  (key, value) => {
    const obj = {};
    obj[key] = value;
    setExtraMilege({ ...extraMilege, ...obj });
  };
//////
/////extra days object
const _setExtraDays =  (key, value) => {
  const obj = {};
  obj[key] = value;
  setFormData({ ...formData, ...obj });
};
//////
const _setCleaningIssue =  (key, value) => {
  const obj = {};
  obj[key] = value;
  setFormData({ ...formData, ...obj });
};
//////
  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setFormData({ ...formData, ...obj });
  };
  const handleActive = (e) => {
    setCategory((preVal) => {
      return { ...preVal, isActive: e.target.checked };
    });
  };
  // console.log(location,"locationreturn")
  console.log(extraMilege,"extraMilege");

  return (
    <>
      <div className="categories_section">
        <div className="cs_form_container w-100">
          <div className="cs_form_innercontainer w-100 align-items-center">
            <div style={{ width: "80%" }} className="inline-input-container">
              <ResuableInput
                type="text"
                placeholder="Name"
                className="cs_form_field"
                onChange={(e) => _setState("name", e.target.value)}
                name="name"
              />
              <ResuableInput
                type="text"
                placeholder="Tenure"
                className="cs_form_field"
                name="odoMeterReading"
                onChange={(e) => _setState("Tenure", e.target.value)}
              />
              <ResuableInput
                type="text"
                placeholder="Date Today"
                className="cs_form_field"
                name="odoMeterReading"
                onChange={(e) => _setState("date", e.target.value)}
              />
            </div>
            <div style={{ width: "80%" }} className="inline-input-container">
              <ResuableInput
                type="text"
                placeholder="Previous Odo Meter Reading"
                className="cs_form_field"
                onChange={(e) =>
                  _setState("Prevodometerreading", e.target.value)
                }
                name="name"
              />
              <ResuableInput
                type="text"
                placeholder="Enter Odo Meter Reading"
                className="cs_form_field"
                name="odoMeterReading"
                onChange={(e) => _setState("Tenure", e.target.value)}
              />
              <ResuableInput
                type="text"
                placeholder="Previous fuel"
                className="cs_form_field"
                name="odoMeterReading"
                onChange={(e) => _setState("date", e.target.value)}
              />
            </div>
            <div className="vehicle-parts-img-text-container w-100">
              <ResuableSelectInput
                dropdownheading="Select Current Fuel Capicity"
                dropdownOptions={dropdownoptions}
              />
            </div>
            {/* imagesrow1 */}
            <div className="vehicle-parts-img-text-container p-t30">
              <span className="vehicle-parts-img-text">
                Upload Damaged Part Images
              </span>
            </div>
            <div className="inline-input-container w-100">
              <div style={{ width: "100%" }} className="flex-col">
                <div className="upload-img-container flex-row">
                  <ResuableImageInput
                    id="headlightOnereturnvehicle"
                    name="headlightOnereturnvehicleImage"
                    placeholder={
                      formData?.headlightOne
                        ? formData?.headlightOne
                        : "Headlight 1"
                    }
                    onChange={(e) =>
                      _setStateImages("headlightOne", e.target.files[0])
                    }
                  />
                  <ResuableImageInput
                    id="headlightTworeturnvehicle"
                    name="headlightTworeturnvehicleImage"
                    placeholder={
                      formData?.headlightTwo
                        ? formData?.headlightTwo
                        : "Headlight 2"
                    }
                    onChange={(e) =>
                      _setStateImages("headlightTwo", e.target.files[0])
                    }
                  />
                  <ResuableImageInput
                    id="Grillreturnvehicle"
                    name="GrillreturnvehicleImage"
                    placeholder={
                      formData?.Grill
                        ? formData?.Grill
                        : "Grill"
                    }
                    onChange={(e) =>
                      _setStateImages("Grill", e.target.files[0])
                    }
                  />
                  <ResuableImageInput
                    id="Bumperreturnvehicle"
                    name="BumperreturnvehicleImage"
                    placeholder={
                      formData?.Bumper
                        ? formData?.Bumper
                        : "Bumper"
                    }
                    onChange={(e) =>
                      _setStateImages("Bumper", e.target.files[0])
                    }
                  />
                </div>
              </div>
            </div>
            {/* imagesrow1 */}

            <div style={{ width: "100%" }} className="inline-input-container">
              <ResuableInput
                type="text"
                placeholder="Extra Mileage"
                className="cs_form_field"
                onChange={(e) =>
                  _setExtraMilege("souce", e.target.value)
                }
                name="extramilege"
              />
              <ResuableInput
                type="text"
                placeholder="Charges"
                className="cs_form_field"
                onChange={(e) =>
                  _setExtraMilege("charges", e.target.value)
                }
                name="charges"
              />
              <ResuableInput
                type="text"
                placeholder="Adjustment"
                className="cs_form_field"
                onChange={(e) =>
                  _setExtraMilege("adjustment", e.target.value)
                }
                name="adjustment"
              />
              {/* <ResuableInput
                type="text"
                placeholder="Extra Days"
                className="cs_form_field"
                name="odoMeterReading"
                onChange={(e) => _setState("Tenure", e.target.value)}
              />
             
              <FormControlLabel
            onChange={handleActive}
            control={
              <IOSSwitch defaultChecked={category.isActive} />
            }
            label="Cleaning Issue"
          /> */}
            </div>
            <div style={{ width: "100%" }} className="inline-input-container">
              <ResuableInput
                type="text"
                placeholder="Extra Days"
                className="cs_form_field"
                onChange={(e) =>
                 _setExtraDays("souce", e.target.value)
                }
                name="extradays"
              />
              <ResuableInput
                type="text"
                placeholder="Charges"
                className="cs_form_field"
                onChange={(e) =>
                 _setExtraDays("charges", e.target.value)
                }
                name="chargesextradays"
              />
              <ResuableInput
                type="text"
                placeholder="Adjustment"
                className="cs_form_field"
                onChange={(e) =>
                 _setExtraDays("adjustment", e.target.value)
                }
                name="adjustmentextradays"
              />
              {/* <ResuableInput
                type="text"
                placeholder="Extra Days"
                className="cs_form_field"
                name="odoMeterReading"
                onChange={(e) => _setState("Tenure", e.target.value)}
              />
             
              <FormControlLabel
            onChange={handleActive}
            control={
              <IOSSwitch defaultChecked={category.isActive} />
            }
            label="Cleaning Issue"
          /> */}
            </div>
            <div style={{ width: "100%" }} className="inline-input-container">
            <FormControlLabel
            sx={{paddingLeft:"2%"}}
            onChange={handleActive}
            control={
              <IOSSwitch defaultChecked={category.isActive} />
            }
            label="Cleaning Issue"
          />
              <ResuableInput
                type="text"
                placeholder="Charges"
                className="cs_form_field"
                onChange={(e) =>
                  _setCleaningIssue("Prevodometerreading", e.target.value)
                }
                name="name"
              />
              <ResuableInput
                type="text"
                placeholder="Adjustment"
                className="cs_form_field"
                onChange={(e) =>
                  _setCleaningIssue("Prevodometerreading", e.target.value)
                }
                name="name"
              />
              {/* <ResuableInput
                type="text"
                placeholder="Extra Days"
                className="cs_form_field"
                name="odoMeterReading"
                onChange={(e) => _setState("Tenure", e.target.value)}
              />
             
              <FormControlLabel
            onChange={handleActive}
            control={
              <IOSSwitch defaultChecked={category.isActive} />
            }
            label="Cleaning Issue"
          /> */}
            </div>
            <div className="vehicle-parts-img-text-container p-t30">
              <span className="vehicle-parts-img-text">Damages</span>
            </div>
            <Formik
              initialValues={{
                adjustmentData: [Adjustments],
              }}
              onSubmit={async (values) => {
                let arr = [];
                let res;
                console.log("my values", values);
                console.log(Images);
                console.log(formData);
                let form_data = new FormData();
                Images.map((val) => {
                  form_data.append("images", val.images);
                  arr = [...arr, { source: val?.source }];
                });
                for (var pair of form_data.entries()) {
                  console.log(pair[0]+ ', ' + pair[1]); 
              }
              }}
            >
              {({ values }) => (
                <Form autoComplete="off">
                  <div>
                    <FieldArray name="adjustmentData">
                      {({ push, remove }) => (
                        <React.Fragment>
                          {values.adjustmentData.map((_, index) => (
                            <div style={{ width: "100%" }}>
                              <div
                                style={{ width: "75%", margin: "auto" }}
                                className="flex-row"
                              >
                                <Field
                                  placeholder="Enter Title"
                                  className="cs_form_field m-r15 "
                                  name={`adjustmentData.${index}.title`}
                                  label="title"
                                />

                                <Field
                                  placeholder="Charges"
                                  className="cs_form_field m-r15 "
                                  name={`adjustmentData[${index}].charges`}
                                  type="number"
                                  label="charges (%)"
                                />
                                <Field
                                  placeholder="Adjustment"
                                  className="cs_form_field"
                                  name={`adjustmentData[${index}].adjustment`}
                                  type="number"
                                  label="adjustment (%)"
                                />

                                <div>
                                  {/* for future use */}
                                  {/* <button
                              onClick={() => remove(index)}
                            >
                              Delete
                            </button> */}
                                </div>
                              </div>
                            </div>
                          ))}

                          <div
                            className="w-50"
                            style={{
                              display: "flex",
                              margin: "auto",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              style={{ width: "25%" }}
                              className="cs_form_btn"
                              variant="contained"
                              onClick={() => push(Adjustments)}
                            >
                              Add More
                            </button>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            className="w-100"
                          >
                            <button
                              type="submit"
                              style={{ width: "30%" }}
                              className="cs_form_btn"
                              variant="contained"
                            >
                              Save Return
                            </button>
                          </div>
                        </React.Fragment>
                      )}
                    </FieldArray>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="table_container"></div>
      </div>
    </>
  );
};

export default ReturnVehicle;
