import { BiPaperPlane } from "react-icons/bi"

const Newsletter = () => {
  return (
    <div
    id="news_letter"
    className="flex md:flex-col flex-col-reverse gap-y-8 bg-primary-1 text-white py-10 justify-center items-center "
  >
    <div
      id="news_letter_input_icon"
      className=" flex justify-center flex-row w-full items-center"
    >
      <input
        id="news_letter_input"
        type="text"
        placeholder="Enter email address"
        className="mr-3 px-4 py-2 rounded-lg   bg-white text-black w-9/12"
      />
      <div id="news_letter_icon">
        <BiPaperPlane size={28} className="text-black rounded-full" />
      </div>
    </div>

    <div
      id="news_letter_text"
      className=" w-full flex justify-center flex-col px-2"
    >
      <h1
        id="news_letter_heading"
        className="text-2xl font-semibold py-3 flex justify-center"
      >
        Newsletter - Stay tune and get the latest update
      </h1>
      <span id="news_letter_span" className="flex justify-center">
        Far far away, behind the word mountains
      </span>
    </div>
  </div>
  )
}

export default Newsletter