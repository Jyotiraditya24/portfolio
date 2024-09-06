import React from "react";

const Landing = () => {
  return (
    <div className="w-full grid grid-cols-12">
      <div className="w-full grid col-span-8 grid-cols-8">
        <div className="col-span-5 bg-purple-500 rounded-xl pl-8 flex flex-col">
          <div className="flex flex-row w-full justify-end items-center p-5">
            <div className="rounded-full h-[200px] w-[200px] bg-white"></div>
          </div>
          <div>
            Full Stack Web Developer
          </div>
        </div>
        <div className="col-span-3"></div>
      </div>
      <div className="col-span-4"></div>
    </div>
  );
};

export default Landing;
