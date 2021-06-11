import { blue } from "@material-ui/core/colors";
import React, { useEffect } from "react";
import { useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Currency from "react-currency-formatter";
import { Link } from "@material-ui/core";

const CarScreen = () => {
  const location = useLocation();
  const history = useHistory();
  const [makeredirect, setMakeredirect] = useState(false);
  const [carRow, setCarRow] = useState([]);
  const [carInfo, setCarInfo] = useState();
  const [funInfo, setFunInfo] = useState({
    airCondition: Math.random() >= 0.5,
    childSeat: Math.random() >= 0.5,
    seatBelt: Math.random() >= 0.5,
    audioInput: Math.random() >= 0.5,
    sleepingBed: false,
    longTermTrips: Math.random() >= 0.5,
    gps: Math.random() >= 0.5,
    water: false,
    carKit: Math.random() >= 0.5,
    luggage: carInfo?.luggage,
    bluetooth: Math.random() >= 0.5,
    remoteCentralLocking: Math.random() >= 0.5,
    music: Math.random() >= 0.5,
    onBoardComp: false,
    climateControl: Math.random() >= 0.5,
  });
  const {
    airCondition,
    childSeat,
    seatBelt,
    audioInput,
    sleepingBed,
    longTermTrips,
    gps,
    water,
    carKit,
    luggage,
    bluetooth,
    remoteCentralLocking,
    music,
    onBoardComp,
    climateControl,
  } = funInfo;

  useEffect(() => {
    if (!location.state) {
      return setMakeredirect(true);
    }
    const { carRow, car } = location.state;
    setCarInfo(car);
    setCarRow(carRow);
  }, []);

  return (
    <>
      {makeredirect && <Redirect to="/cars" />}
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
                    Car details <i className="ion-ios-arrow-forward"></i>
                  </span>
                </p>
                <h1 className="mb-3 bread">Car Details</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-car-details">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="car-details">
                  <div className="img rounded">
                    {" "}
                    <img
                      src={`http://localhost:8000/api/car/${carInfo?._id}/photo`}
                      className="img rounded d-flex align-items-end"
                      alt=""
                    />
                  </div>

                  <div className="text text-center">
                    <span className="subheading">{carInfo?.companyName}</span>
                    <h2>{carInfo?.carName}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services">
                  <div className="media-body py-md-4">
                    <div className="d-flex mb-3 align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-dashboard"></span>
                      </div>
                      <div className="text">
                        <h3 className="heading mb-0 pl-3">
                          Mileage
                          <span>{carInfo?.milage} Km/pL</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services">
                  <div className="media-body py-md-4">
                    <div className="d-flex mb-3 align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-pistons"></span>
                      </div>
                      <div className="text">
                        <h3 className="heading mb-0 pl-3">
                          Transmission
                          <span>{carInfo?.mode}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services">
                  <div className="media-body py-md-4">
                    <div className="d-flex mb-3 align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-car-seat"></span>
                      </div>
                      <div className="text">
                        <h3 className="heading mb-0 pl-3">
                          Seats
                          <span>{carInfo?.seats} Adults</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services">
                  <div className="media-body py-md-4">
                    <div className="d-flex mb-3 align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-backpack"></span>
                      </div>
                      <div className="text">
                        <h3 className="heading mb-0 pl-3">
                          Luggage
                          <span>
                            {carInfo?.luggage ? "Available" : "Not Available"}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services">
                  <div className="media-body py-md-4">
                    <div className="d-flex mb-3 align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-diesel"></span>
                      </div>
                      <div className="text">
                        <h3 className="heading mb-0 pl-3">
                          Fuel
                          <span>{carInfo?.fuel}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 pills">
                <div className="bd-example bd-example-tabs">
                  <div className="d-flex justify-content-center">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-description-tab"
                          data-toggle="pill"
                          href="#pills-description"
                          role="tab"
                          aria-controls="pills-description"
                          aria-expanded="true"
                        >
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-manufacturer-tab"
                          data-toggle="pill"
                          href="#pills-manufacturer"
                          role="tab"
                          aria-controls="pills-manufacturer"
                          aria-expanded="true"
                        >
                          Description
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-review-tab"
                          data-toggle="pill"
                          href="#pills-review"
                          role="tab"
                          aria-controls="pills-review"
                          aria-expanded="true"
                        >
                          Review
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-description"
                      role="tabpanel"
                      aria-labelledby="pills-description-tab"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <ul className="features">
                            <li
                              className={`${airCondition ? "check" : "remove"}`}
                            >
                              <span
                                className={`${
                                  airCondition
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Airconditions
                            </li>
                            <li className={`${seatBelt ? "check" : "remove"}`}>
                              <span
                                className={`${
                                  seatBelt
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Seat
                            </li>
                            <li className={`${gps ? "check" : "remove"}`}>
                              <span
                                className={`${
                                  gps ? "ion-ios-checkmark" : "ion-ios-close"
                                }`}
                              ></span>
                              GPS
                            </li>
                            <li className={`${luggage ? "check" : "remove"}`}>
                              <span
                                className={`${
                                  luggage
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Luggage
                            </li>
                            <li className={`${music ? "check" : "remove"}`}>
                              <span
                                className={`${
                                  music ? "ion-ios-checkmark" : "ion-ios-close"
                                }`}
                              ></span>
                              Music
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="features">
                            <li className={`${seatBelt ? "check" : "remove"}`}>
                              <span
                                className={`${
                                  seatBelt
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Seat Belt
                            </li>
                            <li
                              className={`${sleepingBed ? "check" : "remove"}`}
                            >
                              <span
                                sleepingBed={`${
                                  seatBelt
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Sleeping Bed
                            </li>
                            <li className={`${water ? "check" : "remove"}`}>
                              <span
                                className={`${
                                  water ? "ion-ios-checkmark" : "ion-ios-close"
                                }`}
                              ></span>
                              Water
                            </li>
                            <li className={`${bluetooth ? "check" : "remove"}`}>
                              <span
                                className={`${
                                  bluetooth
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Bluetooth
                            </li>
                            <li
                              className={`${onBoardComp ? "check" : "remove"}`}
                            >
                              <span
                                className={`${
                                  onBoardComp
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Onboard computer
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="features">
                            <li
                              className={`${audioInput ? "check" : "remove"}`}
                            >
                              <span
                                className={`${
                                  audioInput
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Audio input
                            </li>
                            <li
                              className={`${
                                longTermTrips ? "check" : "remove"
                              }`}
                            >
                              <span
                                className={`${
                                  longTermTrips
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Long Term Trips
                            </li>
                            <li className={`${carKit ? "check" : "remove"}`}>
                              <span
                                className={`${
                                  carKit ? "ion-ios-checkmark" : "ion-ios-close"
                                }`}
                              ></span>
                              Car Kit
                            </li>
                            <li
                              className={`${
                                remoteCentralLocking ? "check" : "remove"
                              }`}
                            >
                              <span
                                className={`${
                                  remoteCentralLocking
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Remote central locking
                            </li>
                            <li
                              className={`${
                                climateControl ? "check" : "remove"
                              }`}
                            >
                              <span
                                className={`${
                                  climateControl
                                    ? "ion-ios-checkmark"
                                    : "ion-ios-close"
                                }`}
                              ></span>
                              Climate control
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-manufacturer"
                      role="tabpanel"
                      aria-labelledby="pills-manufacturer-tab"
                    >
                      <p>{carInfo?.description}</p>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-review"
                      role="tabpanel"
                      aria-labelledby="pills-review-tab"
                    >
                      <div className="row">
                        <div className="col-md-7">
                          <h3 className="head">23 Reviews</h3>
                          <div className="review d-flex">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(assets/images/person_1.jpg)`,
                              }}
                            ></div>
                            <div className="desc">
                              <h4>
                                <span className="text-left">Jacob Webb</span>
                                <span className="text-right">
                                  14 March 2018
                                </span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                </span>
                                <span className="text-right">
                                  <a href="#" className="reply">
                                    <i className="icon-reply"></i>
                                  </a>
                                </span>
                              </p>
                              <p>
                                When she reached the first hills of the Italic
                                Mountains, she had a last view back on the
                                skyline of her hometown Bookmarksgrov
                              </p>
                            </div>
                          </div>
                          <div className="review d-flex">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(assets/images/person_2.jpg)`,
                              }}
                            ></div>
                            <div className="desc">
                              <h4>
                                <span className="text-left">Jacob Webb</span>
                                <span className="text-right">
                                  14 March 2018
                                </span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                </span>
                                <span className="text-right">
                                  <a href="#" className="reply">
                                    <i className="icon-reply"></i>
                                  </a>
                                </span>
                              </p>
                              <p>
                                When she reached the first hills of the Italic
                                Mountains, she had a last view back on the
                                skyline of her hometown Bookmarksgrov
                              </p>
                            </div>
                          </div>
                          <div className="review d-flex">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(assets/images/person_3.jpg)`,
                              }}
                            ></div>
                            <div className="desc">
                              <h4>
                                <span className="text-left">Jacob Webb</span>
                                <span className="text-right">
                                  14 March 2018
                                </span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                </span>
                                <span className="text-right">
                                  <a href="#" className="reply">
                                    <i className="icon-reply"></i>
                                  </a>
                                </span>
                              </p>
                              <p>
                                When she reached the first hills of the Italic
                                Mountains, she had a last view back on the
                                skyline of her hometown Bookmarksgrov
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="rating-wrap">
                            <h3 className="head">Give a Review</h3>
                            <div className="wrap">
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  (98%)
                                </span>
                                <span>20 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  (85%)
                                </span>
                                <span>10 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  (70%)
                                </span>
                                <span>5 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  (10%)
                                </span>
                                <span>0 Reviews</span>
                              </p>
                              <p className="star">
                                <span>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  <i className="ion-ios-star"></i>
                                  (0%)
                                </span>
                                <span>0 Reviews</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-no-pt">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section text-center ftco-animate mb-5">
                <span className="subheading">Choose Car</span>
                <h2 className="mb-2">Related Cars</h2>
              </div>
            </div>
            <div className="row">
              {carRow.map((rowcar, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="car-wrap rounded ">
                    <img
                      src={`http://localhost:8000/api/car/${rowcar._id}/photo`}
                      className="img rounded d-flex align-items-end"
                      alt=""
                    />
                    <div className="text">
                      <h2 className="mb-0">
                        <a href="car-details.html">{rowcar.carName}</a>
                      </h2>
                      <div className="d-flex mb-3">
                        <span className="cat">{rowcar.companyName}</span>
                        <p className="price ml-auto">
                          <Currency currency="INR" quantity={rowcar.cost} />{" "}
                          <span>expected</span>
                        </p>
                      </div>
                      <div className="d-flex btn btn-secondary py-2 ml-1 justify-content-center">
                        <Link
                          to={{
                            pathname: "/car-details",
                            state: { carRow, rowcar },
                          }}
                        >
                          <span className="btn btn-secondary py-2 ml-1">
                            View More
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
      <Footer />
    </>
  );
};

export default CarScreen;
