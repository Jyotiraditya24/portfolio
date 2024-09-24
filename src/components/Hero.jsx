import React from "react";
import Header from "./Header";
import Landing from "./Landing";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-300 text-white">
      <div className="p-6">
        <Header />
        <Landing />
      </div>
    </div>
  );
};

export default Hero;
