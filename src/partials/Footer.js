import React from "react";
import { iconsFooter, iconsNav } from "../assets";

const Footer = () => {
  return (
    <div className="footer w-full flex flex-row items-center justify-center">
      <div className="container w-full pt-12 md:pb-20 pb-12 flex flex-col md:flex-row justify-between items-center">
        <img
          src={iconsNav.logoVB}
          alt={"logoVB"}
          className="md:w-[200px] md:h-[50px] w-[140px] h-[35px] md:mb-0 mb-6"
        />

        <div className="flex flex-row items-center">
          <a
            href="##"
            className="md:mr-8 sm:mr-6 mr-3 flex flex-col items-center justify-center"
          >
            <img src={iconsFooter.telegram} alt="telegram"></img>
            <p className="font-inter text-sm text-color-text-footer mt-2">
              Telegram
            </p>
          </a>
          <a
            href="##"
            className="md:mx-8 sm:mx-6 mx-3 flex flex-col items-center justify-center"
          >
            <img src={iconsFooter.discord} alt="discord"></img>
            <p className="font-inter text-sm text-color-text-footer mt-2">
              Discord
            </p>
          </a>
          <a
            href="##"
            className="md:mx-8 sm:mx-6 mx-3 flex flex-col items-center justify-center"
          >
            <img src={iconsFooter.twitter} alt="twitter"></img>
            <p className="font-inter text-sm text-color-text-footer mt-2">
              Twitter
            </p>
          </a>
          <a
            href="##"
            className="md:ml-8 sm:ml-6 ml-3 flex flex-col items-center justify-center"
          >
            <img src={iconsFooter.medium} alt="medium"></img>
            <p className="font-inter text-sm text-color-text-footer mt-2">
              Medium
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
