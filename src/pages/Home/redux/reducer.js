import { homeTypes } from "./type";

const initialState = {
  error: null,
  requesting: false,
  prices: [],
  assets: [],
  symbol: "",
};

export function home(state = initialState, action) {
  switch (action.type) {
    case homeTypes.GET_ASSETS_REQUEST:
      return {
        ...state,
      };
    case homeTypes.GET_ASSETS_SUCCESS:
      return {
        ...state,
        requesting: false,
        assets: action.payload.list_asset,
      };
    case homeTypes.GET_ASSETS_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };
    case homeTypes.GET_PRICE_REQUEST:
      return {
        ...state,
        requesting: true,
        symbol: action.params,
      };
    case homeTypes.GET_PRICE_SUCCESS:
      return {
        ...state,
        requesting: false,
        prices: action.payload.list_price,
      };
    case homeTypes.GET_PRICE_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
