import { iconsSelectField } from "../assets";

const OPTIONS_SELECT_FILTER = [
  { value: 1, icon: iconsSelectField.veChain, symbol_name: "VeChain", symbol: "VET" },
  { value: 2, icon: iconsSelectField.veThor, symbol_name: "VeThor Token", symbol: "VTHO" },
  { value: 3, icon: iconsSelectField.veUsd, symbol_name: "VeUSD", symbol: "VEUSD" },
  { value: 4, icon: iconsSelectField.bitcoin, symbol_name: "Bitcoin", symbol: "BTC" },
  { value: 5, icon: iconsSelectField.ethereum, symbol_name: "Ethereum", symbol: "ETH" },
];

const Prices = [
    { crypto: "VET/USDT", price: 0.02451, currency: "USDT" },
    { crypto: "VET/USDT", price: 0.02451, currency: "USDT" },
    { crypto: "VET/USDT", price: 0.02451, currency: "USDT" },
    { crypto: "VET/USDT", price: 0.02451, currency: "USDT" },
    { crypto: "VET/USDT", price: 0.02451, currency: "USDT" },
    { crypto: "VET/USDT", price: 0.02451, currency: "USDT" },
    { crypto: "VET/USDT", price: 0.02451, currency: "USDT" },
  ];

export { OPTIONS_SELECT_FILTER, Prices };
