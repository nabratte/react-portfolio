import React from "react";
import CV from "../../assets/CV.pdf";

const CTA = () => {
  return (
    <div className="bg-none items-center">
      <div className="max-w-7xl  px-6 sm:px-6  lg:px-16 lg:flex lg:items-center lg:justify-center">
        <div className="flex-col">
          <h4 className="font-bold tracking-tight sm:text-3xl pt-10">
            <span className="block text-gray-300">Hello I´m</span>
          </h4>
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl">
            <span className="block text-cyan-400">Nicolás Abratte</span>
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            <span className="block text-gray-500">Fullstack Developer.</span>
          </h3>
        </div>
        <div className="mt-8 px-8 flex lg:flex-col text-center justify-center items-center py-8 gap-6">
          <div className="block rounded-md shadow w-52 lg:w-full py-2">
            <a
              download
              href={CV}
              className=" flex lg:block items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-600"
            >
              Download Resume
            </a>
          </div>
          <div className="block rounded-md shadow w-52 lg:w-full py-2">
            <a
              href="nabratte@gmail.com"
              className=" flex lg:block items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-100"
            >
              Let´s Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
