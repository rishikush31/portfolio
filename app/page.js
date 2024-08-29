"use client";
import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_g4vmtkp",
        "template_7w41rp7",
        {
          from_name: formData.name,
          to_name: "Rishi Srivastava",
          from_email: formData.email,
          to_email: "rishikush31@gmail.com",
          message: formData.message,
        },
        "wcIdgIwWRuvBCxC-b"
      )
      .then(
        () => {
          alert("I will get back to you as soon as possible.");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center p-10 px-10 md:p-10 md:px-16 font-mono justify-center ">
      <div className="">
        <h1 className="text-[1.5rem] md:text-[3rem] font-extrabold text-purple-600 mb-4">
          Send me a message!
        </h1>
        <p className="text-[0.85rem] md:text-[1.125rem] mb-8">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded w-full max-w-md"
        >
          <div className="my-5">
            <label className="block text-gray-900 text-sm  mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className=" appearance-none border-b-[1px] border-gray-500  w-full py-2  text-purple-600 leading-tight focus:outline-none focus:-outline"
            />
          </div>
          <div className="my-5">
            <label
              className="block text-gray-900 text-sm  mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className=" appearance-none border-b-[1px] border-gray-500  w-full py-2  text-purple-600 leading-tight focus:outline-none focus:-outline"
            />
          </div>
          <div className="my-5">
            <label
              className="block text-gray-900 text-sm mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              className="resize-none border-b-[1px] border-gray-500 appearance-none  w-full py-2  text-purple-600 leading-tight focus:outline-none focus:-outline"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="wrapper py-2 px-5 md:py-3 md:px-8 my-2 "
            >
              <a className="a">
                <span className="span p-4 text-sm md:text-lg">SHOOT ⟶</span>
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

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
            <a href="#about">About</a>
          </div>
          <div className="p-2 mx-1 cursor-pointer text-sm font-bold rounded-lg hover:bg-gray-200">
            <a href="#experience">Experience</a>
          </div>
          <div className="p-2 mx-1 cursor-pointer text-sm font-bold rounded-lg hover:bg-gray-200">
            <a href="#projects">Projects</a>
          </div>
          <div className="p-2 mx-1 cursor-pointer text-sm font-bold rounded-lg hover:bg-gray-200">
            <a href="#contact">Contact</a>
          </div>
          <div>
            <div className="bg-gradient-to-r  from-red-600 to-yellow-400 rounded-lg mx-1 cursor-pointer">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1MSePH1nttLYwzW-eVGgTwty8Mk14MNRT/view?usp=drive_link"
              >
                <div className="relative p-2 text-sm font-bold rounded-lg bg-black text-white duration-200 hover:translate-y-[-0.20rem] hover:translate-x-[0.25rem] ">
                  Resume
                </div>
              </a>
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
        <div className="" id="home">
          <div className="absolute h-full w-full z-[3] container">
            <div className=" flex flex-col text-right mr-3 md:mr-10 mt-8 justify-center h-full">
              <div className="text-white font-border font-extrabold font-mono text-[3rem] md:text-[5rem]">
                <a className="">“I <span className="text-yellow-300">dream</span> my painting <br/> and I <span className="text-orange-600">paint</span> my dream”
                <br/></a>
              </div>
              {/* <div className="text-lime-400 font-border text-right font-extrabold font-mono text-[5rem] md:text-[9rem]">
                Rishi
              </div> */}
              <br></br>
              <br></br>
              <div className="text-white font-border font-extrabold font-mono text-4xl">
              ― Vincent Willem van Gogh
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
          id="about"
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
                  <a href="#contact">
                    <div className="p-2 px-3 text-lg font-bold rounded-lg bg-black text-white duration-200 hover:translate-y-[-0.20rem] hover:translate-x-[0.25rem] ">
                      Contact me
                    </div>
                  </a>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          id="experience"
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
                      <a
                        target="_blank"
                        href="https://www.codechef.com/users/rishikush31"
                      >
                        <div className="text-2xl font-mono text-green-500 cursor-pointer">
                          rishikush@codechf
                        </div>
                      </a>
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
                      <a
                        target="_blank"
                        href="https://leetcode.com/u/rishikush31/"
                      >
                        <div className="text-2xl font-mono text-green-300 cursor-pointer">
                          rishikush@leetcode
                        </div>
                      </a>
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
                      <a
                        target="_blank"
                        href="https://atcoder.jp/users/rishikush"
                      >
                        <div className="text-2xl font-mono text-green-100 cursor-pointer">
                          rishikush@atCoder
                        </div>
                      </a>
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
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/rishi-srivastava-38b8a6237/"
                        >
                          <div className="pt-[1rem] cursor-pointer">
                            LinkedIn
                          </div>
                        </a>
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
                        <a
                          target="_blank"
                          href="https://drive.google.com/file/d/1fRUZtKi7QOOvozrjkYZFKEm1vx7yC7Hx/view?usp=sharing"
                        >
                          <div className="pt-[1rem] cursor-pointer">
                            Certificate
                          </div>
                        </a>
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
                      <a
                        target="_blank"
                        href="https://codeforces.com/profile/rishikush"
                      >
                        <div className="text-2xl font-mono text-green-100 cursor-pointer">
                          rishikush@cforces
                        </div>
                      </a>
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
                      <a
                        target="_blank"
                        href="https://www.codechef.com/users/rishikush31"
                      >
                        <div className=" text-green-500 cursor-pointer">
                          rishikush@cchf
                        </div>
                      </a>
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
                      <a
                        target="_blank"
                        href="https://leetcode.com/u/rishikush31/"
                      >
                        <div className=" text-green-500 cursor-pointer">
                          rish@lcode
                        </div>
                      </a>
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
                      <a
                        target="_blank"
                        href="https://codeforces.com/profile/rishikush"
                      >
                        <div className=" text-green-500 cursor-pointer">
                          rish@cforces
                        </div>
                      </a>
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
                      <a
                        target="_blank"
                        href="https://atcoder.jp/users/rishikush"
                      >
                        <div className=" text-green-100 cursor-pointer">
                          rish@atcoder
                        </div>
                      </a>
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
                            <a
                              target="_blank"
                              href="https://drive.google.com/file/d/1mKOMObpaMxuXRVHeqGIhS6yLIot-UBXv/view?usp=sharing"
                            >
                              <div className="p-2 px-3 text-lg font-bold rounded-lg bg-black text-white duration-200 hover:translate-y-[-0.20rem] hover:translate-x-[0.25rem] ">
                                Drive Link
                              </div>
                            </a>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card font-mono">
                    <div className="flip-card-inner h-full border-[2px] border-black">
                      <div className="flip-card-front flex flex-col pt-2  bg-[#bbb] cursor-pointer">
                      <a target="_blank" href="https://www.neurodrishti.com/">
                        <span className="text-xl px-2 font-bold">
                          Home Page -{" "}
                        </span>
                        <div className=" py-4 px-2 ">
                          <img
                            className="rounded-lg  border-2 border-black"
                            src="/neuroHome.png"
                          />
                        </div>
                        </a>
                      </div>
                      <div className="flip-card-back flex flex-col pt-2 bg-[#bbb] cursor-pointer">
                      <a target="_blank" href="https://www.neurodrishti.com/">
                        <span className="text-xl px-2 font-bold">
                          Product Page -{" "}
                        </span>
                        <div className=" py-4 px-2 ">
                          <img
                            className="rounded-lg  border-2 border-black"
                            src="/neuroProduct.png"
                          />
                        </div>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-1 border-[2px] border-black">
                  <div className=" bg-black h-full">
                    <div className="relative h-full justify-between flex bg-purple-700 duration-200 hover:translate-y-[-0.30rem] hover:translate-x-[0.35rem] hover:border-[2px] hover:border-black ">
                      <div className="text-[3rem] px-4 font-bold flex  font-mono">
                        <div className="mt-6">
                          Tech <br /> Stack
                        </div>
                        <div className="border-black  border-[1px] mx-4 my-4"></div>
                      </div>
                      <div className="flex text-1xl flex-wrap font-bold font-mono py-4">
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black">
                          <span>JavaScript</span>
                        </div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black">
                          <span>NextJs</span>
                        </div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black">
                          <span>HTML</span>
                        </div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black">
                          <span>CSS</span>
                        </div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black">
                          <span>Tailwind</span>
                        </div>
                        <div className="border-2 h-10 w-[8rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-2 border-black">
                          <span>ReactJs</span>
                        </div>
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
                        <div className="mt-2">Tech-Stack</div>
                      </div>
                      <hr className="border-black  border-[0.5px] mx-2 my-1" />
                      <div className="flex text-[0.65rem] flex-wrap font-bold font-mono ">
                        <div className="border-2 h-6 w-[3rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black">
                          <span>JSX</span>
                        </div>
                        <div className="border-2 h-6 w-[3rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black">
                          <span>NextJs</span>
                        </div>
                        <div className="border-2 h-6 w-[3rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black">
                          <span>HTML</span>
                        </div>
                        <div className="border-2 h-6 w-[3rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black">
                          <span>CSS</span>
                        </div>
                        <div className="border-2 h-6 w-[4rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black">
                          <span>ReactJs</span>
                        </div>
                        <div className="border-2 h-6 w-[5rem] text-center hover:scale-[1.1] rounded-lg m-2 bg-slate-500 p-[0.2rem] border-black">
                          <span>Tailwind</span>
                        </div>
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
                            <a
                              target="_blank"
                              href="https://drive.google.com/file/d/1mKOMObpaMxuXRVHeqGIhS6yLIot-UBXv/view?usp=sharing"
                            >
                              <div className="p-2 px-3 text-sm font-bold rounded-lg bg-black text-white duration-200 hover:translate-y-[-0.20rem] hover:translate-x-[0.25rem] ">
                                Drive Link
                              </div>
                            </a>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card font-mono row-span-1 col-span-2">
                  <a target="_blank" href="https://neurodrishti.com/">
                    <div className="flip-card-inner h-full flex  border-[2px] border-black">
                      <div className="flip-card-front flex p-2 bg-[#bbb] cursor-pointer">
                        <span className="text-xl mt-7 font-bold">
                          Landing Page -{" "}
                        </span>
                        <div className=" py-4 px-2 ">
                          <img
                            className="rounded-lg  border-2 border-black"
                            src="/neuroHome.png"
                          />
                        </div>
                      </div>
                      <div className="flip-card-back flex p-2 bg-[#bbb] cursor-pointer">
                        <span className="text-xl mt-7 font-bold">
                          Product Page -{" "}
                        </span>
                        <div className=" py-4 px-2 ">
                          <img
                            className="rounded-lg  border-2 border-black"
                            src="/neuroProduct.png"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="relative min-h-[140vh] bg-cover md:objectPositionsakura2 objectPositionsakura"
          style={{ backgroundImage: `url("/sakura.jpg")` }}
        >
          <div className="absolute h-full w-full"></div>
        </div>
        <div
          className="relative min-h-[140vh] bg-cover md:objectPositionday2 objectPositionday"
          id="contact"
          style={{ backgroundImage: `url("/day.jpg")` }}
        >
          <div className="z-[2] mx-[2rem] md:mx-[5rem]  ">
            <div className="font-mono text-[1.5rem] md:text-[3rem] pt-[3rem] pb-[1rem] font-bold">
              Contact me
            </div>
            <div className="flex md:flex-row flex-col h-screen justify-between">
              <div className="bg-white rounded-3xl shadow-2xl w-full md:w-[50vw] h-full">
                <ContactForm />
              </div>
              <div className="w-full md:w-auto h-full flex flex-row md:flex-col justify-between mt-7 md:mt-0">
                <div className=" m-auto ">
                  <div className=" p-2 text-[1.2rem] text-center md:text-[2rem] font-mono text-blue-900 font-bold md:font-semibold md:text-center  mb-6">
                    <a className="bg-white p-2 px-4 rounded-xl">Socials</a>
                  </div>
                  <div className="w-[80vw] md:w-[26vw]">
                    {/* add the svg of linkedin , github, instagram, email here */}
                    <div className="flex justify-around ">
                      {/* LinkedIn Icon */}
                      <a

                      className="bg-white hover:bg-blue-500 transition-all p-2 rounded-lg scale-[1.2] hover:scale-[1.3] shadow-2xl" 
                        href="https://www.linkedin.com/in/rishi-srivastava-38b8a6237/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.324 0 .72 0h14.56c.396 0 .72.513.72 1.146v13.708c0 .633-.324 1.146-.72 1.146H.72c-.396 0-.72-.513-.72-1.146V1.146zM4.943 12.71V6.268H3.269v6.442h1.674zM4.106 5.231c.543 0 .878-.36.878-.81-.01-.455-.335-.81-.868-.81-.534 0-.878.355-.878.81 0 .45.335.81.856.81h.012zm2.62 7.479V9.359c0-.166.012-.332.061-.451.134-.332.438-.676.949-.676.668 0 .936.51.936 1.256v3.221h1.674V9.324c0-1.963-1.049-2.875-2.448-2.875-1.127 0-1.627.63-1.91 1.066v.048h.012l.012-.048V6.268H6.726c.022.708 0 6.442 0 6.442h1.674z" />
                        </svg>
                      </a>

                      {/* GitHub Icon */}
                      <a

                      className="bg-white hover:bg-slate-500 transition-all p-2 rounded-lg scale-[1.2] hover:scale-[1.3] shadow-2xl" 
                        href="https://github.com/rishikush31"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.292 6.532 5.47 7.59.4.073.547-.173.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.922-.89-1.167-.89-1.167-.727-.497.055-.487.055-.487.802.056 1.224.824 1.224.824.714 1.223 1.873.87 2.33.665.072-.518.28-.87.508-1.07-1.777-.202-3.644-.888-3.644-3.95 0-.872.31-1.587.824-2.146-.083-.202-.357-1.017.078-2.12 0 0 .672-.215 2.2.82a7.68 7.68 0 012.004-.27c.68.003 1.363.092 2.004.27 1.528-1.035 2.2-.82 2.2-.82.435 1.103.162 1.918.08 2.12.513.56.823 1.274.823 2.146 0 3.07-1.87 3.746-3.653 3.945.29.25.543.738.543 1.488 0 1.074-.01 1.938-.01 2.2 0 .214.146.462.55.383C13.71 14.53 16 11.538 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>

                      {/* Instagram Icon */}
                      <a

                      className="bg-white p-2 hover:bg-pink-500 transition-all rounded-lg scale-[1.2] hover:scale-[1.3] shadow-2xl" 
                        href="https://www.instagram.com/_rishidoesart_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.93 0 5.676.011 4.84.048c-.838.038-1.41.177-1.905.372-.44.172-.815.397-1.178.76-.362.363-.588.738-.76 1.178-.195.495-.334 1.067-.372 1.905C.011 5.676 0 5.93 0 8s.011 2.324.048 3.16c.038.838.177 1.41.372 1.905.172.44.397.815.76 1.178.363.362.738.588 1.178.76.495.195 1.067.334 1.905.372.837.037 1.091.048 3.16.048s2.324-.011 3.16-.048c.838-.038 1.41-.177 1.905-.372.44-.172.815-.397 1.178-.76.362-.363.588-.738.76-1.178.195-.495.334-1.067.372-1.905.037-.837.048-1.091.048-3.16s-.011-2.324-.048-3.16c-.038-.838-.177-1.41-.372-1.905a3.482 3.482 0 00-.76-1.178 3.482 3.482 0 00-1.178-.76c-.495-.195-1.067-.334-1.905-.372C10.324.011 10.07 0 8 0zm0 1.292c2.054 0 2.287.009 3.094.045.746.034 1.154.153 1.427.256.36.14.617.308.89.582.273.273.442.53.582.89.103.273.222.68.256 1.427.036.807.045 1.04.045 3.094s-.009 2.287-.045 3.094c-.034.746-.153 1.154-.256 1.427a2.47 2.47 0 01-.582.89 2.47 2.47 0 01-.89.582c-.273.103-.68.222-1.427.256-.807.036-1.04.045-3.094.045s-2.287-.009-3.094-.045c-.746-.034-1.154-.153-1.427-.256a2.47 2.47 0 01-.89-.582 2.47 2.47 0 01-.582-.89c-.103-.273-.222-.68-.256-1.427-.036-.807-.045-1.04-.045-3.094s.009-2.287.045-3.094c.034-.746.153-1.154.256-1.427.14-.36.308-.617.582-.89.273-.273.53-.442.89-.582.273-.103.68-.222 1.427-.256.807-.036 1.04-.045 3.094-.045zm0 3.32a4.68 4.68 0 00-4.688 4.688A4.68 4.68 0 008 13.988a4.68 4.68 0 004.688-4.688A4.68 4.68 0 008 4.612zm0 1.292c.939 0 1.706.767 1.706 1.706A1.706 1.706 0 018 9.317a1.706 1.706 0 01-1.706-1.707c0-.939.767-1.706 1.706-1.706zm3.188-2.332a.75.75 0 100 1.5.75.75 0 000-1.5z" />
                        </svg>
                      </a>

                      {/* Email Icon */}
                      <a 
                      
                      className="bg-white hover:bg-red-500 transition-all p-2 rounded-lg scale-[1.2] hover:scale-[1.3] shadow-2xl" href="mailto:rishikush31@gmail.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm13.33-.06A1 1 0 0014 4H2a1 1 0 00-.33.06L8 8.533 13.33 3.94zM8 9.467L1.33 5.06a.993.993 0 00-.27.233L8 10.467l6.94-5.174a.993.993 0 00-.27-.233L8 9.467zm6 3.233a1 1 0 00.33-.06L8 7.467l-6.33 5.174A1 1 0 002 12V4v8a1 1 0 001 1h12a1 1 0 001-1V4v8a1 1 0 00-.33.06z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <img src="/stickers/black cat.webp" className="scale-[0.85] hidden md:block" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="footer"
          className="bg-lime-950 flex flex-col  text-white font-mono py-[2rem]  "
        >
          <div className="text-center p-7 br mx-[2rem] md:mx-[5rem]">
            Designed and Developed by{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rishi-srivastava-38b8a6237/"
              className="text-blue-400"
            >
              Rishi Srivastava
            </a>
            . I do not claim any right on the graphics used.
            <br />
            Copyright © 2024 All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
