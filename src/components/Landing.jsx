import React from "react";
import { SiMinutemailer } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Landing = () => {
  useGSAP(() => {
    gsap.from(".one", {
      x: -100,
      duration: 1,
      delay: 1,
    });
    gsap.from(".two", {
      scale: 0,
      duration: 1,
      delay: 1,
    });
    gsap.from(".three", {
      y: 200,
      duration: 1,
      delay: 1,
    });
    gsap.from(".four", {
      y: 300,
      duration: 1,
      delay: 1,
    });
    gsap.from(".five", {
      x: 200,
      duration: 1,
      delay: 1,
    });
    gsap.from(".six", {
      y: 100,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <div className="w-full grid grid-cols-12 gap-x-4">
      {/* LEFT SIDE OF GRID */}
      <div className="w-full grid col-span-8 grid-cols-8 lg:gap-4 2xl:gap-10">
        {/* 1st */}
        <div className="one col-span-5 bg-[#343233] text-white rounded-xl pl-8 flex flex-col pt-2 pb-10 gap-y-10">
          <div className="flex flex-row w-full justify-end items-center p-5">
            <div className="rounded-full h-[100px] w-[100px] bg-white"></div>
          </div>
          <div className="text-5xl font-playwrite text-white">Full Stack</div>
          <div className="text-5xl font-playwrite text-white">
            Web Developer
          </div>
        </div>
        {/* 2nd */}
        <div className="two col-span-3 bg-[#3B5639] text-white rounded-xl"></div>
        {/* 3rd */}
        <div className="three col-span-4 bg-[#c7B144] text-white flex flex-col rounded-xl px-6">
          <div className="flex flex-row w-full justify-start items-center py-4">
            <div className="rounded-full h-[100px] w-[100px] bg-white"></div>
          </div>
          <p className="font-asil pb-3 font-bold text-white">
            Dynamic Full Stack Developer crafting scalable MERN applications.
            Leverages React and Next.js to engineer robust frontend. Deploying
            seamlessly with Docker. Contributing actively to open-source
            projects. Driven to innovate and optimize web solutions
          </p>
        </div>
        {/* 4th  */}
        <div className="four col-span-4 bg-[#EB7739] text-white rounded-xl px-4 py-4 h-full">
          <div className="flex flex-col h-full">
            <div className="flex flex-row w-full justify-between items-center">
              <p className="font-asil font-bold">Have some Question?</p>
              <div>
                <SiMinutemailer size={30} />
              </div>
            </div>
            <div className="mt-auto">
              <p className="font-bold text-5xl font-asil tracking-wider">
                Contact me
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE OF GRID */}
      <div className=" col-span-4 rounded-xl grid grid-rows-12 gap-y-4">
        <div className="five bg-[#D2D4AD] text-white row-span-10 rounded-xl"></div>

        <div className="six bg-[#7B3C45] text-white row-span-2 rounded-xl">
          <div className="flex flex-row w-full justify-between items-center h-full px-10 font-asil">
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
      </div>
    </div>
  );
};

export default Landing;
