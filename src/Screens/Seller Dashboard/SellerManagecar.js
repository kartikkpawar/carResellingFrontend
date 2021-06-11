import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { getCarsSeller } from "../../Helpers/cars";
import { isAuthenticated } from "../../Helpers/authentication";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import YouCarTableRow from "../../components/YouCarTableRow";
import EditCarModal from "../../components/EditCarModal";

const SellerManagecar = () => {
  const [carData, setCarData] = useState([]);
  const { user, token } = isAuthenticated();
  const [modalOpen, setModalOpen] = useState(false);
  const [carId, setCarId] = useState("");
  const [rerender, setRerender] = useState(true);
  const [delModel, setDelModel] = useState(false);
  useEffect(() => {
    getCarsSeller(user._id, token)
      .then((data) => {
        if (data.error) {
          return toast.success(data.error, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        }
        setCarData(data);
      })
      .catch();
  }, [rerender]);

  return (
    <div className="d-flex align-items-center flex-column mt-1 ">
      <span className="display-4 mt-4 mb-5">Manage your cars</span>
      <div
        style={{
          height: "77vh",
          overflowY: "scroll",
        }}
        id="hideScroll"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Variant
              </th>
              <th scope="col" className="text-center">
                Expected Cost
              </th>
              <th scope="col" className="text-center">
                Edit
              </th>
              <th scope="col" className="text-center">
                Delete
              </th>
              <th scope="col" className="text-center">
                Visit
              </th>
            </tr>
          </thead>
          <tbody>
            {carData.map((car, idx) => (
              <YouCarTableRow
                car={car}
                idx={idx}
                openModal={(stat) => {
                  setModalOpen(true);
                  setCarId(stat);
                }}
                reRenderPage={(stat) => setRerender(!rerender)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="d-flex align-items-center justify-content-center"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <EditCarModal
            id={carId}
            closeModal={(stat) => {
              setModalOpen(false);
              setRerender(!rerender);
            }}
          />
        </Fade>
      </Modal>
    </div>
  );
};

export default SellerManagecar;
