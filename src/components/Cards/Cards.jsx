import React from "react";
import "./Cards.scss";
import { DashboardData } from "../../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="cards">
      {DashboardData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
