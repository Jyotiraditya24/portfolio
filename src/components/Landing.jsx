import React from "react";
import { SiMinutemailer } from "react-icons/si";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import reactIcon from "../assets/icons8-react.svg";
import graphQlIcon from "../assets/icons8-graphql.svg";
import mongoDBIcon from "../assets/icons8-mongodb.svg";
import tsIcon from "../assets/icons8-typescript.svg";
import tailwindcssIcon from "../assets/icons8-tailwindcss.svg";
import heroImg from "../assets/githubstreak.png";
import productOneImg from "../assets/project-1.png";
import productTwoImg from "../assets/project-2.png";

const Landing = () => {
  useGSAP(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Elements with similar animations
    const elements = [".one", ".three", ".four", ".five", ".six"];
    elements.forEach((element) => {
      gsap.from(element, {
        y: centerY,
        duration: 1,
        delay: 1,
      });
    });

    // Special animation for ".two"
    gsap.from(".two", {
      x: centerX,
      y: centerY,
      scale: 0,
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
            <img src={heroImg} alt="" />
          </div>
          <div className="text-5xl font-playwrite text-white">Full Stack</div>
          <div className="text-5xl font-playwrite text-white">
            Web Developer
          </div>
        </div>
        {/* 2nd */}
        <div className="two col-span-3 bg-[#3B5639] text-white rounded-xl">
          <div className="p-4 flex flex-col gap-y-3">
            <h1 className="text-center font-asil text-xl">Skills</h1>
            <div className="flex flex-row justify-between items-center flex-wrap gap-y-4">
              <div className="basis-1/4">
                <img src={reactIcon} alt="" />
              </div>
              <div className="basis-1/4">
                <img src={graphQlIcon} alt="" />
              </div>

              <div className="basis-1/4">
                <img src={mongoDBIcon} alt="" />
              </div>
              <div className="basis-1/4">
                <img src={tsIcon} alt="" />
              </div>
              <div className="basis-1/4">
                <img src={tailwindcssIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
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
              <a href="mailto:jyotiraditya24@gmail.com" className="hover:cursor-pointer">
                <SiMinutemailer size={30} />
              </a>
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
        <div className="five bg-[#7B3C45] text-black row-span-12 rounded-xl flex flex-col p-2 gap-y-2 overflow-y-auto">
          {/* PROJECT - 1 */}
          <div className="bg-yellow-500 flex flex-col gap-y-3 p-4 w-full relative group rounded-xl">
            <div>
              <img src={productOneImg} alt="" />
            </div>
            <div className="absolute w-full h-full bg-yellow-500 top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
              <a href="https://github.com/Jyotiraditya24/Dashboard">
                <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://dashboard-lilac-phi.vercel.app/">
                <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
              </a>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap gap-y-2">
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                React
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                TypeScript
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                MongoDB
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                SCSS
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                ChartJs
              </span>
            </div>
          </div>

          {/* PROJECT - 2 */}
          <div className="bg-yellow-500 flex flex-col gap-y-3 p-4 w-full relative group rounded-xl">
            <div>
              <img src={productTwoImg} />
            </div>
            <div className="absolute w-full h-full bg-yellow-500 top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
              <a href="https://github.com/Jyotiraditya24/ecommerce">
                <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
              </a>
              <a href="shopfetti.onrender.com">
                <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
              </a>
            </div>
            <div className="flex flex-row flex-start items-center flex-wrap gap-y-2 gap-x-2">
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                React
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                Redis
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                MongoDB
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                NodeJS
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                Express
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                Zustand
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                TailwindCss
              </span>
              <span className="bg-blur rounded-full py-2 px-3 text-white text-sm bg-black">
                Framer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
