import React, { useState } from "react";
import "./App.css";
import Main from "./components/MainPage/Main";
import Sidebar from "./components/Sidebar";
import Coupon from "./components/Coupon/Coupon";
import CashoutPage from "./components/Cashout/CashoutPage";

function App() {
  const [activePage, setActivePage] = useState("dashboard"); // State to track the active page

  return (
    <div className="App">
      <div className="main_container">
        <Sidebar setActivePage={setActivePage} />

        {activePage === "dashboard" && <Main />}
        {activePage === "cashout" && <CashoutPage />}
        <Coupon />
      </div>
    </div>
  );
}

export default App;
