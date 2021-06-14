import React, { useState } from "react";
import { toast } from "react-toastify";
import { addcompany } from "../../Helpers/carcategory";

const Carcategories = () => {
  const [categoriesInputs, setCategoriesInputs] = useState({
    company: "",
    car: "",
    variant: "",
  });

  const { company, car, variant } = categoriesInputs;
  const [carList, setCarList] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  const handelAddCompany = () => {
    // addcompany(company)
    //   .then((data) => {
    //     if (data.error) {
    //       return toast.warning(data.error, {
    //         position: "bottom-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: false,
    //         draggable: true,
    //       });
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ padding: "10px" }}
      className="d-flex flex-column align-items-center"
    >
      <span className="display-4">Car Manager</span>

      <div className="row w-100 mt-4 d-flex flex-column align-items-center ">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Company Name *"
          />
        </div>

        <div className="row">
          <div className="col mt-2">
            <button className="btn btn-success" onClick={handelAddCompany}>
              {" "}
              Add Company
            </button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row w-100 mt-4 d-flex flex-column align-items-center ">
        <span className="display-4">OR</span>
      </div>
      <div className="row w-100 mt-4 d-flex flex-column align-items-center">
        <div className="row">
          <div className="col-md-6">
            <select className="form-control">
              <option className="hidden" selected disabled>
                Comapny Name
              </option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Car Name *"
            />
          </div>
        </div>

        <div className="row">
          <div className="col mt-2">
            <button className="btn btn-success"> Add Car</button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row w-100 mt-4 d-flex flex-column align-items-center ">
        <span className="display-4">OR</span>
      </div>
      <div className="row w-100 mt-4 d-flex flex-column align-items-center ">
        <div className="row">
          <div className="col-md-4">
            <select className="form-control">
              <option className="hidden" selected disabled>
                Comapny Name
              </option>
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-control">
              <option className="hidden" selected disabled>
                Car name
              </option>
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Car variant *"
            />
          </div>
        </div>

        <div className="row">
          <div className="col mt-2">
            <button className="btn btn-success"> Add Variant</button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Carcategories;
