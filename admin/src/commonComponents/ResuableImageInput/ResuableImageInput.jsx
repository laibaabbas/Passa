import React from 'react'
import UploadSVG from '../../assets/Upload.svg'
import './ReusableImageInput.css'

const ResuableImageInput = ({placeholder, onChange, id, name, required}) => {
  return (
   <>
    <div
          className="pa_profile_section_input_container"
          style={{
            borderRadius: "20px",
          }}
        >
          <div className="pa_profile_section_input_input cs_form_field">
            <label className="upload-pic-label" htmlFor={id}>
              <input  onChange={onChange}  type="file" accept="image/*" hidden id={id} name={name}/>
              <div className="upload-img-text-cont">
                <span className="upload-img-text">{placeholder}</span>
                <img src={UploadSVG}/>
              </div>
            </label>
          </div>
        </div>
   </>
  )
}

export default ResuableImageInput