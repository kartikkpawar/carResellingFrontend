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
export const deleteBidInfo = (id, token) => {
  console.log(id);

  return fetch(`${API}/deleteBid/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const makeRequest = (id, token, buyerId, data) => {
  return fetch(`${API}/${buyerId}/sendrequest/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const carBids = (id) => {
  return fetch(`${API}/carBids/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const bidderData = (id) => {
  return fetch(`${API}/bidInfo/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
