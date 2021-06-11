const API = process.env.REACT_APP_API;

export const sellerSignIn = (user) => {
  console.log("HITTING HERE");
  return fetch(`${API}/signin/seller`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const buyerSignIn = (user) => {
  return fetch(`${API}/signin/buyer`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const sellerSignUp = (seller) => {
  console.log(seller.get("password"));
  return fetch(`${API}/seller/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: seller,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const buyerSignUp = (buyer) => {
  console.log(buyer.get("password"));
  return fetch(`${API}/buyer/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: buyer,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const signOut = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
  }
  return fetch(`${API}/signout`, { method: "GET" })
    .then((response) => console.log("Signout Succesfull"))
    .catch((err) => console.log(err));
};

// Update Routes
export const sellerUpdate = (seller, id, token) => {
  return fetch(`${API}/seller/${id}/update`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: seller,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const buyerUpdate = (buyer, id, token) => {
  return fetch(`${API}/buyer/${id}/update`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: buyer,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
