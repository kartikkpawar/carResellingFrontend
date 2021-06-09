import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { isAuthenticated, signOut } from "../Helpers/authentication";

const Header = ({ history }) => {
  const historyload = useHistory();
  const signOutUser = () => {
    signOut(() => historyload.go(0));
  };
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    isAuthenticated() && setAuth(true);
  }, []);

  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };

  const signinStyling = (path) => {
    if (path === "/signin" || path === "/signup") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
        style={{ userSelect: "none" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            {signinStyling(history.location.pathname) ? (
              <span className="text-dark">Car</span>
            ) : (
              "Car"
            )}
            <span>Book</span>
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
              <li
                className={`nav-item ${currentTab(history, "/") && "active"}`}
              >
                <a
                  href="/"
                  className={`nav-link ${
                    signinStyling(history.location.pathname) && "text-dark"
                  }`}
                >
                  Home
                </a>
              </li>
              <li
                className={`nav-item ${
                  currentTab(history, "/about") && "active"
                }`}
              >
                <a
                  href="/about"
                  className={`nav-link ${
                    signinStyling(history.location.pathname) && "text-dark"
                  }`}
                >
                  About
                </a>
              </li>
              <li
                className={`nav-item ${
                  currentTab(history, "/services") && "active"
                }`}
              >
                <a
                  href="/services"
                  className={`nav-link ${
                    signinStyling(history.location.pathname) && "text-dark"
                  }`}
                >
                  Services
                </a>
              </li>
              <li
                className={`nav-item ${
                  currentTab(history, "/cars") && "active"
                }`}
              >
                <a
                  href="/cars"
                  className={`nav-link ${
                    signinStyling(history.location.pathname) && "text-dark"
                  }`}
                >
                  Cars
                </a>
              </li>
              <li
                className={`nav-item ${
                  currentTab(history, "/blogs") && "active"
                }`}
              >
                <a
                  href="/blogs"
                  className={`nav-link ${
                    signinStyling(history.location.pathname) && "text-dark"
                  }`}
                >
                  Blog
                </a>
              </li>
              <li
                className={`nav-item ${
                  currentTab(history, "/contact") && "active"
                }`}
              >
                <a
                  href="/contact"
                  className={`nav-link ${
                    signinStyling(history.location.pathname) && "text-dark"
                  }`}
                >
                  Contact
                </a>
              </li>
              {auth ? (
                <li className="nav-item" onClick={signOutUser}>
                  <a
                    className={`nav-link ${
                      signinStyling(history.location.pathname) && "text-dark"
                    }`}
                  >
                    Sign Out
                  </a>
                </li>
              ) : (
                <li
                  className={`nav-item ${
                    currentTab(history, "/signin") && "active"
                  }`}
                >
                  <a href="/signin" className="nav-link">
                    Sign-In
                  </a>
                </li>
              )}
              {auth && (
                <li
                  className={`nav-item ${
                    currentTab(history, "/signin") && "active"
                  }`}
                >
                  <a href="/dashboard" className="nav-link">
                    Dashboard
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

export default withRouter(Header);
