import React from "react";
import "./Main.scss";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
// import Booking from "../Booking/Booking";
// import TotalPoint from "../TotalPoint/TotalPoint";

const Main = () => {
  return (
    <div className="main_wrapper">
      <div>
        <h1> Dashboard </h1>
      </div>
      <Cards />
      <Table/>
      {/* <Booking />
      <TotalPoint /> */}
    </div>
  );
};

export default Main;
