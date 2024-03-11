import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import Newsletter from "./Newsletter";
import CopyRight from "./CopyRight";


const Footer = () => {
  return (
    <>
      
      <Newsletter />
      <footer id="footer" className="bg-gray-200 my-10 py-10">
        <div
          id="footer_main_section"
          className="flex flex-row md:flex-row w-full"
        >
          <div id="footer_logo_other_links" className="w-full">
            <div
              id="footer_logo"
              className="flex w-full justify-center items-center flex-col gap-y-4 mb-4"
            >
              <h1 id="footer_logo_heading" className="text-3xl font-bold">
                ACADEMIA
              </h1>

              <span
                id="footer_logo_span"
                className="text-[#1eb2a6] font-semibold text-sm"
              >
                ONLINE EDUCATION & LEARNING
              </span>
              <p
                id="footer_logo_para"
                className="text-gray-500 font-semibold text-sm mt-2 w-[30ch]"
              >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div id="footer_social_icons" className="flex flex-row mt-3">
                <AiOutlineFacebook size={22} className="text-xl mr-2" />
                <AiOutlineTwitter size={22} className="text-xl mr-2" />
                <AiOutlineInstagram size={22} className="text-xl" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 ">
              <div id="explore" className="flex w-full items-center  flex-col">
                <h3 className="text-lg font-semibold mb-4">Explore</h3>
                <ul className="flex flex-col items-center">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Courses</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                </ul>
              </div>

              <div
                id="quick_links_box"
                className="flex flex-col justify-center items-center w-full"
              >
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="flex flex-col items-center">
                  <li>Contact Us</li>
                  <li>Pricing</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy</li>
                  <li>Feedbacks</li>
                </ul>
              </div>

              <div id="faq" className="flex flex-col w-full items-center">
                <h3 className="text-lg font-semibold mb-4">
                  Have a Questions?
                </h3>
                <ul className="flex flex-col items-center">
                  <li className="flex flex-row items-center py-1 gap-x-4">
                    <MdOutlineSchool
                      size={30}
                      className="text-[#1eb2a6] text-xl mr-2"
                    />
                    Shree Shirdi Sai Baba Ayu College & Hospital
                  </li>
                  <li className="flex items-center py-4 gap-x-4">
                    <AiOutlinePhone
                      size={22}
                      className="text-[#1eb2a6] text-xl mr-2"
                    />
                    +91-6376358708
                  </li>
                  <li className="flex items-center py-4 gap-x-4">
                    <AiOutlineMail
                      size={22}
                      className="text-[#1eb2a6] text-xl mr-2"
                    />
                    ritikapurwa1n@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  );
};

export default Footer;
