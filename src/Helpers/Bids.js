const API = process.env.REACT_APP_API;

export const sellerMyBids = (id, token) => {
  console.log(id);
  console.log(token);

  return fetch(`${API}/${id}/sellerBids`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const buyerBids = (id, token) => {
  return fetch(`${API}/${id}/buyerBids`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const getBid = (id, token) => {
  return fetch(`${API}/bid/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const bidInfo = (id) => {
  console.log(id);

  return fetch(`${API}/bidInfo/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
