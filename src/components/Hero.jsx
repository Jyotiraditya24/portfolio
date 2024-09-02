import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("h1", {
      opacity: 0,
      duration: 4,
      stagger: 1,
    });
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="text-white min-h-screen flex justify-center items-center">
      <div className="min-w-[1440px] mx-auto relative">
        <h1 className="text-center font-bold text-5xl tracking-widest bg-gradient-to-r from-indigo-400 to-white text-transparent bg-clip-text">
          Jyotiraditya
        </h1>
        <h1 className="text-center text-8xl tracking-widest bg-gradient-to-r from-indigo-700 to-white text-transparent bg-clip-text">
          Web Developer
        </h1>
      </div>
    </div>
  );
};

export default Hero;
