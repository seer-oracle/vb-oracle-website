import React, { useCallback, useState } from "react";
import IcUp from "../assets/images/select_field/up.svg";
import IcDown from "../assets/images/select_field/down.svg";
import { iconsSelectField } from "../assets";

const SelectField = ({
  name,
  note,
  className,
  iconTitle,
  value = null,
  label = "",
  styleInput,
  options = [],
  placeholder = "",
  disabled = false,
  onSelected = null,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleIcon = (selectedOption) => {
    switch (selectedOption.symbol) {
      case "BTC":
        return iconsSelectField.bitcoin;
      case "ETH":
        return iconsSelectField.ethereum;
      case "VEUSD":
        return iconsSelectField.veUsd;
      case "VTHO":
        return iconsSelectField.veThor;
      case "VET":
        return iconsSelectField.veChain;
      case "VB":
        return iconsSelectField.veBank;
      default:
        return iconsSelectField.veBank;
    }
  };

  const handleSelectedOptionChange = useCallback(
    (option) => {
      const selectedOption = options.find((e) => e.symbol === option.symbol);
      setShowOptions(false);
      onSelected && onSelected(selectedOption);
    },
    [onSelected, options]
  );
  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      <div className={`flex flex-row items-center ${label ? "mb-4" : "mb-0"}`}>
        {label && (
          <label
            htmlFor={name}
            className={`text-xl font-bold font-inter ${
              disabled ? "text-[#464852]" : "text-white "
            }`}
          >
            {label}
          </label>
        )}
        {note && (
          <p className="ml-1 text-sm text-[#7E7E7F] font-normal">{note}</p>
        )}
        {iconTitle && (
          <img src={iconTitle} alt="allAdmin" className="w-6 h-6 ml-3" />
        )}
      </div>
      {showOptions && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-transparent"
          onClick={() => setShowOptions(false)}
        />
      )}
      <button
        className="select__field bg-select-field w-full py-[20px] px-4 rounded-lg flex flex-row items-center justify-between relative"
        disabled={disabled}
        onClick={() => setShowOptions(!showOptions)}
        style={styleInput}
      >
        <p
          className={`font-montserrat  ${
            value !== ""
              ? !disabled
                ? "text-white"
                : "text-[#464852]"
              : !disabled
              ? "text-[#9CA3AF]"
              : "text-[#464852]"
          }`}
        >
          {value !== null ? (
            <div className="flex flex-row items-center">
              <span>
                <img src={handleIcon(value)} alt="icon" />
              </span>
              <span className="text-white font-inter ml-2">{value.symbol}</span>
              <span className="font-inter ml-2 text-color-text-footer">
                {value.symbol_name}
              </span>
            </div>
          ) : (
            placeholder
          )}
        </p>
        {!disabled && (
          <img
            src={showOptions ? IcUp : IcDown}
            alt={"up_down"}
            className="w-5 h-5"
          />
        )}
      </button>
      <div
        className={`${
          showOptions ? "flex" : "hidden"
        } absolute top-[120px] left-0 w-full flex-col rounded-md z-[1] appearance-none select__option__view`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`select__field bg-select-field mb-[1px] w-full flex flex-row items-center cursor-pointer hover:bg-select-field-hover py-[20px] px-4 rounded-md`}
            onClick={() => handleSelectedOptionChange(option)}
          >
            <span>
              <img src={handleIcon(option)} alt="icon" />
            </span>
            <span
              className="text-white font-inter ml-2"
              key={option.value}
              value={option.value}
            >
              {option.symbol}
            </span>
            <span className="font-inter ml-2 text-color-text-footer">
              {option.symbol_name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectField;
