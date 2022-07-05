import axiosClient from "../../services/axiosClient";

const route = "/oracle";

export const homeService = {
  getListAccess: () => {
    return axiosClient.get(`${route}/asset/now_available`);
  },
  getListPrices: (symbol) => {
    return axiosClient.get(`${route}/price/symbol/${symbol}`);
  },
};