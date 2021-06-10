import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import stateDistrict from "../Assets/stateDistrict";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { buyerSignUp, sellerSignUp } from "../Helpers/authentication";

const SignUpScreen = () => {
  const [loginRedirect, setLoginRedirect] = useState(false);
  const [buyer, setBuyer] = useState(true);

  const [distritlist, setDistritlist] = useState([]);
  const [profileData, setProfileData] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    gender: true,
  });

  const [redirect, setRedirect] = useState(false);
  const {
    fname,
    lname,
    email,
    contact,
    address,
    state,
    district,
    pincode,
    password,
    confirmPassword,
    gender,
  } = profileData;
  const districtListhelper = (event) => {
    setProfileData({ ...profileData, state: event.target.value });
    stateDistrict.states.forEach((statedata) => {
      if (statedata.state === event.target.value) {
        setDistritlist(statedata.districts);
      }
    });
  };
  const dataHelper = (name) => (event) => {
    const value = event.target.value;
    setProfileData({ ...profileData, [name]: value });
  };
  const handelSubmit = () => {
    if (
      fname === "" ||
      lname === "" ||
      email === "" ||
      contact === "" ||
      address === "" ||
      state === "" ||
      district === "" ||
      pincode === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return toast.error("Please include all fields", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }

    // Building FormData
    const formData = new FormData();
    formData.set("name", fname + " " + lname);
    formData.set("gender", `${gender ? "male" : "female"}`);
    formData.set("email", email);
    formData.set("contact", contact);
    formData.set("pincode", pincode);
    formData.set("address", address);
    formData.set("district", district);
    formData.set("state", state);
    formData.set("profile", "");
    if (password === confirmPassword) {
      formData.set("password", password);
    } else {
      return toast.warning("Password didn't match", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }

    for (const obj of formData.entries()) {
      console.log(obj);
    }

    buyer
      ? buyerSignUp(formData)
          .then((data) => {
            if (data.error) {
              return toast.warning(data.error, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
              });
            }
            setRedirect(true);
          })
          .catch((err) => {
            console.log(err);
          })
      : sellerSignUp(formData)
          .then((data) => {
            if (data.error) {
              return toast.warning(data.error, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
              });
            }
            setRedirect(true);
          })
          .catch((err) => {
            console.log(err);
          });
  };

  return (
    <>
      {" "}
      <Header />
      <>
        {loginRedirect && <Redirect to="/signin" />}
        {redirect && <Redirect to="/" />}
        <div className="hero-wrap ftco-degree-bg">
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3 className="text-light">Welcome</h3>

                <p>You are 30 seconds away from getting your own car!</p>
                <input
                  type="submit"
                  name=""
                  value="Login"
                  onClick={() => {
                    setLoginRedirect(true);
                  }}
                />
                <br />
              </div>
              <div className="col-md-9 register-right">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      onClick={() => setBuyer(true)}
                    >
                      Buyer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      onClick={() => setBuyer(false)}
                    >
                      Seller
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h3 className="register-heading">
                      Apply as a {buyer ? "Buyer" : "Seller"}
                    </h3>
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name *"
                            value={fname}
                            onChange={dataHelper("fname")}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name *"
                            value={lname}
                            onChange={dataHelper("lname")}
                          />
                        </div>{" "}
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value={password}
                            onChange={dataHelper("password")}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            value={confirmPassword}
                            onChange={dataHelper("confirmPassword")}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address *"
                            value={address}
                            onChange={dataHelper("address")}
                          />
                        </div>
                        <div className="form-group">
                          <div className="maxl">
                            <label className="radio inline m-2">
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={() => {
                                  setProfileData({
                                    ...profileData,
                                    gender: true,
                                  });
                                }}
                                checked={gender && true}
                              />
                              <span> Male </span>
                            </label>
                            <label className="radio inline m-2">
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={() => {
                                  setProfileData({
                                    ...profileData,
                                    gender: false,
                                  });
                                }}
                                checked={!gender && true}
                              />
                              <span> Female </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                            value={email}
                            onChange={dataHelper("email")}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minlength="10"
                            maxlength="10"
                            name="txtEmpPhone"
                            className="form-control"
                            placeholder="Your Phone *"
                            value={contact}
                            onChange={dataHelper("contact")}
                          />
                        </div>
                        <div className="form-group">
                          <select
                            className="form-control"
                            onChange={districtListhelper}
                            value={state}
                          >
                            <option className="hidden" selected>
                              Please select your State
                            </option>
                            {stateDistrict.states.map((sname, idx) => (
                              <option key={idx}>{sname.state}</option>
                            ))}
                          </select>
                        </div>{" "}
                        <div className="form-group">
                          <select
                            className="form-control"
                            value={district}
                            onChange={(e) => {
                              setProfileData({
                                ...profileData,
                                district: e.target.value,
                              });
                            }}
                          >
                            <option className="hidden" selected disabled>
                              Please select your District
                            </option>
                            {distritlist.map((dist, idx) => (
                              <option key={idx}>{dist}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Pincode *"
                            value={pincode}
                            onChange={dataHelper("pincode")}
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register"
                          onClick={handelSubmit}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
      <Footer />
    </>
  );
};

export default SignUpScreen;
