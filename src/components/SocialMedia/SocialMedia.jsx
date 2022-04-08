import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="flex flex-col py-10">
      <div className="flex items-center justify-center space-x-3">
        <a
          href="https://www.linkedin.com/in/nicolas-abratte/"
          target="_blank"
          className="bg-blue-700 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded w-32 lg:w-42 justify-center hover:bg-blue-900"
        >
          <AiFillLinkedin size={30} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/nabratte/nabratte"
          target="_blank"
          className="bg-gray-400 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded w-32 lg:w-42 justify-center hover:bg-gray-500"
        >
          <AiOutlineGithub size={30} />

          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
