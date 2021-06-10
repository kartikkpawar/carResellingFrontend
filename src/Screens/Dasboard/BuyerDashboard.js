import React, { useState } from "react";
import BuyerEditProfile from "./BuyerEditProfile";
import BuyerListBids from "./BuyerListBids";

const BuyerDashboard = () => {
  const [pageRender, setPageRender] = useState({
    profile: !true,
    bids: !false,
  });

  const { profile, bids } = pageRender;

  return (
    <div className="hero-wrap d-flex dash">
      <div className="dash-left d-flex align-items-center">
        <div
          style={{
            height: "70%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "12px",
            paddingRight: "12px",
            justifyContent: "center",
          }}
        >
          <span
            className={`${profile ? "spanButtonActive" : "spanButton"}`}
            onClick={() => {
              setPageRender({ ...pageRender, profile: true, bids: false });
            }}
          >
            Profile
          </span>
          <span
            className={`${bids ? "spanButtonActive" : "spanButton"}`}
            onClick={() => {
              setPageRender({ ...pageRender, profile: false, bids: true });
            }}
          >
            My Bids
          </span>
        </div>
      </div>
      <div className="dash-right position-relative">
        <h1 className="text-dark ml-3 mt-2">Welcome Kartik Pawar,</h1>
        <div className="container ">
          {profile && <BuyerEditProfile />}
          {bids && <BuyerListBids />}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
