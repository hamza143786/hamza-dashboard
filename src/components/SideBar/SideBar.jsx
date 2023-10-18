import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h2>
          <span>
          <i class="ri-dashboard-3-line"></i>
          </span>{" "}
          Dashboard
        </h2>
      </div>

      <div className="sidebar_content"> 
        <div className="menu">
          <ul className="nav_list"> 
            {navLinks.map((item, index) => (
              <li className="nav_item" key={index}> 
                <NavLink 
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav_active nav_link" : "nav_link"
                  } 
                > <i class="ri-arrow-drop-right-line"></i>
                  <i className={item.icon}></i>
                  
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar_bottom">
          <div className="name">
          <span>
            <i class="ri-logout-circle-r-line"></i>Hamza
          </span>
          <p>Team Leader</p> 
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Sidebar;