import React, { useState } from "react";
import "./CashoutPage.scss"; 


function CashoutPage() {
  const [cashoutOption, setCashoutOption] = useState("");

  const handleCashout = () => {
    if (cashoutOption === "bank") {
      alert("Cashing out to your bank account...");
    } else if (cashoutOption === "booking") {
      alert("Applying discount to your next booking...");
    }
  };

  return (
    <div className="cashout-page">
      <h2>Cashout Your Discount</h2>
      <h3>Available Rewards: #{29000}</h3>

      <div className="cashout-options">
        <button onClick={() => setCashoutOption("bank")}>
          Cashout to Bank Account
        </button>
        <button onClick={() => setCashoutOption("booking")}>
          Apply to Next Booking
        </button>
      </div>

      {cashoutOption && (
        <div className="confirm-message">
          <p>
            {cashoutOption === "bank"
              ? "Thank You for choosing Balanceè. Wthdrawal to you Bank account now!!!!"
              : "You have chosen to apply the discount to your next booking."}
          </p>
          <button className="confirm-button" onClick={handleCashout}>
            Confirm Cashout
          </button>
        </div>
      )}
    </div>
  );
}

export default CashoutPage;
