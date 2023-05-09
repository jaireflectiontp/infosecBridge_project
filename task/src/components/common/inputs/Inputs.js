import React from 'react'
import "../../../assets/styles/index.scss"
const Input = (props) => {
    const { type, label } = props
    return (
        <>
            <div className="inpt_control">
                <label>{label}</label>
                <input type={type} />
            </div>
        </>
    )
}

export default Input
