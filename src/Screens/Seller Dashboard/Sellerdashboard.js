import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../Helpers/authentication";
import SellerAddCar from "./SellerAddCar";
import SellerEditProfile from "./SellerEditProfile";
import SellerManagecar from "./SellerManagecar";

const SellerDashboard = () => {
  const [pageRender, setPageRender] = useState({
    profile: !true,
    addCar: false,
    listCars: !false,
  });
  const [makeRedirect, setMakeRedirect] = useState(false);

  const { profile, addCar, listCars } = pageRender;

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
              setPageRender({
                ...pageRender,
                profile: true,
                addCar: false,
                listCars: false,
              });
            }}
          >
            Profile
          </span>
          <span
            className={`${addCar ? "spanButtonActive" : "spanButton"}`}
            onClick={() => {
              setPageRender({
                ...pageRender,
                profile: false,
                addCar: true,
                listCars: false,
              });
            }}
          >
            Add Car
          </span>{" "}
          <span
            className={`${listCars ? "spanButtonActive" : "spanButton"}`}
            onClick={() => {
              setPageRender({
                ...pageRender,
                profile: false,
                addCar: false,
                listCars: true,
              });
            }}
          >
            Manage Cars
          </span>
        </div>

        <div
          className="mb-2 d-flex align-items-center text-light"
          style={{ fontSize: "1.2rem", userSelect: "none", cursor: "pointer" }}
          onClick={() => document.location.href = '/'}
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
          {profile && <SellerEditProfile />}
          {addCar && <SellerAddCar />}
          {listCars && <SellerManagecar />}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
