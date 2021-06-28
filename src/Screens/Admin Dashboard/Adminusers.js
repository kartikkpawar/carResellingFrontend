import React, { useEffect, useState } from "react";
import { getAllBuyers, getAllSellers } from "../../Helpers/buyersAndSellers";

const Adminusers = () => {
  const [buyer, setBuyer] = useState(true);
  const [data, setData] = useState([]);
  const [rerender, setRerender] = useState(false);
  const handelChange = () => {
    setBuyer(!buyer);
    setRerender(!rerender);
  };
  useEffect(() => {
    if (buyer) {
      return getAllBuyers().then((data) => {
        if (data.error) {
          setData([]);
          return alert("No Buyers found currently");
        }
        return setData(data);
      });
    }
    return getAllSellers().then((data) => {
      if (data.error) {
        return alert("No Sellers found currently");
      }
      return setData(data);
    });
  }, [rerender]);
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <span
          className={`${!buyer ? "buyerText" : "textActive"}`}
          onClick={handelChange}
        >
          Buyers
        </span>
        <span
          className={`${buyer ? "sellerText" : "textActive"}`}
          onClick={handelChange}
        >
          Seller
        </span>
      </div>
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              #
            </th>
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              Contact
            </th>
            <th scope="col" className="text-center">
              Email
            </th>{" "}
            <th scope="col" className="text-center">
              District
            </th>
            <th scope="col" className="text-center">
              State
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr>
              <td className="text-center">{idx + 1}</td>
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.contact}</td>
              <td className="text-center">{user.email}</td>
              <td className="text-center">{user.district}</td>
              <td className="text-center">{user.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Adminusers;
