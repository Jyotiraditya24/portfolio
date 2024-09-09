import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-[#0675f4] text-white pl-7 pr-10 py-5 rounded-xl shadow-xl mb-5">
      <div className="basis-1/3">
        <h1 className="font-asil text-xl font-extrabold">Jyotir Aditya</h1>
      </div>
      <div className="font-asil text-md flex flex-row justify-end items-center basis-2/3 gap-x-28 font-light text-xl">
        <h1>Projects</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Header;
