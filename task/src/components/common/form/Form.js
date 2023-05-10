import React from 'react'
import "../../../assets/styles/index.scss"
import Input from '../inputs/Inputs'
const Form = (props) => {
    const {type, label, placeholder, d_none}=props
  return (
    <>
        <form>
          <div className="input_fields">
            <Input type={type} label={label} placeholder={placeholder} d_none={d_none}/>
          </div>
        </form>
    </>
  )
}

export default Form
