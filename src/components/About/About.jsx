import React from "react";
import Profile2 from "../../assets/Profile2.png";
import CarouselComponent from "./CarouselComponent";

const About = () => {
  return (
    <div className="h-screen pt-20" id="about">
      <h4 className="font-bold tracking-tight sm:text-2xl pt-10">
        <span className="block text-gray-300">Get To Know</span>
      </h4>
      <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl">
        <span className="block text-cyan-400">About Me</span>
      </h2>
      <div className="flex flex-row justify-evenly pt-16">
        <div className="flex  w-fit rounded-t-full rounded-r-full border-cyan-300 border-solid border-4">
          <img
            src={Profile2}
            alt="Profile photo not found"
            style={{
              background: "linear-gradient(rgb(34, 211, 238),transparent)",
            }}
            className="w-40 h-40 pt-8 px-4 rounded-t-full rounded-r-full pb-4 sm:w-80 sm:h-80"
          />
        </div>
        <div
          className="block rounded-xl items-center w-1/2"
          style={{ background: "rgba(147, 197, 253, 0.3)" }}
        >
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default About;
