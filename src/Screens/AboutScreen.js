import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutScreen = () => {
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
                    About us <i className="ion-ios-arrow-forward"></i>
                  </span>
                </p>
                <h1 className="mb-3 bread">About Us</h1>
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
                  CarBook is India’s largest online B2B marketplace, connecting buyers with suppliers.CarBook has launched many innovative features to ensure that users get an immersive experience of the car model before visiting a dealer showroom.
                  </p>
                  <p>
                  CarBook is India's leading car search venture that helps users buy cars that are right for them. Its website and app carry rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all car brands and models available in India. The company has tie-ups with many auto manufacturers, more than 4000 car dealers and numerous financial institutions to facilitate the purchase of vehicles.
                  </p>
                  <p>
                    <a href="/cars" className="btn btn-primary py-3 px-4">
                      Search Vehicle
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
    </>
  );
};

export default AboutScreen;
