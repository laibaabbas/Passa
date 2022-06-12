import React from 'react'

const ReusableButton = ({text, type}) => {
  return (
   <>
    <button type={type} className="cs_form_btn">
              {text}
              </button>
   </>
  )
}

export default ReusableButton