import { homeService } from "../service";
import { homeTypes } from "./type";

export const getListAssets = (data) => async (dispatch, getState) => {
  try {
    dispatch(request(data));
    homeService.getListAccess(data).then(
      (dataRes) => {
        dispatch(success(dataRes));
        return dataRes;
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  } catch (error) {
    dispatch(failure(error));
  }

  function request(data) {
    return { type: homeTypes.GET_ASSETS_REQUEST, data };
  }
  function success(dataRes) {
    return { type: homeTypes.GET_ASSETS_SUCCESS, payload: dataRes.data };
  }
  function failure(error) {
    return {
      type: homeTypes.GET_ASSETS_FAILURE,
      payload: error.data.msg,
    };
  }
};

export const getListPrices = (params) => async (dispatch, getState) => {
  try {
    dispatch(request(params));
    homeService.getListPrices(params).then(
      (dataRes) => {
        dispatch(success(dataRes));
        return dataRes;
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  } catch (error) {
    dispatch(failure(error));
  }

  function request(params) {
    return { type: homeTypes.GET_PRICE_REQUEST, params };
  }
  function success(dataRes) {
    return { type: homeTypes.GET_PRICE_SUCCESS, payload: dataRes.data };
  }
  function failure(error) {
    return {
      type: homeTypes.GET_PRICE_FAILURE,
      payload: error.data.msg,
    };
  }
};
