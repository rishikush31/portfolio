"use client";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="absolute left-0 z-[1] ml-6 mt-6  cursor-pointer ">
        {" "}
        <a className="text-white font-border font-extrabold font-mono text-2xl font-mono">
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
          <div className=" z-[2] flex flex-col ml-[2rem] md:ml-[5rem] py-5  md:py-0 ">
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
            <div className="text-white text-[1.1rem] md:text-[1.4rem] text-left max-w-[80vw] md:max-w-[50vw] ">
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
          className="relative min-w-full md:bg-left-top objectPositionfield  min-h-[230vh] bg-cover "
          style={{ backgroundImage: `url("/field.jpg")` }}
        >
          <div className="z-[2] mx-[2rem] md:mx-[5rem] ">
            <div className="font-mono text-[1.5rem] md:text-[3rem] pt-[4rem] font-bold">
              Experience and Skills
            </div>

            {/* big screen */}
            <div className="my-2 h-[80vh]">
              <div className="text-[1.2rem]  md:text-[2rem] font-mono text-blue-700 font-bold md:font-semibold md:text-left mb-6">
                Competitive Programming
              </div>
              <div className="bento grid-cols-4 grid-rows-2 gap-5 h-full hidden md:grid">
                <div className="flip-card">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front bg-contain bg-left"
                      style={{
                        backgroundImage: `url('stickers/codechef.png')`,
                      }}
                    ></div>
                    <div className="h-full flip-card-back py-4 px-4 bg-yellow-300 flex flex-col justify-between">
                      <div className="text-2xl font-mono text-right ">
                        5-Star coder
                        <br />
                        rating: 2022
                      </div>
                      <div className="text-2xl font-mono text-right ">
                        300+ problems
                      </div>
                      <div className="text-2xl font-mono text-green-500 cursor-pointer">
                        rishikush@codechf
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front bg-cover bg-center "
                      style={{
                        backgroundImage: `url('stickers/leetcode.webp')`,
                      }}
                    ></div>
                    <div className="h-full flip-card-back py-4 px-4 bg-orange-400 flex flex-col justify-between">
                      <div className="text-2xl font-mono text-right ">
                        rating: 1750
                      </div>
                      <div className="text-2xl font-mono text-right ">
                        380+ problems
                      </div>
                      <div className="text-2xl font-mono text-green-300 cursor-pointer">
                        rishikush@leetcode
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card font-mono">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front bg-cover bg-center"
                      style={{
                        backgroundImage: `url('stickers/atcoder.png')`,
                      }}
                    ></div>
                    <div className="h-full flip-card-back py-4 px-4 bg-gray-400 flex flex-col justify-between">
                      <div className="text-2xl font-mono text-right ">
                        rating: 1068
                      </div>
                      <div className="text-2xl font-mono text-right ">
                        190+ problems
                      </div>
                      <div className="text-2xl font-mono text-green-100 cursor-pointer">
                        rishikush@atCoder
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 row-span-2 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative p-4 h-full justify-around flex flex-col bg-blue-500 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className="text-3xl mt-[4rem] font-mono">
                        Solved over <div className=" text-8xl">2300</div>{" "}
                        problems over all coding platforms.
                      </div>
                      <div className="mt-[2rem] text-2xl font-bold font-mono">
                        <hr className="border-black border-1" />
                        <div className="pt-[1rem] cursor-pointer">LinkedIn</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 row-span-1 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative p-2 h-full bg-pink-400 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className="text-2xl font-mono">
                        <span className="font-bold">TCS Codevita 2023</span>{" "}
                        Round-2 <br /> <span className=" text-8xl">92</span>
                        <span className="text-3xl">
                          th rank all over India
                        </span>{" "}
                      </div>
                      <div className="mt-[1rem] text-2xl font-bold font-mono">
                        <hr className="border-black border-1" />
                        <div className="pt-[1rem] cursor-pointer">
                          Certificate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front bg-cover bg-left-bottom"
                      style={{
                        backgroundImage: `url('stickers/codeforces.webp')`,
                      }}
                    ></div>
                    <div className="h-full flip-card-back py-4 px-4 bg-blue-600 flex flex-col justify-between">
                      <div className="text-2xl font-mono text-right ">
                        Expert
                        <br />
                        rating: 1666
                      </div>
                      <div className="text-2xl font-mono text-right ">
                        1400 problems
                      </div>
                      <div className="text-2xl font-mono text-green-100 cursor-pointer">
                        rishikush@cforces
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bento grid grid-cols-2 md:hidden grid-rows-4 gap-3 h-full">
                <div className="flip-card">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front bg-contain bg-left"
                      style={{
                        backgroundImage: `url('stickers/codechef.png')`,
                      }}
                    ></div>
                    <div className="h-full flip-card-back py-2 px-4 bg-yellow-300 flex flex-col justify-between">
                      <div className=" text-right ">
                        5-Star coder
                        <br />
                        rating: 2022
                      </div>
                      <div className=" text-right ">300+ problems</div>
                      <div className=" text-green-500 cursor-pointer">
                        rishikush@cchf
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front bg-cover bg-center "
                      style={{
                        backgroundImage: `url('stickers/leetcode.webp')`,
                      }}
                    ></div>
                    <div className="h-full flip-card-back py-2 px-4 bg-orange-400 flex flex-col justify-between">
                      <div className=" text-right ">rating: 2022</div>
                      <div className=" text-right ">380+ problems</div>
                      <div className=" text-green-500 cursor-pointer">
                        rish@lcode
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 row-span-1 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative p-2 h-full bg-pink-400 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className="text-1xl font-mono">
                        <span className="font-bold">TCS Codevita 2023</span>{" "}
                        Round-2 <br /> <span className=" text-2xl">92</span>
                        <span className="text-1xl">
                          th rank all over India
                        </span>{" "}
                      </div>
                      <div className="mt-[1rem] text-1xl font-bold font-mono">
                        <hr className="border-black border-1" />
                        <div className="pt-[1rem] cursor-pointer">
                          Certificate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 row-span-2 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative p-2 h-full bg-blue-500 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className="text-1xl mt-[2rem] font-mono">
                        Solved over <div className=" text-2xl">2300</div>{" "}
                        problems over all coding platforms.
                      </div>
                      <div className="mt-[2rem] text-1xl font-bold font-mono">
                        <hr className="border-black border-1" />
                        <div className="pt-[1rem] cursor-pointer">LinkedIn</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front bg-cover bg-left-bottom"
                      style={{
                        backgroundImage: `url('stickers/codeforces.webp')`,
                      }}
                    ></div>
                    <div className="h-full flip-card-back py-2 px-4 bg-blue-600 flex flex-col justify-between">
                      <div className=" text-right ">
                        Expert
                        <br />
                        rating: 1666
                      </div>
                      <div className=" text-right ">1400 problems</div>
                      <div className=" text-green-500 cursor-pointer">
                        rish@cforces
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front bg-cover bg-center"
                      style={{
                        backgroundImage: `url('stickers/atcoder.png')`,
                      }}
                    ></div>
                    <div className="h-full flip-card-back py-2 px-4 bg-gray-400 flex flex-col justify-between">
                      <div className=" text-right ">rating: 1068</div>
                      <div className=" text-right ">190+ problems</div>
                      <div className=" text-green-100 cursor-pointer">
                        rish@atcoder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[1.2rem] mt-12 md:text-[2rem] font-mono text-blue-700 font-bold md:font-semibold md:text-left mb-6">
                Internship 
              </div>
              <div className="bento grid-cols-4 grid-rows-2 gap-5 h-full hidden md:grid">
                <div className="col-span-3 row-span-1 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative p-2 h-full bg-blue-400 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className="text-2xl font-mono">
                        <span className="font-bold text-[1.3rem]">
                          June&apos;24-July&apos;24
                        </span>{" "}
                        <br />{" "}
                        <span className=" text-[1.6rem] font-bold">
                          NeuroDrishti{" "}
                        </span>
                        <span className="text-[1.3rem]">
                          develops AI assistance glasses that connects them to
                          the world visually.
                        </span>{" "}
                      </div>
                      <div className="text-2xl font-extrabold font-mono">
                        <hr className="border-black border-1 my-[1rem]" />
                        <div className=" cursor-pointer">
                          Task :{" "}
                          <span className="font-semibold text-[1.25rem]">
                            Develop a dynamic showcase website to elegantly
                            present our vision, products, notable achievements,
                            and a user-friendly buy page.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div className="flip-card-front  bg-green-300">
                      <div className="text-[1rem] font-bold font-mono text-left pl-2 pt-2 ">
                        Role -
                      </div>
                      <div className="text-[2rem] font-mono mt-3 text-center ">
                        Full-Stack <br />
                        Web developer intern
                      </div>
                    </div>
                    <div className="h-full flip-card-back bg-green-300 ">
                      <div className="text-[2rem] font-mono h-full mt-9 text-center ">
                        NextJS <br />
                        Web developer intern
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 row-span-1 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative h-full justify-around bg-pink-700 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className=" text-center font-mono text-white font-bold text-[2rem] pb-[1rem] w-full h-1/2 pt-[1rem]">
                        Internship Certificate
                      </div>
                      <hr className="border-black border-1 my-[1rem] mx-[1rem]" />
                      <div className="text-center">
                        <button className="bg-white p-[0.3rem] rounded-lg ">
                          <div className="bg-gradient-to-r  from-red-600 to-yellow-400 rounded-lg cursor-pointer">
                            <div className="p-2 px-3 text-lg font-bold rounded-lg bg-black text-white duration-200 hover:translate-y-[-0.20rem] hover:translate-x-[0.25rem] ">
                              Drive Link
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card font-mono">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div
                      className="flip-card-front flex flex-col pt-2 bg-[#bbb] cursor-pointer"
                    >
                      <span className="text-xl font-bold">Home Page - </span>
                      <div className=" py-4 px-2 "><img className="rounded-lg  border-2 border-black" src="/neuroHome.png"/></div>
                    </div>
                    <div
                      className="flip-card-back flex flex-col pt-2 bg-[#bbb] cursor-pointer"
                    >
                      <span className="text-xl font-bold">Product Page - </span>
                      <div className=" py-4 px-2 "><img className="rounded-lg  border-2 border-black" src="/neuroProduct.png"/></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 row-span-1 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative h-full justify-between flex bg-purple-700 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className="text-[3rem] px-4 font-bold flex  font-mono">
                        <div className="mt-6">
                        Tech <br/> Stack
                        </div>
                      <div className="border-black  border-[1px] mx-4 my-4" ></div>
                      </div>
                      <div className="flex text-1xl flex-wrap font-bold font-mono py-4">
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black"><span>JavaScript</span></div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black"><span>NextJs</span></div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black"><span>HTML</span></div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black"><span>CSS</span></div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black"><span>Tailwind</span></div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black"><span>ReactJs</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bento grid grid-cols-2 md:hidden grid-rows-4 gap-3 h-full">
                <div className="flip-card col-span-2 row-span-1 ">
                  <div className=" flip-card-inner border-[2px] border-black h-full">
                    <div className="flip-card-front relative flex p-2 h-full bg-blue-400  ">
                      <div className="text-[1rem] font-mono">
                        <span className="font-bold text-[1rem]">
                          June&apos;24-July&apos;24
                        </span>{" "}
                        <br />{" "}
                        <span className=" text-[1rem] font-bold">
                          NeuroDrishti{" "}
                        </span>
                        <span className="text-[1rem]">
                          develops AI assistance glasses that connects them to
                          the world visually.
                        </span>{" "}
                      </div>
                    </div>
                    <div className="flip-card-back h-full flex  bg-blue-400 ">
                    <div className="text-[0.9rem] p-2 font-extrabold font-mono">
                        <div className=" cursor-pointer">
                          Task :{" "}
                          <span className="font-semibold text-[0.9rem]">
                            Develop a dynamic showcase website to elegantly
                            present our vision, products, notable achievements,
                            and a user-friendly buy page.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card row-span-1 col-span-1">
                  <div className="flip-card-inner h-full border-[2px] border-black">
                    <div className="flip-card-front  bg-green-300">
                      <div className="text-[0.8rem] font-bold font-mono text-left pl-2 pt-2 ">
                        Role -
                      </div>
                      <div className="text-[1rem] font-mono mt-2 text-center ">
                        Full-Stack <br />
                        Web developer intern
                      </div>
                    </div>
                    <div className="h-full flip-card-back bg-green-300 ">
                      <div className="text-[01rem] font-mono h-full mt-8 text-center ">
                        NextJS <br />
                        Web developer intern
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 row-span-2 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative h-full bg-purple-700 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className="text-[1rem] px-4 font-bold flex  font-mono">
                        <div className="mt-2">
                        Tech-Stack
                        </div>
                      </div>
                      <hr className="border-black  border-[0.5px] mx-2 my-1" />
                      <div className="flex text-[0.65rem] flex-wrap font-bold font-mono ">
                        <div className="border-2 h-6 w-[3rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black"><span>JSX</span></div>
                        <div className="border-2 h-6 w-[3rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black"><span>NextJs</span></div>
                        <div className="border-2 h-6 w-[3rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black"><span>HTML</span></div>
                        <div className="border-2 h-6 w-[3rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black"><span>CSS</span></div>
                        <div className="border-2 h-6 w-[4rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black"><span>ReactJs</span></div>
                        <div className="border-2 h-6 w-[5rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black"><span>Tailwind</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 row-span-1 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative h-full justify-around bg-pink-700 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className=" text-center font-mono text-white font-bold text-[1rem] pb-[1rem] w-full h-1/3 pt-[0.5rem]">
                        Internship Certificate
                      </div>
                      <hr className="border-black border-1 my-[1rem] mx-[1rem]" />
                      <div className="text-center">
                        <button className="bg-white p-[0.3rem] rounded-lg ">
                          <div className="bg-gradient-to-r  from-red-600 to-yellow-400 rounded-lg cursor-pointer">
                            <div className="p-2 px-3 text-sm font-bold rounded-lg bg-black text-white duration-200 hover:translate-y-[-0.20rem] hover:translate-x-[0.25rem] ">
                              Drive Link
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card font-mono row-span-1 col-span-2">
                  <div className="flip-card-inner h-full flex  border-[2px] border-black">
                  <div
                      className="flip-card-front flex p-2 bg-[#bbb] cursor-pointer"
                    >
                      <span className="text-xl mt-7 font-bold">Landing Page - </span>
                      <div className=" py-4 px-2 "><img className="rounded-lg  border-2 border-black" src="/neuroHome.png"/></div>
                    </div>
                    <div
                      className="flip-card-back flex p-2 bg-[#bbb] cursor-pointer"
                    >
                      <span className="text-xl mt-7 font-bold">Product Page - </span>
                      <div className=" py-4 px-2 "><img className="rounded-lg  border-2 border-black" src="/neuroProduct.png"/></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
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
