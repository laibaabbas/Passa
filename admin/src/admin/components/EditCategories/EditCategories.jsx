import React, { useState } from "react";
import "./EditCategories.css";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "../../../axiosInstance";
import Switch from "@mui/material/Switch";
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
const EditCategories = ({ onClose, data, setCategories }) => {
  const [category, setCategory] = useState({
    name: data.name,
    description: data.description,
    isActive: data.isActive,
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setCategory((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleActive = (e) => {
    setCategory((preVal) => {
      return { ...preVal, isActive: e.target.checked };
    });
  };
  const getCats = async () => {
    const res = await axios.get("/category", {
      headers: {
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("adminToken")
        )}`,
      },
    });
    setCategories(res.data.data);
  };
  const updateCategory = async () => {
    if (category.name === "" || category.description === "") {
      alert("All Fields are required");
    } else {
      let res = await axios({
        method: "put",
        url: "/category/" + data.id,
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("adminToken")
          )}`,
        },
        data: category,
      });
      getCats();
      onClose();
    }
  };
  return (
    <div className="edit_categories_modal" onClick={onClose}>
      <div className="edit_categories_box" onClick={(e) => e.stopPropagation()}>
        <div className="cs_form_innercontainer">
          <input
            type="text"
            placeholder="Category Name"
            className="cs_form_field"
            onChange={handleChange}
            name="name"
            value={category.name}
          />
          <input
            type="text"
            placeholder="Category Description"
            className="cs_form_field"
            onChange={handleChange}
            name="description"
            value={category.description}
          />
          <FormControlLabel
            onChange={handleActive}
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked={data.isActive} />}
            label="Is Active"
          />
          <div className="cs_form_btn" onClick={updateCategory}>
            Update Category
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategories;
