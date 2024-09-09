import React from "react";
import { SiMinutemailer } from "react-icons/si";

const Landing = () => {
  return (
    <div className="w-full grid grid-cols-12">
      {/* LEFT SIDE OF GRID */}
      <div className="w-full grid col-span-8 grid-cols-8 lg:gap-6 2xl:gap-10">
        {/* 1st */}
        <div className="col-span-5 bg-purple-500 rounded-xl pl-8 flex flex-col pt-2 pb-10 gap-y-10">
          <div className="flex flex-row w-full justify-end items-center p-5">
            <div className="rounded-full h-[100px] w-[100px] bg-white"></div>
          </div>
          <div className="text-5xl font-playwrite text">Full Stack</div>
          <div className="text-5xl font-playwrite">Web Developer</div>
        </div>
        {/* 2nd */}
        <div className="col-span-3 bg-purple-500 rounded-xl"></div>
        {/* 3rd */}
        <div className="col-span-4 bg-purple-500 flex flex-col rounded-xl px-6">
          <div className="flex flex-row w-full justify-start items-center py-4">
            <div className="rounded-full h-[100px] w-[100px] bg-white"></div>
          </div>
          <p className="font-asil pb-3 font-bold">
            Dynamic Full Stack Developer crafting scalable MERN applications.
            Leverages React and Next.js to engineer robust frontend. Deploying
            seamlessly with Docker. Contributing actively to open-source
            projects. Driven to innovate and optimize web solutions
          </p>
        </div>
        {/* 4th  */}
        <div className="col-span-4 bg-purple-500 rounded-xl px-4 py-4 h-full">
          <div className="flex flex-col h-full">
            <div className="flex flex-row w-full justify-between items-center">
              <p> Have some Question?</p>
              <div>
                <SiMinutemailer size={30} />
              </div>
            </div>
            <div className="mt-auto">
              <p className="font-bold text-4xl font-asil">Contant me</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE OF GRID */}
      <div className="col-span-4">
        <div></div>
      </div>
    </div>
  );
};

export default Landing;
