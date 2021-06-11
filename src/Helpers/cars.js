const API = process.env.REACT_APP_API;

export const getSingleCar = (id) => {
  console.log(id);
  return fetch(`${API}/car/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const updateSoldStatus = (id, token, sellerId, soldValue) => {
  console.log(id);
  console.log(token);
  console.log(soldValue);
  return fetch(`${API}/${sellerId}/${id}/soldStatus`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(soldValue),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const getAllCars = () => {
  return fetch(`${API}/getAllCars`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const addCarSeller = (car, id, token) => {
  return fetch(`${API}/addCar/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: car,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const getCarsSeller = (id, token) => {
  return fetch(`${API}/mycars/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const editCarData = (car, userId, id, token) => {
  console.log(id);
  return fetch(`${API}/${userId}/editcar/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: car,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const deleteCar = (sellerid, token, carId) => {
  return fetch(`${API}/cars/${sellerid}/remove/${carId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
