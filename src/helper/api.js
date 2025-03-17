import axios from "../config/axios";
async function getDataFromDB(limit, skip, sortBy, order) {
  const resp = await axios.get("products", {
    params: {
      limit,
      skip,
      sortBy: sortBy === undefined ? "" : sortBy,
      order: order === "default" ? "" : order,
    },
  });
  return resp.data.products;
}

async function getSingleProduct(id) {
  const resp = await axios.get(`products/${id}`);
  return resp.data;
}

async function getAllCategories() {
  const resp = await axios.get("products/categories");
  return resp.data;
}

async function getSignleCategory(slug) {
  const resp = await axios.get(`products/category/${slug}`);
  return resp.data;
}

async function getAccessToken(userCridential) {
  const resp = await axios.post("auth/login", userCridential);
  const data = await resp.data;
  return data.accessToken;
}

async function authUserUsingToken(accessToken) {
  const resp = await axios.get("auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = resp.data;
  return data;
}

export {
  getDataFromDB,
  getSingleProduct,
  getAllCategories,
  getSignleCategory,
  getAccessToken,
  authUserUsingToken,
};
