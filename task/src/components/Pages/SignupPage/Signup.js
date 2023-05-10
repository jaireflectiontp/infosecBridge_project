import React from 'react';
import "../../../assets/styles/index.scss";
import Form from '../../common/form/Form';
import Button from '../../common/button/Button';
const Signup = () => {
  return (
    <>
      <div className="form_container d-grid" >
        <div className="form_control">
          <>
            <h2 className="form_heading">Create your PopX account</h2>
            <Form type="text" label="Full Name" />
            <Form type="number" label="Phone number" />
            <Form type="email" label="Email address" />
            <Form type="password" label="Password" />
            <Form type="text" label="Company name" />
            <div className="agency_check">
              <p>Are you an Agency?<span className='req_mark'>*</span></p>
              <div className="radios">
                <div className="checks for_yes"><input type="radio" name="agency" checked='checked' /><label>Yes</label></div>
                <div className="checks for_no"><input type="radio" name="agency" /><label>No</label></div>
              </div>
            </div>
          </>
        </div>
        <div className="create_acc_btn" onClick={() => window.location.href = '/signin'}>
          <Button
            btnName='create account'
            className='create_acc'
          />
        </div>
      </div>
    </>
  )
}

export default Signup
