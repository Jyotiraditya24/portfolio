import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Header = () => {
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
  return (
    <div className="header flex flex-row justify-between bg-[#0675f4] text-white pl-7 pr-10 py-5 rounded-xl shadow-xl mb-5">
      <div className="basis-1/3">
        <h1 className="font-asil text-xl font-extrabold">Jyotir Aditya</h1>
      </div>
      <div className="font-asil text-md flex flex-row justify-end items-center basis-2/3 gap-x-28 font-light text-md">
        <div className="hover:cursor-pointer px-4 py-2 text-white">
          <a
            href="https://github.com/Jyotiraditya24"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </div>
        <div className="hover:cursor-pointer px-4 py-2 text-white">
          <a
            href="https://leetcode.com/u/jyotiraditya24/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LEETCODE
          </a>
        </div>
        <div className="hover:cursor-pointer px-4 py-2 text-white">
          <a
            href="https://www.linkedin.com/in/jyotir-aditya-530160197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
