import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { FaGraduationCap, FaUsers, FaBookReader } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import heroImg from "../../../public/images/course/hero.png";
import heroImgback from "../../../public/images/course/hero-shape-purple.png";

const tesxt = () => {
  return (
    <section
        id="hero"
        className="bg-secondary-1 w-full py-10  h-full md:h-full"
      >
        <div id="hero_main_div" className="w-full">
          <div
            id="hero_input_div"
            className="flex items-center justify-center md:flex-col"
          >
            <div
              id="input_div_content"
              className="left w-full h-80 mx-4 text-black md:w-full"
            >
              <div id="input_content">
              <h1 className="text-4xl leading-tight text-black font-semibold">
                Launch your <br /> Own online learning <br /> Platform
              </h1>
              <h3 className="text-lg mt-3">
                Unlimited access to all 60+ instructors.
              </h3>
              <span className="text-[14px]">
                2 passes (with access to all classes) for $240
              </span>
              </div>

              <div  id="input_div" className="relative text-gray-600 focus-within:text-gray-400 mt-5">
                <input
                  id="input"
                  type="search"
                  className="py-3 text-sm container absolute bg-white rounded-md pl-10 focus:outline-none shadow-md"
                  placeholder="Search..."
                  autoComplete="off"
                />
                <div
                  id="input_button_div"
                  className="inset-y-0 left-0 z-20 flex items-center pl-2"
                >
                  <button
                    id="input_search_icon_button"
                    type="submit"
                    className="px-2 py-2 focus:outline-none absolute top-0 focus:shadow-outline rounded-r-md bg-primary-1 text-white hover:bg-primary-2 transition duration-300 ease-in-out"
                  >
                    <FiSearch />
                  </button>
                </div>
              </div>
              <span id="input_span" className="text-[14px]">
                You're guaranteed to find something that's right for you.
              </span>
            </div>
          </div>

          <div id="hero_img_hero_imgback" className="right  md:w-full relative">
            <div id="hero_back_img_div" className="images relative">
              <img
                id="hero_back_img"
                src={heroImgback}
                alt=""
                className=" absolute top-0 left-0 w-96 "
              />
              <div id="hero_img_div" className="img h-[85vh] w-full">
                <img
                  id="hero_img"
                  src={heroImg}
                  alt=""
                  className="h-1/2  w-full  object-contain z-20 relative"
                />
              </div>
            </div>
          </div>

          <div id="button_box" className="">
            <button
              id="hero_button_1"
              className="bg-white shadow-md  z-30 p-2 flex items-center rounded-md"
            >
              <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
                <BsFillLightningChargeFill size={25} />
              </div>

              <div className="text flex flex-col items-start px-4">
                <span className="text-sm text-black">Congrstulations</span>
                <span className="text-[12px]">Your admission completed</span>
              </div>
            </button>

            <button
              id="hero_button_2"
              className="bg-white shadow-md  p-2 flex items-center rounded-md pr-8"
            >
              <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-blue-400">
                <FaGraduationCap size={25} />
              </div>
              <div className="text flex flex-col items-start px-4">
                <span className="text-sm text-black">450K</span>
                <span className="text-[12px]">Assisted Student</span>
              </div>
            </button>

            <button
              id="hero_button_3"
              className="bg-white shadow-md  p-2  md:top-96 md:-right-5 flex items-center rounded-md"
            >
              <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
                <FaUsers size={25} />
              </div>
              <div className="text flex flex-col items-start px-4">
                <span className="text-sm text-black">
                  User Experience Class
                </span>
                <span className="text-[12px]">Tomorrow is our</span>
              </div>
            </button>

            <button
              id="hero_button_4"
              className="bg-white shadow-md  z-30 p-2 flex items-center rounded-md"
            >
              <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-indigo-400">
                <FaBookReader size={25} />
              </div>
            </button>
          </div>
        </div>
      </section>
  )
}

export default tesxt