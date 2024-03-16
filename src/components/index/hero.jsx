import React from "react";
import Iphone from "../../assets/image/iphone.png";
import "../../assets/css/background.css";
const hero = () => {
  return (
    <>
      <div className="relative z-10 overflow-hidden bg-blue-50 w-screen h-max flex-row px-5 justify-center items-center md:px-[5vw] lg:flex lg:justify-center lg:items-center lg:h-screen">
        <div className="background -z-10">
          <span className="-z-10"></span>
          <span className="-z-10"></span>
          <span className="-z-10"></span>
          <span className="-z-10"></span>
          <span className="-z-10"></span>
          <span className="-z-10"></span>
          <span className="-z-10"></span>
          <span className="-z-10"></span>
        </div>
        <div className="pt-[15vh] flex flex-col justify-start items-start gap-4 z-10 md:pt-[10vh] lg:pt-0 lg:justify-center">
          <h1 className="font-inter font-bold text-dark text-5xl text-left lg:text-7xl">
            Ready, Set, Code!
          </h1>
          <p className="font-inter text-darkLight text-left text-lg lg:w-4/5">
            We are an international software development company merging the
            latest technology with creativity to optimize business processes.
          </p>
          <div className="flex justify-start w-full self-start gap-5 z-10 md:gap-8 lg:gap10">
            <div className="border-2 border-primary bg-primary py-3 px-2 rounded-md self-start md:px-8">
              <p className="font-inter font-medium text-white text-xs">
                Get Started
              </p>
            </div>
            <div className="border-2 border-primary bg-transparent py-3 px-2 rounded-md self-start md:px-8">
              <p className="w-full font-inter font-medium text-primary text-xs">
                Learn More
              </p>
            </div>
          </div>
        </div>
        <div className="py-[5vh] flex justify-center items-center lg:justify-center lg:items-center lg:pt-0">
          <img src={Iphone} alt="" className="w-3/5 md:w-1/3 lg:w-5/12" />
        </div>
      </div>
    </>
  );
};

export default hero;
