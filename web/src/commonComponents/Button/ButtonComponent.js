import React from 'react'

const ButtonComponent = ({className, text, type}) => {
  return (
   <>
    <button 
    className={className}
    type={type}
    >
      {text}
    </button>
   </>
  )
}

export default ButtonComponent