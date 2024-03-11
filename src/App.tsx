import { Route, Routes } from "react-router-dom"
import Home from "./pages/root_pages/Home"
import { Navbar } from "./components/common/Navbar"
import { About } from "./pages/root_pages/About"
import Contact from "./pages/root_pages/Contact"


const App = () => {
  return (
    <div className="w-screen  container max-w-screen-2xl  mx-auto">
      <Navbar/>
        <div className=" container mx-auto lg:px-4 ">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </div>
    </div>
  )
}

export default App