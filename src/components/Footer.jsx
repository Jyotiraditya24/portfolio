import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Footer = () => {
  useGSAP(() => {
    gsap.to(".common-border", {
      duration: 2, // Duration for one color transition
      css: { borderColor: "red" }, // Start color
      yoyo: true, // Reverse animation back to start
      repeat: -1, // Repeat infinitely
      ease: "none", // No easing for a linear transition
    });
  });
  return (
    <div className="max-w-[720px] fixed bg-black mx-auto bottom-10 left-0 right-0 px-10 py-3 rounded-xl shadow-xl border border-white">
      <div className="common-border flex flex-row justify-between items-center text-white">
        <div className="hover:cursor-pointer">
          <h1>About</h1>
        </div>
        <div className="hover:cursor-pointer">
          <h1>Projects</h1>
        </div>
        <div className="hover:cursor-pointer">
          <h1>Info Card</h1>
        </div>
        <div className=" hover:cursor-pointer">
          <h1>Social Links</h1>
        </div>
        <div className=" hover:cursor-pointer">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
