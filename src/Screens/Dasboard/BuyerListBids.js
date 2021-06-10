import React, { useEffect, useState } from "react";
import { buyerBids } from "../../Helpers/Bids";
import { isAuthenticated } from "../../Helpers/authentication";
import moment from "moment";
import { BiNavigation, BiTrash } from "react-icons/bi";
import { useHistory } from "react-router";

const BuyerListBids = () => {
  const { user, token } = isAuthenticated();
  const [bids, setBids] = useState([]);
  const history = useHistory();
  const [bidError, setBidError] = useState(false);

  useEffect(() => {
    buyerBids(user._id, token)
      .then((data) => {
        if (data.error) {
          return setBidError(data.error);
        }
        return setBids(data.reverse());
      })
      .catch();
  }, []);

  const deleteBid = (id) => {
    alert(id);
  };

  return (
    <div className="bids-container d-flex align-items-center flex-column mt-1 ">
      <h1 className="mb-4 mt-5">Your Bids</h1>
      <div>
        <table class="table w-100">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col" className="text-center">
                Message
              </th>
              <th scope="col" className="text-center">
                Amount
              </th>
              <th scope="col" className="text-center">
                Time
              </th>
              <th scope="col" className="text-center">
                Delete Bid
              </th>
              <th scope="col" className="text-center">
                Visit car
              </th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, idx) => (
              <tr>
                <td className="text-center">{idx + 1}</td>
                <td className="text-center">{bid.message}</td>
                <td className="text-center">{bid.amount}</td>
                <td className="text-center">
                  {moment(bid.createdAt).fromNow()}
                </td>
                <td className="text-center" onClick={() => deleteBid(bid._id)}>
                  <BiTrash style={{ color: "#E21717", fontSize: "1.5rem" }} />
                </td>
                <td
                  className="text-center"
                  onClick={() => history.push(`/car/${bid.car}`)}
                >
                  <BiNavigation
                    style={{ color: "#00D84A", fontSize: "1.5rem" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerListBids;
