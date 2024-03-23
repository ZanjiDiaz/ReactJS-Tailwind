import React from "react";
import croplify from "../../assets/image/croplify.png";
import croplifyPic from "../../assets/image/croplifyProfile.jpg";
import react from "../../assets/image/logos/react.png";
import warnyaProfile from "../../assets/image/WarnyaProfile.jpg";
import caploProfile from "../../assets/image/caploProfile.jpg";
import caplo from "../../assets/image/caplo.jpeg";
import caploScreen from "../../assets/image/Screenshots/caplo.png";
import croplifyScreen from "../../assets/image/Screenshots/croplify.png";

const content = () => {
  const mobileScreen = [
    {
      app: "Caplo",
      imgUrl: caploScreen,
      description: "",
    },
    {
      app: "Croplify",
      imgUrl: croplifyScreen,
      description: "",
    },
    {
      app: "Warnya",
      imgUrl: "",
      description: "",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary text-left md:text-center">
            Lorem Ipsum
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left md:text-center">
            Lorem Ipsul dolor
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-left md:text-center">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {mobileScreen.map((mobileScreen) => (
            <div className="flex flex-col items-center gap-6">
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
                {mobileScreen.app}
              </h1>
              <div class="relative mx-6 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] ">
                <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <img
                    src={mobileScreen.imgUrl}
                    class="dark:hidden w-[272px] h-[572px]"
                    alt=""
                  ></img>
                  <img
                    src={mobileScreen.imgUrl}
                    class="hidden dark:block w-[272px] h-[572px]"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default content;
