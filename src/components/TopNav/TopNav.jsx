import React from 'react'
import './topnav.css'
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";

const TopNav = () => {
  return (
    <div className="top_nav">
      <div className="top_nav-wrapper">
        <h1>Hello Hamza ☯,</h1>
        <div className="top_nav-right">
          <span className="notification">
            <i class="ri-notification-3-line"></i>
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <Link to="/settings">
              <img src={profileImg} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav

