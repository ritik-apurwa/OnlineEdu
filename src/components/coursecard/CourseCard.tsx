import { GrStarOutline } from 'react-icons/gr'
import { coursesCard } from '../../data/data'

const CourseCard = () => {
  return (
    <div id="CourseCard" className="py-20">
    <div className=" flex flex-col
     sm:grid sm:grid-cols-1 px-4   md:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4 gap-4">

        <h1 className=" py-8 text-gray-800 font-bold text-4xl">
          Our Online Courses
        </h1>
      {coursesCard.map((val) => (
        <div
          key={val.id}
          className="bg-white custom_shadow  rounded-md overflow-hidden "
        >
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 flex-shrink-0 custom_shadow rounded-full bg-[#1eb2a6]">
                  <img
                    className="w-full h-full rounded-full"
                    src={val.cover}
                    alt="Course"
                  />
                </div>
                <h1 className="ml-4 text-xl font-semibold">
                  {val.coursesName}
                </h1>
              </div>

              <div className="flex justify-center items-center mb-4 text-[#1eb2a6]">
                {[...Array(5)].map((_, index) => (
                  <GrStarOutline
                    key={index}
                    className="w-4 mr-1"
                    size={18}
                  />
                ))}
                <span>(5.0)</span>
              </div>

              {val.courTeacher.map((details, index) => (
                <div key={index} className="flex items-center mb-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={details.dcover}
                      alt="Teacher"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm">{details.totalTime}</div>
                    <h2 className="text-lg font-semibold">
                      {details.name}
                    </h2>
                  </div>
                </div>
              ))}

              <div className="mb-4 text-[#1eb2a6]">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
            </div>

            <div>
              <button className="w-full py-2 bg-[#1eb2a6] text-white font-semibold rounded-md hover:bg-[#0e8b7b] transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CourseCard