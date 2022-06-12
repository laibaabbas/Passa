import React, { useState, useEffect } from "react";
import CustomizedTables from "../Table/Table";
import axios from "../../../axiosInstance";
import "./Vahicles.css";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import VahicleTable from "../Table/VahicleTable";
const Vahicles = () => {
  const [vahicles, setVahicles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [Images, setImages] = useState()
  const [vahicle, setVahicle] = useState({
    name: "",
    description: "",
    seatingCapacity: "",
    model: "",
    categoryId: "",
    dailyRent: "",
    securityDeposit: "",
    isAvailable: true,
    plate: "",
  });
  const getVahicles = async () => {
    const res = await axios.get("/vehicle", {
      headers: {
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("adminToken")
        )}`,
      },
    });
    console.log(vahicles);
    setVahicles(res.data.data);
  };
  const getCats = async () => {
    const res = await axios.get("/category", {
      headers: {
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("adminToken")
        )}`,
      },
    });
    console.log(categories);
    setCategories(res.data.data);
    setVahicle((preVal) => {
      return {
        ...preVal,
        categoryId: res.data.data[0].id,
      };
    });
  };
  const addVahicle = async () => {
    if (
      vahicle.name === "" ||
      vahicle.description === "" ||
      vahicle.model === "" ||
      vahicle.plate === ""
    ) {
      alert("All Fields are required");
    } else {
      try {
        let res = await axios({
          method: "post",
          url: "/vehicle",
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("adminToken")
            )}`,
          },
          data: {
            name: vahicle.name,
            description: vahicle.description,
            seatingCapacity: parseInt(vahicle.seatingCapacity),
            model: vahicle.model,
            categoryId: vahicle.categoryId,
            dailyRent: parseInt(vahicle.dailyRent),
            securityDeposit: parseInt(vahicle.securityDeposit),
            isAvailable: vahicle.isAvailable,
            plate: vahicle.plate,
          },
        });
        getVahicles();
        setVahicle({
          name: "",
          description: "",
          seatingCapacity: "",
          model: "",
          categoryId: "",
          dailyRent: "",
          securityDeposit: "",
          isAvailable: true,
          plate: "",
        });
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    getCats();
    getVahicles();
  }, []);
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
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
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
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

  const handleChange = (e) => {
    let { name, value } = e.target;
    setVahicle((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleActive = (e) => {
    setVahicle((preVal) => {
      return { ...preVal, isAvailable: e.target.checked };
    });
  };
  console.log(Images);
  return (
    <div>
      <div className="cs_form_container">
        <div className="vs_form_innercontainer">
          <div className="cs_form_innercontainerleft">
            <input
              type="text"
              placeholder="Vahicle Name"
              className="cs_form_field"
              name="name"
              onChange={handleChange}
              value={vahicle.name}
            />
            <input
              type="text"
              placeholder="Vahicle Description"
              className="cs_form_field"
              name="description"
              onChange={handleChange}
              value={vahicle.description}
            />
            <input
              type="number"
              placeholder="Seating Capacity"
              className="cs_form_field"
              name="seatingCapacity"
              onChange={handleChange}
              value={vahicle.seatingCapacity}
            />
            <input
              type="number"
              placeholder="Model"
              className="cs_form_field"
              name="model"
              onChange={handleChange}
              value={vahicle.model}
            />
            <FormControlLabel
              onChange={handleActive}
              control={
                <IOSSwitch sx={{ m: 1 }} defaultChecked={vahicle.isAvailable} />
              }
              label="Is Available"
            />
          </div>
          <div className="cs_form_innercontainerright">
            <input
              type="text"
              placeholder="Plate"
              className="cs_form_field"
              onChange={handleChange}
              value={vahicle.plate}
              name="plate"
            />
            <select
              className="cs_form_field"
              name="categoryId"
              onChange={handleChange}
              defaultValue={vahicle.categoryId}
            >
              <option>Type</option>
              {categories.map((cat) => {
                return <option value={cat.id}>{cat.name}</option>;
              })}
            </select>
            <input
              type="text"
              placeholder="Daily Rent"
              className="cs_form_field"
              name="dailyRent"
              onChange={handleChange}
              value={vahicle.dailyRent}
            />
            <input
              type="text"
              placeholder="Security Deposit"
              className="cs_form_field"
              name="securityDeposit"
              onChange={handleChange}
              value={vahicle.securityDeposit}
            />
            <input type="file"  onChange={(e)=>{
              setImages((pre)=>{
                return{
                  ...pre,
                  ["images"]:"hdferuyueyruyre"
                }
              })
            }
              }/>
            <div className="cs_form_btn left-50" onClick={addVahicle}>
              Add Vehicle
            </div>
          </div>
        </div>
      </div>
      <div className="table_container">
        <VahicleTable
          headings={["Name", "Description", "Available", "Update", "Delete"]}
          data={vahicles}
          setVahicles={setVahicles}
        />
      </div>
    </div>
  );
};

export default Vahicles;
