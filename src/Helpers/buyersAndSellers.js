const API = process.env.REACT_APP_API;

export const getBuyerById = (id, token) => {
  console.log(id);
  return fetch(`${API}/buyer/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getSellerById = (id, token) => {
  console.log(id);
  return fetch(`${API}/seller/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getAllBuyers = () => {
  return fetch(`${API}/getAllBuyers`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getAllSellers = () => {
  return fetch(`${API}/getAllSellers`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getTotalUsers = () => {
  return fetch(`${API}/usercounts`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
