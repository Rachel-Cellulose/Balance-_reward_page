import React, { useState } from 'react';
import "./Sidebar.scss";
import { SidebarData } from "../Data/Data";
import logo from "../images/balanceè_logo.jpeg";


const Sidebar = () => {

    const [selected, setSelected] = useState(0)
  return (
    <div className="sidebar">
      <div className="side_logo">
        <img src={logo} alt="" />
      </div>

      {/* menubar */}

      <div className="menu_bar">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menu_item active" : "menu_item"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <div className='menu_tab'>
                <span className='menu_icon'>
                  <item.icon />
                </span>
                <span className='menu'>{item.heading}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
