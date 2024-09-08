import React, { useState } from "react";
import "./Sidebar.scss";
import { FaTachometerAlt, FaMoneyCheckAlt, FaBars } from "react-icons/fa"; // Added FaBars for toggle button
import logo from "../images/balancee.jpg";

const Sidebar = ({ setActivePage }) => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Sidebar initially closed on small screens

  const menuItems = [
    { icon: <FaTachometerAlt />, heading: "Dashboard", page: "dashboard" },
    { icon: <FaMoneyCheckAlt />, heading: "Cashout", page: "cashout" },
  ];

  const handleMenuClick = (index, page) => {
    setSelected(index);
    setActivePage(page);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar open/close
  };

  return (
    <>
      {/* Toggle button, visible only on smaller screens */}
      <div className="bars" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Sidebar with dynamic class based on isOpen (only affects mobile screens) */}
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
