"use client";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="absolute left-0 z-[1] ml-6 mt-6  cursor-pointer ">
        {" "}
        <a className="text-white font-border font-extrabold font-mono text-2xl">
          @Rishi-Srivastava
        </a>
      </div>
      <div
        className={`fixed flex ${isOpen ? "" : ""} right-0 z-[4] mr-4 mt-4 `}
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
          <div>
            <div className="bg-gradient-to-r  from-red-600 to-yellow-400 rounded-lg mx-1 cursor-pointer">
              <div className="relative p-2 text-sm font-bold rounded-lg bg-black text-white duration-200 hover:translate-y-[-0.20rem] hover:translate-x-[0.25rem] ">
                Resume
              </div>
            </div>
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
          <div className="absolute h-full w-full z-[3] container">
            <div className=" flex flex-col text-right mr-10 justify-center h-full">
              <div className="text-white font-border font-extrabold font-mono text-[5rem] md:text-[9rem]">
                <a className="">Hi I&apos;m</a>
              </div>
              <div className="text-lime-400 font-border text-right font-extrabold font-mono text-[5rem] md:text-[9rem]">
                Rishi
              </div>
              <br></br>
              <br></br>
              <div className="text-white font-border font-extrabold font-mono text-4xl">
                A competitve programmer and web developer
              </div>
            </div>
          </div>
          <Parallax speed={-100} className="z-[-1] absolute h-full w-full ">
            <img
              src="/stary nights background.png"
              className=" w-full object-cover  min-h-screen md:object-center objectPositionbackground"
            />
          </Parallax>
          <Parallax className="">
            <img
              src="/stary nights foreground(1).png"
              className="w-full object-cover min-h-screen objectPositionforeground md:object-center "
            />
          </Parallax>
        </div>
        <div
          className="relative font-mono min-h-screen overflow-auto objectPositiontemplate md:bg-right-bottom bg-cover "
          style={{ backgroundImage: `url("/template.jpg")` }}
        >
          <div className="absolute z-[2] flex flex-col ml-[2rem] md:ml-[5rem] py-5  md:py-0 ">
            <div className="text-white text-[3rem] font-bold mt-[2rem] md:mt-[2rem]">
              Who am I?
            </div>
            <div className="text-white text-[2rem] md:text-[2.6rem] font-semibold md:text-left mb-[2rem] ">
              Hey, I am{" "}
              <span className="text-yellow-300 font-extrabold">
                Rishi Srivastava{" "}
              </span>
              ,
            </div>
            <div className="text-white text-[1.3rem] md:text-[1.5rem] text-left max-w-[80vw] md:max-w-[50vw] ">
              {" "}
              A final year under-graduate student at HBTU Kanpur. Over the past
              three years, i have had experience with competitive programming
              and web-development achieving problem solving and development
              feats and making .
              <br />I am looking for a Sofware developer internship/Job to put a
              use to my coding and problem solving skills. <br />
              <button className="bg-white p-[0.3rem] rounded-lg mt-4 mb-5">
                <div className="bg-gradient-to-r  from-red-600 to-yellow-400 rounded-lg cursor-pointer">
                  <div className="p-2 px-3 text-lg font-bold rounded-lg bg-black text-white duration-200 hover:translate-y-[-0.20rem] hover:translate-x-[0.25rem] ">
                    Contact me
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className="relative min-w-full md:bg-left-top objectPositionfield  min-h-[200vh] bg-cover "
          style={{ backgroundImage: `url("/field.jpg")` }}
        >
          <div className="absolute h-full w-full"></div>
        </div>
        <div
          className="relative min-h-[140vh] bg-cover md:objectPositionsakura2 objectPositionsakura"
          style={{ backgroundImage: `url("/sakura.jpg")` }}
        >
          <div className="absolute h-full w-full"></div>
        </div>
        <div className="relative">
          <div className="absolute h-full w-full"></div>
          <Parallax className="">
            <img
              src="/day.jpg"
              className="min-h-screen object-cover md:object-center objectPositionday"
            />
          </Parallax>
        </div>
      </div>
    </div>
  );
}
