import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../Helpers/authentication";
import BuyerEditProfile from "./BuyerEditProfile";
import BuyerListBids from "./BuyerListBids";

const BuyerDashboard = () => {
  const [pageRender, setPageRender] = useState({
    profile: true,
    bids: false,
  });
  const [makeRedirect, setMakeRedirect] = useState(false);

  const { profile, bids } = pageRender;

  return (
    <div className="hero-wrap d-flex dash">
      {makeRedirect && <Redirect to="/" />}
      <div className="dash-left d-flex align-items-center justify-content-between flex-column">
        <div
          style={{
            height: "100%",
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

        <div
          className="mb-2 d-flex align-items-center text-light"
          style={{ fontSize: "1.2rem", userSelect: "none", cursor: "pointer" }}
          onClick={() => setMakeRedirect(true)}
        >
          <BiLogOut
            style={{
              marginRight: "5px",
              fontSize: "1.2rem",
            }}
          />
          <span style={{ fontSize: "1.2rem" }}>Logout</span>
        </div>
      </div>
      <div className="dash-right overflow-auto" id="hideScroll">
        <h1 className="text-dark ml-3 mt-2">
          Welcome {isAuthenticated().user.name},
        </h1>
        <div className="container">
          {profile && <BuyerEditProfile />}
          {bids && <BuyerListBids />}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
