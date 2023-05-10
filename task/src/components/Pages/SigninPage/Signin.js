import React from 'react'
import "../../../assets/styles/index.scss";
import Form from '../../common/form/Form';
import Button from '../../common/button/Button';
const Signin = () => {
    return (
        <>
            <div className="form_container d-block">
                <div className="form_control">

                    <h2 className="form_heading">Signin to your PopX account</h2>
                    <p className='signin_text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum eaque cumque accusantium maiores necessitatibus quas minima nostrum provident,
                        repellat, praesentium, dicta voluptates temporibus doloremque tempora. Dolorem atque
                        voluptatem modi quibusdam.
                    </p>
                    <Form type="email" label="Email Address" placeholder="Enter email address" d_none="d-none" />
                    <Form type="password" label="Password" placeholder="Enter password" d_none="d-none" />
                </div>
                <div className="create_acc_btn" onClick={() => window.location.href = '/user-acc'}>
                    <Button
                        btnName='login'
                        className='login disable'
                    />
                </div>
            </div>
        </>
    )
}

export default Signin
