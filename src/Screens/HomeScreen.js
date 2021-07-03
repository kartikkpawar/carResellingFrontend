import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getTotalUsers } from "../Helpers/buyersAndSellers";

import { filterCar, getTotalCars } from "../Helpers/cars";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const HomeScreen = () => {
  const [fields, setFileds] = useState({
    kmDriven: "",
    category: "Sedan",
    fuel: "Petrol",
    ownership: "1",
    transmission: "Manual",
    cost: "",
  });

  const history = useHistory();

  const { kmDriven, category, fuel, ownership, transmission, cost } = fields;

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCars, setTotalCars] = useState(0);
  useEffect(() => {
    getTotalCars()
      .then((data) => setTotalCars(data))
      .catch();
    getTotalUsers()
      .then((data) => setTotalUsers(data))
      .catch();
  }, []);
  console.log(totalUsers, totalCars);

  const handelSearchFiled = (name) => (event) => {
    const value = event.target.value;
    setFileds({ ...fields, [name]: value });
  };

  const handelSearch = (event) => {
    event.preventDefault();
    setLoading(true);

    if ((kmDriven !== "" && isNaN(kmDriven)) || (cost !== "" && isNaN(cost))) {
      return toast.error("Please enter valid values", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
    const filterData = {
      kmDriven,
      category,
      fuel,
      ownership,
      mode: transmission,
      cost,
    };

    filterCar(filterData).then((data) => {
      if (data.error) {
        setLoading(false);
        return toast.error(data.error, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
      setLoading(false);
      history.push({
        pathname: "/searched-cars",
        state: { cars: data },
      });
    });
  };
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header />

      <>
        <div
          className="hero-wrap ftco-degree-bg"
          style={{
            backgroundImage: `url('assets/images/bg_1.jpg')`,
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
              <div className="col-lg-8 ftco-animate">
                <div className="text w-100 text-center mb-md-5 pb-md-5">
                  <h1 className="mb-4">Fast &amp; Easy Way To Get A Car</h1>
                  <p style={{ "font-size": "18px" }}>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts
                  </p>
                  {/* <a
                    href="https://vimeo.com/45830194"
                    className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center"
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="ion-ios-play"></span>
                    </div> */}
                  <div className="heading-title">
                    <span className="text-light ">
                      Easy steps for purchasing a car
                    </span>
                  </div>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-12	featured-top">
                <div className="row no-gutters">
                  <div className="col-md-4 d-flex align-items-center">
                    <form
                      action="#"
                      className="request-form ftco-animate bg-primary"
                    >
                      <h2>Search perfect car</h2>
                      <div className="form-group">
                        <label for="" className="label">
                          Max Driven
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Km driven"
                          value={kmDriven}
                          onChange={handelSearchFiled("kmDriven")}
                        />
                      </div>
                      <div className="form-group">
                        <label for="" className="label">
                          Max Cost
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Max Cost"
                          value={cost}
                          onChange={handelSearchFiled("cost")}
                        />
                      </div>
                      <div className="form-group">
                        <label for="" className="label">
                          Select Category
                        </label>
                        <select
                          className="form-control"
                          value={category}
                          onChange={handelSearchFiled("category")}
                        >
                          <option className="hidden" selected disabled>
                            Please car type
                          </option>
                          <option className="text-dark" value="Sedan">
                            Sedan
                          </option>
                          <option className="text-dark" value="SUV">
                            SUV
                          </option>
                          <option className="text-dark" value="MUV">
                            MUV
                          </option>
                          <option className="text-dark" value="Sports">
                            Sports
                          </option>
                          <option className="text-dark" value="Hatchback">
                            Hatchback
                          </option>
                          <option className="text-dark" value="Minivan">
                            Minivan
                          </option>
                          <option className="text-dark" value="Convertible">
                            Convertible
                          </option>
                          <option className="text-dark" value="Crossover">
                            Crossover
                          </option>
                          <option className="text-dark" value="Other">
                            Other
                          </option>
                        </select>
                      </div>
                      <div className="d-flex">
                        <div className="form-group mr-2">
                          <label for="" className="label">
                            Fuel Type
                          </label>
                          <select
                            className="form-control"
                            value={fuel}
                            onChange={handelSearchFiled("fuel")}
                          >
                            <option className="hidden" selected disabled>
                              Please select car type
                            </option>
                            <option className="text-dark" value="Petrol">
                              Petrol
                            </option>
                            <option className="text-dark" value="Disel">
                              Disel
                            </option>
                            <option className="text-dark" value="Electric">
                              Electric
                            </option>
                          </select>
                        </div>
                        <div className="form-group ml-2">
                          <label for="" className="label">
                            Ownership
                          </label>
                          <select
                            className="form-control"
                            value={ownership}
                            onChange={handelSearchFiled("ownership")}
                          >
                            <option className="hidden" selected disabled>
                              Ownership
                            </option>
                            <option className="text-dark" value="1">
                              1
                            </option>
                            <option className="text-dark" value="2">
                              2
                            </option>
                            <option className="text-dark" value="3 or higher">
                              3 or higher
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="" className="label">
                          Transmission
                        </label>
                        <select
                          className="form-control"
                          value={transmission}
                          onChange={handelSearchFiled("transmission")}
                        >
                          <option className="hidden" selected disabled>
                            Transmission
                          </option>
                          <option className="text-dark" value="Manual">
                            Manual
                          </option>
                          <option className="text-dark" value="Automatic">
                            Automatic
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Search"
                          className="btn btn-secondary py-3 px-4"
                          onClick={handelSearch}
                        />
                      </div>
                      {loading && (
                        <div className="loaderContainer">
                          <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={30}
                            width={30}
                          />
                          <span style={{ color: "#fff" }}>
                            Searching cars for you
                          </span>
                        </div>
                      )}
                    </form>
                  </div>
                  <div className="col-md-8 d-flex align-items-center">
                    <div className="services-wrap rounded-right w-100">
                      <h3 className="heading-section mb-4">
                        Better Way to Sell Or Buy Your Perfect Cars
                      </h3>
                      <div className="row d-flex mb-4">
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                          <div className="services w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                              <span className="flaticon-route"></span>
                            </div>
                            <div className="text w-100">
                              <h3 className="heading mb-2">
                                Choose Your Pickup Location
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                          <div className="services w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                              <span className="flaticon-handshake"></span>
                            </div>
                            <div className="text w-100">
                              <h3 className="heading mb-2">
                                Select the Best Deal
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                          <div className="services w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                              <span className="flaticon-rent"></span>
                            </div>
                            <div className="text w-100">
                              <h3 className="heading mb-2">
                                Purchase Your Car And Close Deal
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        <a href="/cars" className="btn btn-primary py-3 px-4">
                          Get Your Perfect Car
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-about">
          <div className="container">
            <div className="row no-gutters">
              <div
                className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(assets/images/about.jpg)` }}
              ></div>
              <div className="col-md-6 wrap-about ftco-animate">
                <div className="heading-section heading-section-white pl-md-5">
                  <span className="subheading">About us</span>
                  <h2 className="mb-4">Welcome to Carbook</h2>

                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                  <p>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should
                    turn around and return to its own, safe country. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                  <p>
                    <a href="/cars" className="btn btn-primary py-3 px-4">
                      Search Cars
                    </a>
                  </p>
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

        <section className="ftco-section testimony-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <span className="subheading">Testimonial</span>
                <h2 className="mb-3">Happy Clients</h2>
              </div>
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{
                          backgroundImage: `url(assets/images/person_4.jpg)`,
                        }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Prasad Patil</p>
                        <span className="position">MERN Stack Developer</span>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{
                          backgroundImage: `url(assets/images/person_1.jpg)`,
                        }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Chaitanya Shinde</p>
                        <span className="position">Web Developer</span>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{
                          backgroundImage: `url(assets/images/person_4.jpg)`,
                        }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Swapnil Nyadhe</p>
                        <span className="position">Web Developer</span>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{
                          backgroundImage: `url(assets/images/person_1.jpg)`,
                        }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Tejas Saindane</p>
                        <span className="position">Frontend Developer</span>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimony-wrap rounded text-center py-4 pb-5">
                      <div
                        className="user-img mb-2"
                        style={{
                          backgroundImage: `url(assets/images/person_1.jpg)`,
                        }}
                      ></div>
                      <div className="text pt-4">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Kartik Pawar</p>
                        <span className="position">MERN Stack Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Blog</span>
                <h2>Recent Blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{
                      backgroundImage: `url('assets/images/image_1.jpg')`,
                    }}
                  ></a>
                  <div className="text pt-4">
                    <div className="meta mb-3">
                      <div>
                        <a href="#">Oct. 29, 2019</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat"></span> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading mt-2">
                      <a href="#">
                        Why Lead Generation is Key for Business Growth
                      </a>
                    </h3>
                    <p>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{
                      backgroundImage: `url('assets/images/image_2.jpg')`,
                    }}
                  ></a>
                  <div className="text pt-4">
                    <div className="meta mb-3">
                      <div>
                        <a href="#">Oct. 29, 2019</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat"></span> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading mt-2">
                      <a href="#">
                        Why Lead Generation is Key for Business Growth
                      </a>
                    </h3>
                    <p>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{
                      backgroundImage: `url('assets/images/image_3.jpg')`,
                    }}
                  ></a>
                  <div className="text pt-4">
                    <div className="meta mb-3">
                      <div>
                        <a href="#">Oct. 29, 2019</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat"></span> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading mt-2">
                      <a href="#">
                        Why Lead Generation is Key for Business Growth
                      </a>
                    </h3>
                    <p>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-counter ftco-section img" id="section-counter">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="60">
                      0
                    </strong>
                    <span>
                      Year <br />
                      Experienced
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="1090">
                      0
                    </strong>
                    <span>
                      Total <br />
                      Cars
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text text-border d-flex align-items-center">
                    <strong className="number" data-number="2590">
                      0
                    </strong>
                    <span>
                      Happy <br />
                      Customers
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                <div className="block-18">
                  <div className="text d-flex align-items-center">
                    <strong className="number" data-number="67">
                      0
                    </strong>
                    <span>
                      Total <br />
                      Branches
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default HomeScreen;
