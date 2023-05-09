import React from 'react'
import "../../../assets/styles/index.scss"
import Input from '../inputs/Inputs'
const Form = (props) => {
    const {type, label}=props
  return (
    <>
        <form>
          <div className="input_fields">
            <Input type={type} label={label}/>
          </div>
        </form>
    </>
  )
}

export default Form
