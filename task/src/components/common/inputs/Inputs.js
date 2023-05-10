import React from 'react'
import "../../../assets/styles/index.scss"
const Input = (props) => {
    const { type, label, placeholder, d_none } = props
    return (
        <>
            <div className="inpt_control">
                <label>{label}<span className={`req_mark ${d_none}`}>*</span> </label>
                <input type={type} placeholder={placeholder} />
            </div>
        </>
    )
}

export default Input
