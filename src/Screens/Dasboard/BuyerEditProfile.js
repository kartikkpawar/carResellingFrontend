import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiCamera } from "react-icons/bi";
import { Redirect, useHistory } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import stateDistrict from "../../Assets/stateDistrict";
import {
  authenticate,
  buyerUpdate,
  isAuthenticated,
} from "../../Helpers/authentication";
import { getBuyerById } from "../../Helpers/buyersAndSellers";

const BuyerEditProfile = () => {
  const { user, token } = isAuthenticated();

  /* FIXME PROFILE IMAGE NOT LOADING  */
  const [rerenderProfile, setRerenderProfile] = useState(false);

  const [distritlist, setDistritlist] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const [profileData, setProfileData] = useState({
    fname: user?.name.split(" ")[0],
    lname: user?.name.split(" ")[1],
    email: user?.email,
    contact: user?.contact,
    address: user?.address,
    state: user?.state,
    district: user?.district,
    pincode: user?.pincode,
    password: "1234",
    confirmPassword: "1234",
    gender: true,
    profile: "",
    profileUrl:
      "https://i1.sndcdn.com/avatars-000448803825-qukc2g-t500x500.jpg",
  });
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
    profile,
    profileUrl,
  } = profileData;
  useEffect(() => {
    stateDistrict.states.forEach((statedata) => {
      if (statedata.state === user.state) {
        setDistritlist(statedata.districts);
      }
    });
  }, []);
  useEffect(() => {
    const profile =
      isAuthenticated() && JSON.parse(localStorage.getItem("jwt"));
    console.log(profile);

    getBuyerById(user._id, token).then((data) => {
      if (data.error) {
        return toast.error(data.error, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
      profile.user = data;
      authenticate(profile, () => setRedirect(true));
    });
  }, [rerenderProfile]);
  const districtListhelper = (event) => {
    setProfileData({ ...profileData, state: event.target.value });
    stateDistrict.states.forEach((statedata) => {
      if (statedata.state === event.target.value) {
        setDistritlist(statedata.districts);
      }
    });
  };

  const handelChange = (name) => (event) => {
    const value =
      name === "profile" ? event.target.files[0] : event.target.value;

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
      pincode === ""
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
    if (password === "" || confirmPassword === "") {
      return toast.warning("Please enter password to confirm the changes", {
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
    formData.set("profilePic", profile);

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
    buyerUpdate(formData, user._id, token)
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
        setProfileData({ ...profileData, password: "" });
        setProfileData({ ...profileData, confirmPassword: "" });
        setRerenderProfile(!rerenderProfile);
        return toast.success("Profile Updated Successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      })
      .catch((err) => console.log(err));
  };
  const profileUrlBuilder = () => {
    if (profile) {
      const data = URL.createObjectURL(profile);
      return (
        <img
          src={data}
          alt=""
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            objectFit: "contain",
          }}
        />
      );
    }
    const data = profileUrl;
    return (
      <img
        src={data}
        alt="NOT LOADING"
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "50%",
          objectFit: "contain",
        }}
      />
    );
  };

  return (
    <div
      style={{ padding: "10px" }}
      className="d-flex flex-column align-items-center"
    >
      <h1>Edit your profile</h1>

      <div className="row w-100 mt-4 d-flex justify-content-center">
        <div className="d-flex align-items-end">
          {profileUrlBuilder()}
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="profilepic"
            style={{ display: "none" }}
            onChange={handelChange("profile")}
          />
          <label htmlFor="profilepic">
            <BiCamera
              style={{
                fontSize: "40px",
                cursor: "pointer",
              }}
            />
          </label>
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="First Name *"
            value={fname}
            onChange={handelChange("fname")}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name *"
            value={lname}
            onChange={handelChange("lname")}
          />
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Email *"
            value={email}
            disabled
            id="disbled-input"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Contact *"
            value={contact}
            onChange={handelChange("contact")}
          />
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Address *"
            value={address}
            onChange={handelChange("address")}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Pincode *"
            value={pincode}
            onChange={handelChange("pincode")}
          />
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6">
          <select
            className="form-control"
            value={state}
            onChange={districtListhelper}
          >
            <option className="hidden" selected disabled>
              Please select your State
            </option>
            {stateDistrict.states.map((state, idx) => (
              <option key={idx}>{state.state}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
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
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6">
          <input
            type="password"
            className="form-control"
            placeholder="Password *"
            value={password}
            onChange={handelChange("password")}
          />
        </div>
        <div className="col-md-6">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password *"
            value={confirmPassword}
            onChange={handelChange("confirmPassword")}
          />
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <input
            type="submit"
            className="btnRegister"
            value="Update Profile"
            onClick={handelSubmit}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BuyerEditProfile;
