import { useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "./redux/action";
export const useHome = () => {
  const { assets, prices, requesting } = useSelector(
    (state) => state.home,
    shallowEqual
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  const getListAssets = useCallback(async () => {
    await dispatch(actions.getListAssets());
  }, [dispatch]);

  const getListPrices = useCallback(
    async (symbol) => {
      await dispatch(actions.getListPrices(symbol));
    },
    [dispatch]
  );

  const onChangeSelected = useCallback(
    (selected) => {
      setValue(selected);
      getListPrices(selected.symbol);
    },
    [getListPrices]
  );

  useEffect(() => {
    getListAssets();
  }, [getListAssets]);

  useEffect(() => {
    if (assets.length > 0) {
      const index = assets.findIndex((asset) => asset.symbol === "BTC");
      if (index !== -1) {
        onChangeSelected(assets[index]);
      }
    }
  }, [assets, onChangeSelected]);

  return { assets, value, onChangeSelected, prices, requesting };
};
