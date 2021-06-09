import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  authenticate,
  buyerSignIn,
  sellerSignIn,
} from "../Helpers/authentication";

const SignInScreen = () => {
  const [signinRedirect, setSigninRedirect] = useState(false);
  const [buyer, setBuyer] = useState(true);
  const [authFields, setAuthFields] = useState({
    //NOTE Default Seller Login later remove this
    // email: "seller@seller.com",
    // password: "1234",

    //NOTE Default Buyer Login later remove this
    email: "buyer@buyer.com",
    password: "1234",
  });
  const { email, password } = authFields;
  const history = useHistory();

  const handelLogin = () => {
    const user = { email: email, password: password };
    if (email === "" || password === "") {
      return toast.error("Enter email and password", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
    buyer &&
      buyerSignIn(user)
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
          authenticate(data, () => history.push("/"));
        })
        .catch((err) => console.log(err));

    !buyer &&
      sellerSignIn(user)
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
          authenticate(data, () => history.push("/"));
        })
        .catch((err) => console.log(err));
  };

  const inputChange = (name) => (event) => {
    setAuthFields({ ...authFields, [name]: event.target.value });
  };

  return (
    <>
      <Header />
      <>
        {signinRedirect && <Redirect to="/signup" />}
        <div className="hero-wrap ftco-degree-bg">
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3 className="text-light">Welcome Back</h3>

                <input
                  type="submit"
                  name=""
                  value="Sign Up"
                  onClick={() => {
                    setSigninRedirect(true);
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
                      Login as a {buyer ? "Buyer" : "Seller"}
                    </h3>
                    <div className="row register-form w-100">
                      <div className="d-flex flex-column  w-100">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address *"
                            value={email}
                            onChange={inputChange("email")}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value={password}
                            onChange={inputChange("password")}
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Login"
                          onClick={handelLogin}
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

export default SignInScreen;
