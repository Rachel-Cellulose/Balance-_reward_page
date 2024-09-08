import React, { useState } from "react";
import "./Sidebar.scss";
import { FaTachometerAlt, FaMoneyCheckAlt, FaBars } from "react-icons/fa";
import logo from "../images/balancee.jpg";

const Sidebar = ({ setActivePage }) => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false); 

  const menuItems = [
    { icon: <FaTachometerAlt />, heading: "Dashboard", page: "dashboard" },
    { icon: <FaMoneyCheckAlt />, heading: "Cashout", page: "cashout" },
  ];

  const handleMenuClick = (index, page) => {
    setSelected(index);
    setActivePage(page);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
      <div className="bars" onClick={toggleSidebar}>
        <FaBars />
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="side_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu_bar">
          {menuItems.map((item, index) => (
            <div
              className={selected === index ? "menu_item active" : "menu_item"}
              key={index}
              onClick={() => handleMenuClick(index, item.page)}
            >
              <div className="menu_tab">
                <span className="menu_icon">{item.icon}</span>
                <span className="menu">{item.heading}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
