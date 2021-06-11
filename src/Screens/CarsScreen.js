import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllCars } from "../Helpers/cars";
import Currency from "react-currency-formatter";
import { useHistory } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState();

  useEffect(() => {
    getAllCars()
      .then((data) => {
        if (data.error) {
          return setCars([]);
        }
        dataSplitter(data);
      })
      .catch();
  }, []);
  const dataSplitter = (array) => {
    const tarr = [];
    while (array.length > 0) {
      let carRow = array.splice(0, 3);

      tarr.push(carRow);
    }
    console.log(tarr.length);
    setCars(tarr);
  };
  const history = useHistory();
  return (
    <>
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
                    Cars <i className="ion-ios-arrow-forward"></i>
                  </span>
                </p>
                <h1 className="mb-3 bread">Choose Your Car</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section bg-light">
          <div className="container">
            {cars?.map((carRow, idx) => (
              <div className="row" idx={idx}>
                {carRow?.map((car, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="car-wrap rounded ">
                      <img
                        src={`http://localhost:8000/api/car/${car._id}/photo`}
                        className="img rounded d-flex align-items-end"
                        alt=""
                      />
                      <div className="text">
                        <h2 className="mb-0">
                          <a href="car-details.html">{car.carName}</a>
                        </h2>
                        <div className="d-flex mb-3">
                          <span className="cat">{car.companyName}</span>
                          <p className="price ml-auto">
                            <Currency currency="INR" quantity={car.cost} />{" "}
                            <span>expected</span>
                          </p>
                        </div>
                        <div
                          className="d-flex btn btn-secondary py-2 ml-1 justify-content-center"
                          onClick={() => {
                            history.push({
                              pathname: "/car-details",
                              state: { carRow, car },
                            });
                          }}
                        >
                          <span className="btn btn-secondary py-2 ml-1">
                            View More
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </>
      <Footer />
    </>
  );
};

export default Cars;
