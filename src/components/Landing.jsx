import React from "react";
import { SiMinutemailer } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import reactIcon from "../assets/icons8-react.svg";
import graphQlIcon from "../assets/icons8-graphql.svg";
import mongoDBIcon from "../assets/icons8-mongodb.svg";
import tsIcon from "../assets/icons8-typescript.svg";
import tailwindcssIcon from "../assets/icons8-tailwindcss.svg";
import heroImg from "../assets/githubstreak.png";
import productOneImg from "../assets/project-1.png";

const Landing = () => {
  useGSAP(() => {
    let b = window.innerWidth / 2;
    let l = window.innerHeight / 2;
    gsap.from(".one", {
      x: l,
      y: b,
      duration: 1,
      delay: 1,
    });
    gsap.from(".two", {
      x: l,
      y: b,
      scale: 0,
      duration: 1,
      delay: 1,
    });
    gsap.from(".three", {
      x: l,
      y: b,
      duration: 1,
      delay: 1,
    });
    gsap.from(".four", {
      x: l,
      y: b,
      duration: 1,
      delay: 1,
    });
    gsap.from(".five", {
      x: l,
      y: b,
      duration: 1,
      delay: 1,
    });
    gsap.from(".six", {
      x: l,
      y: b,
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
        <div className="five bg-[#D2D4AD]  text-black row-span-10 rounded-xl flex flex-col p-2">
          {/* 1st project */}
          <div className="w-full rounded-xl shadow-2xl p-2 ">
            <img src={productOneImg} alt="" className="h-[150px] w-full" />
            <div className="py-2 mb-1">
              <div className="flex flex-row justify-between">
                <h1 className="font-bold font-asil">E-Commerce DashBoard</h1>
                <a href="https://dashboard-lilac-phi.vercel.app/">Link</a>
              </div>
              <p className="font-asil">
                Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
              </p>
            </div>

            {/* 2nd Project */}
          </div>
        </div>

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
