import { price } from '../../data/data'

const PriceCard = () => {
  return (
    <div className="flex flex-col md:grid md:gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 w-screen max-w-[85%] mx-auto justify-between">
    {price.map((val, index) => (
      <div key={index} className=" flex w-full shadow-lg ">
        <div className="w-full  flex flex-col justify-between h-fit py-6 px-6 mb-4 md:mb-0">
          <h4 className="w-full justify-center flex">{val.name}</h4>
          <h1 className="flex flex-row items-center justify-center">
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="border-2 py-2 px-2 border-teal-500 w-full transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white">
            GET STARTED
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default PriceCard