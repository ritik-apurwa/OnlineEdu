import heroImg from "../../../public/images/course/hero.png";
import heroImgback from "../../../public/images/course/hero-shape-purple.png";
import CourseCard from "../../components/coursecard/CourseCard";
import PriceCard from "../../components/pricecard/PriceCard";
import OnlineCourses from "../../components/online_courses/OnlineCourses";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Home: React.FC<{ scrollToDiv: (divId: string) => void }> = ({
  scrollToDiv,
}) => {
  const home_section_ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      if (sectionId !== "online_courses") { // Check if the hash is not for the online courses section
        scrollToDiv(sectionId);
      }
    }
  }, [location, scrollToDiv]);

  return (
    <>
      <section ref={home_section_ref}>
        <section
          id="home_page"
          className="bg-secondary-1 w-full flex flex-col h-full"
        >
          <div
            id="hero_div"
            className="flex flex-col md:items-center p-4 gap-y-8 md:gap-x-4 md:flex-row h-full w-full"
          >
            <div
              id="hero_header"
              className="h-1/4 md:h-full md:w-5/12 w-full flex justify-center flex-col items-center  "
            >
              <h1 className="lg:text-4xl text-xl md:text-xl leading-tight text-black font-semibold">
                Launch your <br /> Own online learning <br /> Platform
              </h1>
              <h3 className="text-lg mt-3">
                Unlimited access to all 60+ instructors.
              </h3>
              <span className="text-[14px]">
                2 passes (with access to all classes) for $240
              </span>
            </div>

            <div
              id="hero_img_hero_imgback"
              className="h-1/4 md:h-full md:w-7/12 relative"
            >
              <div id="hero_back_img_div" className=" h-full ">
                <img
                  id="hero_back_img"
                  src={heroImgback}
                  alt=""
                  className="w-full h-1/4 z-50 object-cover"
                />
                <div
                  id="hero_img_div"
                  className="inset-0  absolute h-full w-full"
                >
                  <img
                    id="hero_img"
                    src={heroImg}
                    alt=""
                    className="w-full h-[95%]  absolute object-contain z-20 "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="course_card">
          <CourseCard />
        </section>
        <section id="price_card">
          <PriceCard />
        </section>
        <Link to="#online_course">gg</Link>
        <OnlineCourses />
      </section>
    </>
  );
};

export default Home;
