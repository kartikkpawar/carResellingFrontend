import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ServicesScreen = () => {
  return (
    <>
      {" "}
      <Header />
      <>
        <section
          className="hero-wrap hero-wrap-2 js-fullheight"
          style={{ backgroundImage: `url('assets/images/bg_3.jpg')` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
              <div className="col-md-9 ftco-animate pb-5">
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="/">
                      Home <i className="ion-ios-arrow-forward"></i>
                    </a>
                  </span>
                  <span>
                    Services <i className="ion-ios-arrow-forward"></i>
                  </span>
                </p>
                <h1 className="mb-3 bread">Our Services</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container d-flex flex-column align-items-center">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span className="subheading">Services</span>
                <h2 className="mb-3">Our Latest Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-route"></span>
                  </div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">
                      Select location as your preference
                    </h3>
                    <p>Sell the cars based on the location accessible to you</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-handshake"></span>
                  </div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Ask for the Best Deal</h3>
                    <p>Select the car and ask the car at your cost.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="services services-2 w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-rent"></span>
                  </div>
                  <div className="text w-100">
                    <h3 className="heading mb-2">Sell or Purchase the car</h3>
                    <p>Sell or Buy the car according to you preference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftco-section ftco-intro"
          style={{ backgroundImage: `url(assets/images/bg_3.jpg)` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-6 heading-section heading-section-white ftco-animate">
                <h2 className="mb-3">
                  Wanna sell car with us? So don't be late
                </h2>
                <a href="/signin" className="btn btn-primary btn-lg">
                  Become A Seller
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
    </>
  );
};

export default ServicesScreen;
