import React from "react";
import "./Coupon.scss";

const Coupon = () => {
  return (
    <div className="coupon-container">

      <div className="coupon-layer first-coupon">
        <div className="coupon-text">
          <h1>25% DISCOUNT COUPON</h1>
          <p>
            Enjoy a delightful 25% discount on your first booking at Balanceè
          </p>
          <p className="expiry">Expires September 31, 2024</p>
        </div>
        <div className="coupon-value"></div>
      </div>

      <div className="coupon-layer second-coupon">
        <div className="coupon-text-two">
          <h1> 10% Referral Discount</h1>
          <h4 className="expiry">
            for you and a friend after a successful referral{" "}
          </h4>
          < a href="/" > Referral link here</a>
        </div>
      </div>

      <div className="coupon-layer third-coupon">
        <div className="coupon-text">
          <h1> 30% Service Package Deal</h1>
          <p>Save 30% on bundled services</p>
          <p> </p>
          <p className="expiry">
            
            Brake Replacement, Engine Repair and Tire Rotation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
