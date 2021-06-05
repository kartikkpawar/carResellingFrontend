import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticated, signOut } from "../Helpers/authentication";

const Header = () => {
  const history = useHistory();
  const signOutUser = () => {
    signOut(() => history.go(0));
  };
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    isAuthenticated() && setAuth(true);
  }, []);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
        style={{ userSelect: "none" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Car<span>Book</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="/pricing" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="/cars" className="nav-link">
                  Cars
                </a>
              </li>
              <li className="nav-item">
                <a href="/blogs" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
              {console.log(auth)}
              {auth ? (
                <li className="nav-item" onClick={signOutUser}>
                  <a className="nav-link">Sign Out</a>
                </li>
              ) : (
                <li className="nav-item">
                  <a href="/signin" className="nav-link">
                    Sign-In
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
