import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BiCalendar, BiCamera } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import { isAuthenticated } from "../../Helpers/authentication";
import { getcars, getcompany, getvairnats } from "../../Helpers/carcategory";
import { addCarSeller } from "../../Helpers/cars";

const SellerAddCar = () => {
  const [calenderVisible, setCalenderVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const { user, token } = isAuthenticated();

  const [carData, setCarData] = useState({
    image: "",
    companyName: "",
    carName: "",
    fuel: "",
    category: "",
    description: "",
    ownership: "",
    cost: "",
    kmDriven: "",
    color: "",
    regNumber: "",
    mode: "",
    variant: "",
    milage: "",
    seats: "",
    luggage: "",
  });

  const {
    image,
    companyName,
    carName,
    fuel,
    category,
    description,
    ownership,
    cost,
    kmDriven,
    color,
    regNumber,
    mode,
    variant,
    milage,
    seats,
    luggage,
  } = carData;

  const handelChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    setCarData({ ...carData, [name]: value });

    if (name === "companyName") {
      return carListLoader(value);
    }
    if (name === "carName") {
      return variantLoader(value);
    }
  };
  const handelSubmit = () => {
    // NOTE send the ownerId as "owner" from user._id

    const formData = new FormData();
    formData.set("image", image);
    formData.set("companyName", companyName);
    formData.set("carName", carName);
    formData.set("fuel", fuel);
    formData.set("category", category);
    formData.set("description", description);
    formData.set("ownership", ownership);
    formData.set("cost", cost);
    formData.set("kmDriven", kmDriven);
    formData.set("color", color);
    formData.set("regNumber", regNumber);
    formData.set("milage", milage);
    formData.set("seats", seats);
    formData.set("luggage", luggage);
    formData.set("mode", mode);
    formData.set("variant", variant);
    formData.set("purchaseDate", date);
    formData.set("owner", user._id);

    for (const obj of formData.entries()) {
      console.log(obj);
    }
    addCarSeller(formData, user._id, token)
      .then((data) => {
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

        setCarData({
          image: "",
          companyName: "",
          carName: "",
          fuel: "",
          category: "",
          description: "",
          ownership: "",
          cost: "",
          kmDriven: "",
          color: "",
          regNumber: "",
          mode: "",
          variant: "",
          milage: "",
          seats: "",
          luggage: "",
        });
        setDate(new Date());

        return toast.success("Car added successfully", {
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
    if (image) {
      const data = URL.createObjectURL(image);
      return (
        <img
          src={data}
          alt=""
          style={{
            height: "190px",
            width: "310px",
            marginRight: "10px",
          }}
        />
      );
    }
    const data =
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    return (
      <img
        src={data}
        alt="NOT LOADING"
        style={{
          height: "190px",
          width: "310px",
          marginRight: "10px",
        }}
      />
    );
  };

  // NOTE the car cateory integration starts here
  const [carCompany, setCarCompany] = useState([]);
  const [carList, setCarList] = useState([]);
  const [varlist, setVarlist] = useState([]);

  useEffect(() => {
    getcompany()
      .then((data) => {
        if (data.error) {
          return setCarCompany([]);
        }
        return setCarCompany(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const carListLoader = (id) => {
    getcars(id)
      .then((data) => {
        if (data.error) {
          return setCarList([]);
        }
        return setCarList(data);
      })
      .catch((err) => console.log(err));
  };
  const variantLoader = (id) => {
    getvairnats(id)
      .then((data) => {
        if (data.error) {
          return setVarlist([]);
        }
        return setVarlist(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ padding: "10px" }}
      className="d-flex flex-column align-items-center"
    >
      <span className="display-4">Add car for sell</span>
      <div className="row w-100 mt-4 d-flex justify-content-center">
        <div className="d-flex align-items-end">
          {profileUrlBuilder()}
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="profilepic"
            style={{ display: "none" }}
            onChange={handelChange("image")}
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
        <div className="col-md-4">
          <select
            className="form-control"
            value={companyName}
            onChange={handelChange("companyName")}
          >
            <option className="hidden" selected disabled>
              Please select your company
            </option>
            {carCompany.map((com) => (
              <option key={com._id} value={com._id}>
                {com.name}
              </option>
            ))}
          </select>
        </div>{" "}
        <div className="col-md-4">
          <select
            className="form-control"
            value={carName}
            onChange={handelChange("carName")}
          >
            <option className="hidden" selected disabled>
              Please select your car name
            </option>
            {carList.map((carVal) => (
              <option key={carVal._id} value={carVal._id}>
                {carVal.name}
              </option>
            ))}
          </select>
        </div>{" "}
        <div className="col-md-4">
          <select
            className="form-control"
            value={variant}
            onChange={handelChange("variant")}
          >
            <option className="hidden" selected disabled>
              Please select your car variant
            </option>

            {varlist.map((varientVal) => (
              <option key={varientVal._id} value={varientVal._id}>
                {varientVal.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-4">
          <select
            className="form-control"
            value={ownership}
            onChange={handelChange("ownership")}
          >
            <option className="hidden" selected disabled>
              Please select car ownership
            </option>
            <option>1</option>
            <option>2</option>
            <option>3 or higher</option>
          </select>
        </div>{" "}
        <div className="col-md-4">
          <select
            className="form-control"
            value={fuel}
            onChange={handelChange("fuel")}
          >
            <option className="hidden" selected disabled>
              Please select fuel type
            </option>
            <option>Petrol</option>
            <option>Disel</option>
            <option>Electric</option>
          </select>
        </div>{" "}
        <div className="col-md-4">
          <select
            className="form-control"
            value={mode}
            onChange={handelChange("mode")}
          >
            <option className="hidden" selected disabled>
              Please select transmission
            </option>
            <option>Manual</option>
            <option>Automatic</option>
          </select>
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Milage of the vehicle in Km/pL *"
            value={milage}
            onChange={handelChange("milage")}
          />
        </div>{" "}
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="No of seats *"
            value={seats}
            onChange={handelChange("seats")}
          />
        </div>{" "}
        <div className="col-md-4">
          <select
            className="form-control"
            value={luggage}
            onChange={handelChange("luggage")}
          >
            <option className="hidden" selected disabled>
              Please select Luggage
            </option>
            <option value={false}>Nope</option>
            <option value={true}>Yes, Its there</option>
          </select>
        </div>{" "}
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6">
          <select
            className="form-control"
            value={category}
            onChange={handelChange("category")}
          >
            <option className="hidden" selected disabled>
              Please select car type
            </option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>MUV</option>
            <option>Sports</option>
            <option>Hatchback</option>
            <option>Minivan</option>
            <option>Convertible</option>
            <option>Crossover</option>
            <option>Other</option>
          </select>
        </div>
        <div style={{ paddingRight: "15px" }} className="w-100 col-md-6">
          <div
            onClick={() => setCalenderVisible(true)}
            style={{ border: "1px solid lightgrey", paddingLeft: "15px" }}
            className="postion-relative d-flex justify-content-start align-items-center rounded"
          >
            <BiCalendar
              style={{ color: "#000", fontSize: "1.4rem", cursor: "pointer" }}
            />

            <span
              style={{
                color: "#000",
                fontSize: "1.4rem",
                marginLeft: "10px",
                userSelect: "none",
                fontWeight: "400",
                padding: "2px",
              }}
            >
              {moment(date).format("DD-MM-YYYY")}
            </span>

            {calenderVisible && (
              <div
                className="position-absolute"
                style={{
                  zIndex: "100",
                }}
              >
                <Calendar
                  maxDate={new Date()}
                  onChange={(event) => {
                    setDate(event);
                    setCalenderVisible(false);
                  }}
                  value={date}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Registration Number *"
            value={regNumber}
            onChange={handelChange("regNumber")}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Car Color *"
            value={color}
            onChange={handelChange("color")}
          />
        </div>{" "}
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Km Driven *"
            value={kmDriven}
            onChange={handelChange("kmDriven")}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Expected Cost *"
            value={cost}
            onChange={handelChange("cost")}
          />
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Tell us something about your car"
            value={description}
            onChange={handelChange("description")}
          />
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <input
            type="submit"
            className="btnRegister"
            value="Add Car"
            onClick={handelSubmit}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SellerAddCar;
