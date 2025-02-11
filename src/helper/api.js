import axios from "../config/axios";
async function getDataFromDB(limit, skip) {
  const resp = await axios.get("products", {
    params: {
      limit,
      skip,
    },
  });
  return resp.data.products;
}

async function getSingleProduct(id) {
  const resp = await axios.get(`products/${id}`);
  return resp.data;
}

export { getDataFromDB, getSingleProduct };
