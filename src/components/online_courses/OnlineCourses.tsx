import { online } from '../../data/data'

const OnlineCourses = () => {
  return (
<section id="online_courses" className="online py-16">
          <div className="container">
            <h1 className="font-bold text-3xl mb-10">
              Browse Our Online Courses
            </h1>
            <div className=" flex flex-col sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {online.map((val, index) => (
                <div
                  className="box shadow-md bg-white rounded-md p-8 text-center transition duration-500 ease-in-out transform hover:bg-blue-600 hover:text-white"
                  key={index}
                >
                  <div className="img w-20 h-20 mx-auto mb-6">
                    <img
                      src={val.cover}
                      alt={val.courseName}
                      className="w-full h-full object-cover rounded-full"
                    />
                    <img
                      src={val.hoverCover}
                      alt=""
                      className="show absolute top-0 left-0 w-full h-full opacity-0"
                    />
                  </div>
                  <h1 className="font-semibold text-lg mb-4">
                    {val.courseName}
                  </h1>
                  <span className="bg-gray-200 px-4 py-1 text-green-600 font-semibold text-sm rounded-md">
                    {val.course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default OnlineCourses