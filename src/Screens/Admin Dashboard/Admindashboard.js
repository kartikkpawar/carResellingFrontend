import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../Helpers/authentication";
import Adminusers from "./Adminusers";
import Carcategories from "./Carcategories";

const Admindashboard = () => {
  const [pageRender, setPageRender] = useState({
    cars: true,
    users: false,
    blog: false,
  });
  const [makeRedirect, setMakeRedirect] = useState(false);

  const { cars, users, blog } = pageRender;
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
            className={`${cars ? "spanButtonActive" : "spanButton"}`}
            onClick={() => {
              setPageRender({
                ...pageRender,
                cars: true,
                users: false,
                blog: false,
              });
            }}
          >
            Car Manager
          </span>
          <span
            className={`${users ? "spanButtonActive" : "spanButton"}`}
            onClick={() => {
              setPageRender({
                ...pageRender,
                cars: false,
                users: true,
                blog: false,
              });
            }}
          >
            Users
          </span>{" "}
          {/* <span
            className={`${blog ? "spanButtonActive" : "spanButton"}`}
            onClick={() => {
              setPageRender({
                ...pageRender,
                cars: false,
                users: false,
                blog: true,
              });
            }}
          >
            Add Blogs
          </span> */}
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
        <h1 className="text-dark ml-3 mt-2">Welcome Admin,</h1>
        <div className="container">
          {cars && <Carcategories />}
          {users && <Adminusers />}
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
