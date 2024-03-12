import { price } from '../../data/data'

const PriceCard = () => {
  return (
    <div id='price_cards_section' className="flex flex-col
     md:grid md:gap-x-4 pb-10 gap-y-4 px-4
      md:grid-cols-2 lg:grid-cols-3
      
       justify-between">
        <h1 className=' py-8 text-gray-800 font-bold text-4xl'>
       Our Starting Prices
       
        </h1>
    {price.map((val, index) => (
      <div key={index} className=" rounded-md flex w-full  custom_shadow ">

        <div id='cards' className="w-full text-black
         hover:text-gray-200 hover:bg-gray-700

           flex flex-col justify-between h-fit

            py-6 gap-y-4 px-6 rounded-md md:mb-0
            transition-all duration-300 ease-in-out
            ">

          <h4 id='plan_name' className="w-full font-bold text-primary-1 justify-center flex">{val.name}</h4>

          <h1 id='plan_price' className="flex  text-3xl
           flex-row items-center justify-center">

            <span className='text-primary-1 text-xl'>$</span>
            {val.price}
          </h1>

          <p id='plan_description' className=' font-medium '>{val.desc}</p>
          <button className=" w-full py-2 px-2
           border-teal-500
           rounded-xl
            transition duration-500 ease-in-out
             bg-gray-100 text-green-600 font-bold ">
            GET STARTED
          </button>

        </div>


      </div>
    ))}
  </div>
  )
}

export default PriceCard