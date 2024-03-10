import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai'
import { blog } from '../../data/data'
import { BiRightArrow } from 'react-icons/bi'

const Blog = () => {
  return (
    <div
    id="comments_box"
    className="box p-4 flex bg-gray-200 flex-col sm:grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 border border-gray-300 rounded-md mt-6"
  >
    <div className="h-[100px] w-full flex items-center flex-row justify-between">
      <h1 className="font-bold items-center text-xl">Recent Post</h1>
      <span className="rounded-full h-24 w-24 mr-3">
        <BiRightArrow className="rounded-full w-12 h-12 md:w-20 bg-[#1eb2a6] p-2 sm:p-5 text-white md:h-20 object-cover" />
      </span>
    </div>

    {blog.slice(0, 5).map((val, index) => (
      <div
        className="items flex items-center mb-3 px-4 py-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        key={index}
        style={{
          backgroundColor: index % 2 === 0 ? "#f3f4f6" : "#edf2f7",
          color: index % 2 === 0 ? "#333" : "#555",
        }}
      >
        <div className="img sm:w-24 w-16 h-16 sm:h-24 mr-3">
          <img
            src={val.cover}
            alt=""
            className="sm:w-20 sm:h-20 w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-medium mb-1">
            {val.title.slice(0, 40)}...
          </h4>
          <div className="flex items-center text-[#1eb2a6]">
            <AiOutlineCalendar className="mr-1" />
            <span>{val.date}</span>
          </div>
          <div className="flex items-center text-[#1eb2a6]">
            <AiOutlineUser className="mr-1" />
            <span>{val.type}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Blog