import React from "react";
import "./ReusableSelectInput.css";
const ResuableSelectInput = ({ dropdownheading, dropdownOptions, onChange, required }) => {
  return (
    <>
      <select required onChange={onChange} className="select" name="cars" id="cars">
        <option value="">{dropdownheading}</option>
        {dropdownOptions?.map((value) => (
          <option value={value?.text}>{value?.text}</option>
        ))}
      </select>
    </>
  );
};

export default ResuableSelectInput;
