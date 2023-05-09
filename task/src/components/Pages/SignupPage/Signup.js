import React from 'react';
import "../../../assets/styles/index.scss";
import Form from '../../common/form/Form';
import Button from '../../common/button/Button';
const Signup = () => {
  return (
    <>
      <div className="form_container">
        <div className="form_control">
          <h2 className="form_heading">Create your PopX account</h2>
          <Form
            type="text"
            label="Full Name"
          />
          <Form
            type="number"
            label="Phone Number"
          />
          <Form
            type="email"
            label="Email Address"
          />
          <Form
            type="password"
            label="Password"
          />
          <Form
            type="text"
            label="Company Name"
          />
        </div>
        <div className="create_acc_btn">
          <Button btnName="create account"
            className="create_acc" />
        </div>
      </div>
    </>
  )
}

export default Signup
