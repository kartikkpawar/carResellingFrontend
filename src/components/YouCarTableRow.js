import React, { useState } from "react";
import { BiEdit, BiTrash, BiNavigation } from "react-icons/bi";
import Currency from "react-currency-formatter";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { deleteCar, updateSoldStatus } from "../Helpers/cars";
import { isAuthenticated } from "../Helpers/authentication";
import { toast } from "react-toastify";
import { getcarname, getvariantname } from "../Helpers/carcategory";
const YouCarTableRow = ({ car, idx, openModal, reRenderPage }) => {
  const [delModal, setDelModal] = useState(false);
  const [carId, setCarId] = useState("");

  const { user, token } = isAuthenticated();

  const handelDelete = (status) => {
    if (!status) {
      return setDelModal(false);
    }
    if (carId !== "") {
      deleteCar(user._id, token, carId).then((data) => {
        if (data.error) {
          toast.error("Something went wrong", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
          return setDelModal(false);
        }
        toast.warn("Deletion was successfull", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
        setDelModal(false);
        return reRenderPage(true);
      });
    }
  };

  const updateSoldStatusHelper = (id, soldStatus) => {
    const val = { soldStatus };
    updateSoldStatus(id, token, user._id, val)
      .then((data) => {
        console.log(data);
        if (data.error) {
          return toast.warn("Unable to update status", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        }
        setDelModal(false);
        return reRenderPage(true);
      })
      .catch((err) => console.log(err));
  };
  const [carname, setCarname] = useState("");
  const [varname, setVarname] = useState("");
  const carnameHelper = () => {
    let name = "Unable to get name";
    getcarname(car.carName).then((data) => {
      if (data.error) {
        return name;
      }
      setCarname(data.name);
    });
    return name;
  };
  const varnameHelper = () => {
    let name = "Unable to get name";
    getvariantname(car.variant).then((data) => {
      if (data.error) {
        console.log(data.error);
        return name;
      }
      setVarname(data.name);
    });

    return name;
  };
  carnameHelper();
  varnameHelper();

  return (
    <>
      {" "}
      <tr>
        <td className="text-center">{idx + 1}</td>
        <td className="text-center">{carname}</td>
        <td className="text-center">{varname}</td>
        <td className="text-center">
          <span
            className={`btn ${car.sold ? "btn-danger" : "btn-success"}`}
            onClick={() => {
              updateSoldStatusHelper(car._id, !car.sold);
            }}
          >
            {car.sold ? "Sold Out" : "Not Sold"}
          </span>
        </td>
        <td className="text-center">
          <Currency quantity={car.cost} currency="INR" />
        </td>
        <td className="text-center">
          <BiEdit
            style={{ color: "#1089ff", fontSize: "1.5rem" }}
            onClick={() => openModal(car._id)}
          />
        </td>
        <td className="text-center">
          <BiTrash
            style={{ color: "#E21717", fontSize: "1.5rem" }}
            onClick={() => {
              setCarId(car._id);
              setDelModal(true);
            }}
          />
        </td>
        <td className="text-center">
          <BiNavigation style={{ color: "#00D84A", fontSize: "1.5rem" }} />
        </td>
      </tr>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="d-flex align-items-center justify-content-center"
        open={delModal}
        onClose={() => setDelModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={delModal}>
          <div className="d-flex flex-column align-items-center w-auto">
            <h1 className="text-light">Are you sure you want to delete</h1>
            <div className="d-flex w-50 justify-content-between">
              <button
                className="btn btn-success"
                style={{ fontSize: "1.5rem" }}
                onClick={() => handelDelete(false)}
              >
                No
              </button>
              <button
                className="btn btn-danger"
                style={{ fontSize: "1.5rem" }}
                onClick={() => handelDelete(true)}
              >
                Yes, Unfortunately
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default YouCarTableRow;
