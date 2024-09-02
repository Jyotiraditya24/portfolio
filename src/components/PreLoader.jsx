import React, { useEffect } from "react";
import gsap from "gsap";

const PreLoader = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    gsap.to(".main", {
      y: 2000,
      duration: 4,
      delay: 4,
    });
    gsap.from(".span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    });
    gsap.to(".span", {
      duration: 1.5,
      delay: 2.5,
      y: 70,
      skewX: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    });
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="main min-h-screen w-full bg-white text-black fixed flex justify-center items-center z-50 overflow-hidden">
      <div className="child flex items-center space-between h-[100px] w-[300px] justify-between text-lg font-bold overflow-hidden">
        <span className="span">Developer,</span>
        <span className="span">Curator</span>
        <span className="span">Vibe.</span>
      </div>
    </div>
  );
};

export default PreLoader;
