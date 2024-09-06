import React from "react";

const Landing = () => {
  return (
    <div className="w-full grid grid-cols-12">
      <div className="w-full grid col-span-8 grid-cols-8 lg:gap-x-10 2xl:gap-x-16">
        <div className="col-span-5 bg-purple-500 rounded-xl pl-8 flex flex-col pt-2 pb-10 gap-y-10">
          <div className="flex flex-row w-full justify-end items-center p-5">
            <div className="rounded-full h-[200px] w-[200px] bg-white"></div>
          </div>
          <div className="text-5xl font-playwrite text">Full Stack</div>
          <div className="text-5xl font-playwrite">Web Developer</div>
        </div>
        <div className="col-span-3 bg-purple-500 rounded-xl">

        </div>
      </div>
      <div className="col-span-4"></div>
    </div>
  );
};

export default Landing;
