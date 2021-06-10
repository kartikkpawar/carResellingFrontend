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
