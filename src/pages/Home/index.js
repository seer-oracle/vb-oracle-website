import React from "react";
import SelectField from "../../components/SelectField";
import { useHome } from "./hook";
import ItemPrice from "./items/ItemPrice";
import "./styles.scss";

const Home = () => {
  const { assets, value, prices, requesting, onChangeSelected } = useHome();

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center">
      <div className="container pt-[120px] flex flex-col items-center">
        <p className="text-white md:text-5xl text-3xl font-inter-black font-black">
          Seer Data Feeds
        </p>
        <SelectField
          label="Select a crypto asset"
          placeholder="..."
          value={value}
          className={"mt-12 z-[1]"}
          onSelected={onChangeSelected}
          options={assets}
        />
        {prices.length > 0 && !requesting && (
          <div className="flex flex-col justify-start w-full mt-12">
            <p className="text-xl font-bold font-inter text-white">
              Most popular feeds
            </p>
            <div
              className={`grid ${
                prices.length >= 4 ? "md:grid-cols-4" : `md:grid-cols-3`
              } grid-cols-1 md:gap-4 gap-4 mt-6 md:pb-12 pb-6`}
            >
              {prices.map(
                (item, index) =>
                  Object.values(item)[0] !== null && (
                    <div key={index}>
                      <ItemPrice item={item} />
                    </div>
                  )
              )}
            </div>
          </div>
        )}
        {requesting && <div className="loading mt-[120px]" />}
      </div>
    </div>
  );
};

export default Home;
