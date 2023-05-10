import React from 'react';
import "../../../assets/styles/index.scss";
import Button from '../../common/button/Button';
import { Link } from 'react-router-dom';
const LandingPage = () => {

  return (
    <>
      <div className="landing_container">
        <div className='wlcm_heading'>Welcome to PopX</div>
        <p className='greet_text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum eaque cumque accusantium maiores necessitatibus quas minima nostrum provident,
          repellat, praesentium, dicta voluptates temporibus doloremque tempora. Dolorem atque
          voluptatem modi quibusdam.
        </p>
        <div className="create_acc_btn">
          <Link className='anchor' to='/signup'>
            <Button btnName="create account"
              className="create_acc"
            />
          </Link>
        </div>

        <div className="login_btn" >
          <Link className='anchor' to='/signin'>
            <Button btnName="Already Registered? Login"
              className="login"
            />
          </Link>

        </div>
      </div>
    </>
  )
}

export default LandingPage
