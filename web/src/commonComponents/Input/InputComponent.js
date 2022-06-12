import React from "react";

const InputComponent = ({ type, className,id,placeholder,required, onChange}) => {
  return (
    <>
      <input
        required
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </>
  );
};

export default InputComponent;
