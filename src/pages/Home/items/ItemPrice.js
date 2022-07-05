import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const ItemPrice = ({ item }) => {
  const { symbol } = useSelector((state) => state.home, shallowEqual);

  const handleCurrency = () => {
    return Object.keys(item)[0].slice(symbol.length);
  };
  return (
    <div className="item__price bg-item-price h-[96px] rounded-lg flex flex-col items-center justify-center">
      <p className="text-white text-base font-inter">{`${symbol}/${handleCurrency()}`}</p>
      <div className="flex flex-row items-center mt-4">
        <p className="text-color-text-item-price text-base font-inter font-bold">
          {Object.values(item)[0] !== null
            ? parseFloat(Object.values(item)[0]).toFixed(5)
            : ""}
        </p>
        <p className="text-color-text-item-price font-inter text-base ml-1 font-bold">
          {handleCurrency()}
        </p>
      </div>
    </div>
  );
};

export default ItemPrice;
