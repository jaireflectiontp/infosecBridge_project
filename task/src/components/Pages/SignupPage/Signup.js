import React, { useState } from 'react';
import "../../../assets/styles/index.scss";
import Form from '../../common/form/Form';
import Button from '../../common/button/Button';
const Signup = () => {
  const [page, setPage] = useState("signin")
  return (
    <>
      <div className={`form_container ${page === 'signin' ? 'd-block' : 'd-grid'}`}>
        <div className="form_control">
          {
            page === 'signin'
              ?
              <>
                <h2 className="form_heading">Signin to your PopX account</h2>
                <p className='signin_text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eum eaque cumque accusantium maiores necessitatibus quas minima nostrum provident,
                  repellat, praesentium, dicta voluptates temporibus doloremque tempora. Dolorem atque
                  voluptatem modi quibusdam.
                </p>
                <Form type="email" label="Email Address" />
                <Form type="password" label="Password" />
              </>
              :
              <>
                <h2 className="form_heading">Create your PopX account</h2>
                <Form type="text" label="Full Name" />
                <Form type="number" label="Phone Number" />
                <Form type="email" label="Email Address" />
                <Form type="password" label="Password" />
                <Form type="text" label="Company Name" />
              </>
          }
        </div>
        <div className="create_acc_btn">
          <Button
            btnName={page === 'signin' ? 'login' : 'create account'}
            className={page === 'signin' ? 'login' : 'create_acc'}
          />
        </div>
      </div>
    </>
  )
}

export default Signup
