import React from 'react'
import "../../../assets/styles/index.scss"
const Button = (props) => {
    const { btnName, className } = props
    return (
        <>
            <div className={`btn ${className}`}>
                <button className={className}>
                    {btnName}
                </button>
            </div>
        </>
    )
}

export default Button
