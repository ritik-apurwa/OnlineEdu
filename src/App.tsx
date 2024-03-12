import { Route, Routes } from "react-router-dom";
import Home from "./pages/root_pages/Home";
import { Navbar } from "./components/common/Navbar/Navbar";
import { About } from "./pages/root_pages/About";
import Contact from "./pages/root_pages/Contact";
import Footer from "./components/common/footer/Footer";
import OnlineCourses from "./components/online_courses/OnlineCourses";
import Html from "./pages/app_pages/course_pages/html_pages/Html";
import CSS from "./pages/app_pages/course_pages/css_pages/Css";
import Js from "./pages/app_pages/course_pages/js_pages/Js";
import PriceCard from "./components/pricecard/PriceCard";

const scrollToDiv = (divId: string) => {
  const targetDiv = document.getElementById(divId);

  if (targetDiv) {
    targetDiv.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Div with ID "${divId}" not found.`);
  }
};
const App = () => {
  return (
    <div className="w-screen  container max-w-screen-2xl  mx-auto">
      <Navbar />
      <div className=" container mx-auto lg:px-4 ">
        <Routes>
          <Route path="/" element={<Home scrollToDiv={scrollToDiv} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/onlinecourses" element={<OnlineCourses />} />
          <Route path="/pricecard" element={<PriceCard />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/js" element={<Js />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
