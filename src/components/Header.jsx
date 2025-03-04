import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  useGSAP(() => {
    gsap.from(".nav-link", {
      opacity: 0,
      y: 30, // Moves links upwards as they appear
      duration: 0.8,
      stagger: 0.2, // Delay between each link
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".header",
        start: "top center",
        end: "+=100",
        scrub: true,
      },
    });
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="header flex flex-row justify-between bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white pl-7 pr-10 py-5 rounded-xl shadow-xl mb-5 backdrop-blur-sm bg-opacity-90">
      <div className="basis-1/3">
        <h1 className="font-asil text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">Jyotir Aditya</h1>
      </div>
      <div className="font-asil text-md flex flex-row justify-end items-center basis-2/3 gap-x-12 font-light">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <NavLink href="https://github.com/Jyotiraditya24" text="GITHUB" />
        <NavLink href="https://leetcode.com/u/jyotiraditya24/" text="LEETCODE" />
        <NavLink href="https://www.linkedin.com/in/jyotir-aditya-530160197/" text="LINKEDIN" />
      </div>
    </div>
  );
};

const NavLink = ({ href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="nav-link relative px-4 py-2 text-white hover:text-gray-200 transition-colors duration-300 group"
  >
    {text}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default Header;
