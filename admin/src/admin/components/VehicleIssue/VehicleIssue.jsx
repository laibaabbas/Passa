import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import axios from "../../../axiosInstance";

import ResuableInput from "../../../commonComponents/ResuableInput/ResuableInput";
import ResuableImageInput from "../../../commonComponents/ResuableImageInput/ResuableImageInput";
import ResubaleSpanTag from "../../../commonComponents/ReusableSpanText/ResubaleSpanTag";
import ResuableSelectInput from "../../../commonComponents/ResuableSelectInput/ResuableSelectInput";
import ReusableButton from "../../../commonComponents/ReusableButton/ReusableButton";

import "./Vehicleissue.css";
import { toast } from "react-toastify";

const dropdownoptions = [
  { text: "FULL", id: 0 },
  { text: "HALF", id: 1 },
  { text: "QUATER", id: 2 },
  { text: "HALF QUATER", id: 3 },
];
const VehicleIssue = ({ route }) => {
  const [formData, setFormData] = useState({});
  const [Images, setImages] = useState([]);
  const [responseImages, setResponseImages] = useState([]);
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    getIdForVehicleIssue();
    setFormData((pre) => {
      return {
        ...pre,
        name: location?.state?.firstName,
        startDate: location?.state?.startDate,
        endDate: location?.state?.endDate,
        bookingId: location?.state?.bookingId,
      };
    });
  }, [location]);

  const getIdForVehicleIssue = async () => {
    if (location?.state?.VehicleId) {
      let res;
      try {
        res = await axios({
          method: "get",
          url: "/vehicleIssueReturn/issue/" + location?.state?.VehicleId,
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
          },
        });
        console.log(res, "res");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
  const _setState = (key, value) => {
    const obj = {};
    obj[key] = value;
    setFormData({ ...formData, ...obj });
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    let arr = [];
    let res;
    let response;
    let form_data = new FormData();
    Images.map((val) => {
      form_data.append("images", val.images);
      arr = [...arr, { source: val?.source }];
    });
    try {
      res = await axios({
        method: "post",
        url: "/vehicleIssueReturn/uploadImages/",
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("adminToken")
          )}`,
        },
        data: form_data,
      });
    } catch (error) {
      alert(error.res.data.message);
    }
    try {
      const imageurlarray = res?.data?.data?.successImages.map((val) => {
        return {
          url: val?.url,
        };
      });
      let concatedarray = arr.map((item, i) => Object.assign({}, item, imageurlarray[i]));
      response = await axios({
        method: "post",
        url: "/vehicleIssueReturn/createIssue/",
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("adminToken")
          )}`,
        },
        data: {
          images: concatedarray,
          bookingId: formData?.bookingId,
          name: formData?.name,
          odoMeterReading: parseInt(formData?.odoMeterReading),
          description: "To be Booked",
          fuelCapacity: formData?.fuelCapacity,
        },
      });
      if (response?.data?.type == "success") {
        toast.success("Vehicle Issued Successfully");
        console.log(response);
        navigate("/admin-dashboard/returnvehicle",{
          state: response?.data?.data
        })
      }
    } catch (err) {
      toast.error(err);
    }
  };
 
  return (
    <>
      <form onSubmit={SubmitData}>
        <div className="categories_section">
          <div className="cs_form_container w-100">
            <div className="cs_form_innercontainer w-100 align-items-center">
              <div className="inline-input-container w-50">
                <ResuableInput
                  type="text"
                  placeholder="Name"
                  className="cs_form_field"
                  onChange={(e) => _setState("name", e.target.value)}
                  name="name"
                  value={formData?.name}
                />
                <ResuableInput
                  required={true}
                  type="number"
                  placeholder="Odo Meter Reading"
                  className="cs_form_field"
                  name="odoMeterReading"
                  value={formData?.odoMeterReading}
                  onChange={(e) => _setState("odoMeterReading", e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="inline-input-container w-50"
              >
                <ResuableImageInput
                  id="odoimgpicker"
                  name="odoMeterImage"
                  placeholder={
                    formData?.odoMeterImage
                      ? formData?.odoMeterImage
                      : "odoMeterImage"
                  }
                  onChange={(e) =>
                    _setStateImages("odoMeterImage", e.target.files[0])
                  }
                />
                <input
                  style={{ width: "47%" }}
                  type="text"
                  className="cs_form_field"
                  value={`${formData?.startDate?formData?.startDate:""} ${formData?.startDate&&formData?.endDate?"to":""}  ${formData?.endDate?formData?.endDate:""}`}
                />
              </div>

              <div className="vehicle-parts-img-text-container w-100">
                <ResuableSelectInput
                  required={true}
                  dropdownheading="Select Fuel Capicity"
                  dropdownOptions={dropdownoptions}
                  onChange={(e) => _setState("fuelCapacity", e.target.value)}
                />
              </div>
              {/* imagesrow1 */}
              <div className="vehicle-parts-img-text-container p-t30">
                <span className="vehicle-parts-img-text">
                  Vehicle Part Images
                </span>
              </div>
              <div className="inline-input-container w-100">
                <div className="flex-col">
                  <ResubaleSpanTag text="Top" />
                  <div className="upload-img-container flex-row">
                    <ResuableImageInput
                      id="topRoofimgpicker"
                      name="topRoofImage"
                      placeholder={
                        formData.topRoof ? formData.topRoof : "Top Roof"
                      }
                      onChange={(e) =>
                        _setStateImages("topRoof", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="topBonnetimgpicker"
                      name="topBonnetImage"
                      placeholder={
                        formData.topBonnet ? formData.topBonnet : "Top Bonnet"
                      }
                      onChange={(e) =>
                        _setStateImages("topBonnet", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      placeholder={
                        formData.topBoot ? formData.topBoot : "Top Boot"
                      }
                      id="topBootimgpicker"
                      name="topBootImage"
                      onChange={(e) =>
                        _setStateImages("topBoot", e.target.files[0])
                      }
                    />
                  </div>
                </div>
                <div className="flex-col">
                  <ResubaleSpanTag text="Front" />
                  <div className="upload-img-container flex-row">
                    <ResuableImageInput
                      id="headlightOneimgpicker"
                      name="headlightOneImage"
                      placeholder={
                        formData.headlightOne
                          ? formData.headlightOne
                          : "Headlight 1"
                      }
                      onChange={(e) =>
                        _setStateImages("headlightOne", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="headlightTwoimgpicker"
                      name="headlightTwoImage"
                      placeholder={
                        formData.headlightTwo
                          ? formData.headlightTwo
                          : "Headlight 2"
                      }
                      onChange={(e) =>
                        _setStateImages("headlightTwo", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="Grillimgpicker"
                      name="GrillImage"
                      placeholder={formData.Grill ? formData.Grill : "Grill"}
                      onChange={(e) =>
                        _setStateImages("Grill", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="Bumperimgpicker"
                      name="BumperImage"
                      placeholder={formData.Bumper ? formData.Bumper : "Bumper"}
                      onChange={(e) =>
                        _setStateImages("Bumper", e.target.files[0])
                      }
                    />
                  </div>
                </div>
              </div>
              {/* imagesrow1 */}
              {/* imagesrow2 */}
              <div className="inline-input-container w-100">
                <div className="flex-col">
                  <ResubaleSpanTag text="Left Side" />
                  <div className="upload-img-container flex-row">
                    <ResuableImageInput
                      id="fenderOneLeftSideimgpicker"
                      name="fenderOneLeftSideImage"
                      placeholder={
                        formData.fenderOneLeftSide
                          ? formData.fenderOneLeftSide
                          : "Fender 1"
                      }
                      onChange={(e) =>
                        _setStateImages("fenderOneLeftSide", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="fenderTwoLeftSideimgpicker"
                      name="fenderTwoLeftSideImage"
                      placeholder={
                        formData.fenderTwoLeftSide
                          ? formData.fenderTwoLeftSide
                          : "Fender 2"
                      }
                      onChange={(e) =>
                        _setStateImages("fenderTwoLeftSide", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="frontDoorLeftSideimgpicker"
                      name="frontDoorLeftSideImage"
                      placeholder={
                        formData.frontDoorLeftSide
                          ? formData.frontDoorLeftSide
                          : "Front Door"
                      }
                      onChange={(e) =>
                        _setStateImages("frontDoorLeftSide", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="backDoorLeftSideimgpicker"
                      name="backDoorLeftSideImage"
                      placeholder={
                        formData.backDoorLeftSide
                          ? formData.backDoorLeftSide
                          : "Back Door"
                      }
                      onChange={(e) =>
                        _setStateImages("backDoorLeftSide", e.target.files[0])
                      }
                    />
                  </div>
                </div>
                <div className="flex-col">
                  <ResubaleSpanTag text="Right Side" />
                  <div className="upload-img-container flex-row">
                    <ResuableImageInput
                      id="fenderOneRightSideimgpicker"
                      name="fenderOneRightSideImage"
                      placeholder={
                        formData.fenderOneRightSide
                          ? formData.fenderOneRightSide
                          : "Fender 1"
                      }
                      onChange={(e) =>
                        _setStateImages("fenderOneRightSide", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="fenderTwoRightSideimgpicker"
                      name="fenderTwoRightSideImage"
                      placeholder={
                        formData.fenderTwoRightSide
                          ? formData.fenderTwoRightSide
                          : "Fender 2"
                      }
                      onChange={(e) =>
                        _setStateImages("fenderTwoRightSide", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="frontDoorRightSideimgpicker"
                      name="frontDoorRightSideImage"
                      placeholder={
                        formData.frontDoorRightSide
                          ? formData.frontDoorRightSide
                          : "Front Door"
                      }
                      onChange={(e) =>
                        _setStateImages("frontDoorRightSide", e.target.files[0])
                      }
                    />
                    <ResuableImageInput
                      id="backDoorRightSideimgpicker"
                      name="backDoorRightSideImage"
                      placeholder={
                        formData.backDoorRightSide
                          ? formData.backDoorRightSide
                          : "Back Door"
                      }
                      onChange={(e) =>
                        _setStateImages("backDoorRightSide", e.target.files[0])
                      }
                    />
                  </div>
                </div>
              </div>
              {/* imagesrow2 */}
              {/* imagesrow3 */}
              <div className="inline-input-container w-100">
                <div className="upload-img-container flex-row">
                  <ResuableImageInput
                    id="BacklightOneimgpicker"
                    name="BacklightOneImage"
                    placeholder={
                      formData.Backlight1 ? formData.Backlight1 : "Backlight 1"
                    }
                    onChange={(e) =>
                      _setStateImages("Backlight1", e.target.files[0])
                    }
                  />
                  <ResuableImageInput
                    id="BacklightTwoimgpicker"
                    name="BacklightTwoImage"
                    placeholder={
                      formData.Backlight2 ? formData.Backlight2 : "Backlight 2"
                    }
                    onChange={(e) =>
                      _setStateImages("Backlight2", e.target.files[0])
                    }
                  />
                  <ResuableImageInput
                    id="Bumperimgpicker"
                    name="BumperImage"
                    placeholder={formData.Bumper ? formData.Bumper : "Bumper"}
                    onChange={(e) =>
                      _setStateImages("Bumper", e.target.files[0])
                    }
                  />
                </div>
                <div className="upload-img-container flex-row">
                  <ResuableImageInput
                    id="Miscimgpicker"
                    name="MiscImage"
                    placeholder={formData.Misc ? formData.Misc : "Misc"}
                    onChange={(e) => _setStateImages("Misc", e.target.files[0])}
                  />
                  <ResuableImageInput
                    id="MiscOneimgpicker"
                    name="MiscOneImage"
                    placeholder={formData.Miscone ? formData.Miscone : "Misc"}
                    onChange={(e) =>
                      _setStateImages("Miscone", e.target.files[0])
                    }
                  />
                  <ResuableImageInput
                    id="MiscTwoimgpicker"
                    name="MiscTwoImage"
                    placeholder={formData.Misctwo ? formData.Misctwo : "Misc"}
                    onChange={(e) =>
                      _setStateImages("Misctwo", e.target.files[0])
                    }
                  />
                  <ResuableImageInput
                    id="MiscThreeimgpicker"
                    name="MiscThreeImage"
                    placeholder={
                      formData.MiscThree ? formData.MiscThree : "Misc"
                    }
                    onChange={(e) =>
                      _setStateImages("MiscThree", e.target.files[0])
                    }
                  />
                </div>
              </div>

              {/* imagesrow3 */}
              <div style={{width:"30%"}}>
                <ReusableButton type="submit" text=" Confirm Issue Vehicle" />
              </div>
            </div>
          </div>
          <div className="table_container"></div>
        </div>
      </form>
    </>
  );
};

export default VehicleIssue;
