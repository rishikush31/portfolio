"use client";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed flex mt-2 ${
          isOpen ? "" : ""
        } right-0 z-[1] mr-4 mt-3 `}
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
          className="p-2 mb-2 ml-4 text-black-500 hover:text-black-400 max-h-10  bg-white rounded-lg md:hidden"
        >
          {isOpen ? (
            <svg className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
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

      <div className="">
        {/* Content Sections */}
        <div className="">
          <div className="">
            <Parallax speed={-100} className="z-[-1] absolute h-full w-full ">
              <img src="/stary nights background.png" className=" w-full object-cover min-h-screen md:object-center objectPositionbackground" />
            </Parallax>
            <Parallax className="">
              <img src="/stary nights foreground(1).png" className="w-full object-cover min-h-screen objectPositionforeground md:object-center " 
              />
            </Parallax>
          </div>
          <div>
          <Parallax className="">
            <img src="/template.jpg" className="object-cover min-h-screen md:object-center objectPositiontemplate" />
          </Parallax>
          </div>
          <div>
          <Parallax className="">
            <img src="/field.jpg" className="object-cover min-h-screen md:object-center objectPositionfield" />
          </Parallax>
          </div>
          <div>
          <Parallax className="">
            <img src="/sakura.jpg" className="object-cover min-h-screen md:object-center objectPositionsakura" />
          </Parallax>
          </div>
          <div>
          <Parallax className="">
            <img src="/day.jpg" className="min-h-screen object-cover md:object-center objectPositionday" />
          </Parallax>
          </div>
        </div>
      </div>
    </>
  );
}
