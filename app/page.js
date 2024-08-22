"use client";
import React, { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`absolute flex mt-2 ${
          isOpen ? "left-[50vw]" : "left-[82vw]"
        } md:left-[65vw] z-[50] bg-transparent pt-1 `}
      >
        <div
          className={`z-[2] flex flex-col md:flex-row w-max bg-white rounded-lg py-2 px-1 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <div className="p-2 mx-1 cursor-pointer text-sm font-bold rounded-lg hover:bg-gray-200">
            About
          </div>
          <div className="p-2 mx-1 cursor-pointer text-sm font-bold rounded-lg hover:bg-gray-200">
            Experience
          </div>
          <div className="p-2 mx-1 cursor-pointer text-sm font-bold rounded-lg hover:bg-gray-200">
            Projects
          </div>
          <div className="p-2 mx-1 cursor-pointer text-sm font-bold rounded-lg hover:bg-gray-200">
            Contact
          </div>
          <div className="p-2 mx-1 cursor-pointer text-sm font-bold rounded-lg bg-black text-white hover:text-blue-300">
            Resume
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 mb-2 ml-4 text-black-500 hover:text-black-400 bg-white rounded-lg md:hidden"
        >
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className="md:h-screen overflow-x-hidden"
        style={{ perspective: "10px" }}
      >
        {/* Navbar shifted to the left and made sticky */}

        {/* Content Sections */}
        <div
          className="h-screen md:h-full md:flex md:justify-center md:items-center z-[-1]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <style>
            {`
          .custom-style {
            }
            
            @media (min-width: 768px) {
              .custom-style {
                transform: translateZ(-40px) scale(6.5);
                }
                }
                `}
          </style>
          <img
            src="/stary nights background.png"
            alt="Background"
            className="absolute object-cover w-full h-full md:w-auto md:h-auto md:top-[36rem] md:object-cover custom-style md:transform md:z-[-1]"
          />
          <img
            src="/stary nights foreground.png"
            alt="Foreground"
            className="absolute  md:object-cover object-cover w-full h-full md:h-auto md:top-[-15] md:w-full md:z-[-1]"
          />
        </div>
        <div className="h-screen md:h-full md:flex md:justify-center md:items-center z-[-1]">
          <img
            src="/stickers/flow.png"
            className=" top-[38rem] scale-[0.7] left-[-10rem] absolute md:z-[2] md:scale-[0.5] md:top-[30rem] md:left-[-5rem]"
          />
          <img
            src="/stickers/moon.png"
            className="scale-[0.5] top-[37rem] right-[-7.5rem] absolute md:z-[2] md:scale-[0.3] md:top-[10rem] md:left-[-30rem] "
          />
          <img
            src="/stickers/circle.png"
            className="scale-[0.25] top-[37rem] right-[-10rem] absolute md:z-[2] md:scale-[0.15] md:top-[12rem] md:left-[-25rem]"
          />
          <img
            src="/stickers/cloud.png"
            className="scale-[0.5] top-[39rem] right-[-1rem] absolute md:z-[2] md:scale-[0.3] md:top-[25rem] md:right-[-33rem] "
          />
          <img
            src="/stickers/flow.png"
            className="hidden md:block absolute md:z-[1] md:scale-[0.4] md:top-[29rem] md:right-[-20rem]"
          />
          <img
            src="/stickers/sun.png"
            className="scale-[0.8] top-[70rem] right-[-8rem] absolute md:z-[2] md:scale-[0.2] md:top-[20rem] md:right-[-33rem]"
          />
          <img
            src="/template.jpg"
            className="object-cover w-full h-full md:h-auto md:absolute md:top-[50.1rem] "
          />
        </div>
        <div className="h-screen md:h-full md:flex md:justify-center md:items-center z-[-1]">
          <img
            src="/field.jpg"
            className="object-cover w-full h-full md:h-auto md:absolute md:top-[94.2rem]"
          />
        </div>
        <div className="h-screen md:h-full md:flex md:justify-center md:items-center z-[-1]">
          <img
            src="/sakura.jpg"
            className="object-cover w-full h-full md:h-auto md:absolute md:top-[156.6rem]"
          />
        </div>
        <div className="h-screen md:h-full md:flex md:justify-center md:items-center z-[-1]">
          <img
            src="/day.jpg"
            className="object-cover w-full h-full md:h-auto md:absolute md:top-[209.1rem]"
          />
        </div>
      </div>
    </>
  );
}
