import React from 'react';
import "../../../assets/styles/index.scss";
import userImg from "../../../assets/img/user.png";
import camIcon from "../../../assets/img/cam.png"
const Account = () => {
  return (
    <>
      <div className="account_container">
        <div className="page_heading">Account Settings</div>
        <div className="account_container_inner">
          <div className="profile_section">
            <div className="user_profile_img">
              <img src={userImg} alt="user porfile" />
              <img className='camIcon' src={camIcon} alt="" />
            </div>
            <div className="user_details">
              <div className="user_name">Marry Doe</div>
              <div className="user_email">Marry@Gmail.Com</div>
            </div>
          </div>
          <p className='user_bio'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero unde provident tenetur nihil ex ad laudantium,
            sit officiis nisi, voluptas neque. Accusamus optio, rem ratione quidem sapiente inventore a similique?</p>
        </div>
      </div>
    </>
  )
}

export default Account
