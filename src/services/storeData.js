import http from "./http";
import { byCategoryApi, ganeralApi } from "../config.json";

export const getAllProducts = async () => {
  return await http.get(`${ganeralApi}`);
};

export const getProductByCategory = async (Category) => {
  return await http.get(`${byCategoryApi}${Category}`);
};

export const getProductByID = async (id) => {
  return await http.get(`${ganeralApi}/${id}`);
};

export default {
  getAllProducts,
  getProductByCategory,
  getProductByID,
};
