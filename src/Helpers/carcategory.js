const API = process.env.REACT_APP_API;

export const addcompany = (data) => {
  return fetch(`${API}/addcompany`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const addcar = (data) => {
  return fetch(`${API}/addcar`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const addvariant = (data) => {
  return fetch(`${API}/addvariant`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const getcompany = () => {
  return fetch(`${API}/getcompanies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const getcars = (id) => {
  return fetch(`${API}/getcars/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
