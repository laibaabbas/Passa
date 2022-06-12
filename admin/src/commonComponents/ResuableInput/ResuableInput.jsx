import React from 'react'

const ResuableInput = ({ type, className,id,placeholder,required, onChange, value}) => {
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
        value={value}
      />
   </>
  )
}

export default ResuableInput