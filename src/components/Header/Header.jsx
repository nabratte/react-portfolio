import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import CTA from "./CTA";
import Profile from "../../assets/Profile.png";

const Header = () => {
  return (
    <div
      className="flex flex-col h-screen items-center justify-center"
      id="header"
    >
      <CTA />
      <div className="flex flex-row w-1/4 h-fit items-center justify-center py-8 ">
        <div className=" flex flex-row justify-center items-center rounded-full  border-cyan-300 border-solid border-4">
          <img
            src={Profile}
            alt="Profile photo not found"
            style={{
              background: "linear-gradient(rgb(34, 211, 238),transparent)",
            }}
            className="w-80 h-fit pt-10 px-4 rounded-t-full"
          />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Header;
