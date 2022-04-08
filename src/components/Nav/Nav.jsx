import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { MdWork, MdOutlineMessage } from "react-icons/md";
import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  function changeBackground(e) {
    e.target.style.background = "rgba(0,0,0,0.3)";
  }

  return (
    <div className="flex justify-center">
      <nav className="flex flex-row gap-10 bg-opacity-20 bg-black w-fit rounded-full py-1 px-3 z-2 fixed left-1/2 -translate-x-1/2 top-2">
        <a
          onClick={() => setActiveNav("#header")}
          className={activeNav === "#header" ? "active" : ""}
          href="#header"
        >
          <AiOutlineHome className="rounded-md " size={30} />
        </a>
        <a
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser className="rounded-md " size={30} />
        </a>
        <a
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
          href="#experience"
        >
          <AiOutlineBook className="rounded-md " size={30} />
        </a>
        <a
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
          href="#portfolio"
        >
          <MdWork className="rounded-md " size={30} />
        </a>
        <a
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
          href="#contact"
        >
          <MdOutlineMessage className="rounded-md " size={30} />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
