import SyntaxHighlighter from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { firstmap } from "./htmldata";

const HtmlDataComponent = () => {
  return (
    <div className="flex flex-col pb-10 gap-y-8">
      {firstmap.map((element, index) => (
        <div className="flex custom_shadow px-4  w-full flex-col" key={index}>
          <h2 className="font-bold flex  justify-center py-4 text-primary-1 text-3xl ">
            {element.tag}
          </h2>
          <div className=" mx-4 py-4 " style={{ textTransform: "lowercase" }}>
            <SyntaxHighlighter language="html" style={hopscotch}>
              {element.code}
            </SyntaxHighlighter>
          </div>
          <p className="bg-gray-200 p-4 my-4">{element.tag_desc}</p>
          <h3 className="flex py-4 justify-center text-xl font-semibold">
            All Attributes:
          </h3>
          <ul className="flex flex-col px-4 py-4 gap-y-4">
            {element.alt_attr.map((attribute, idx) => (
              <li className="list-decimal" key={idx}>
                <div className="flex flex-col py-2">
                  <h1 className="font-bold text-blue-600 pb-4">{attribute.attr_name}</h1>

                  <p> {attribute.attr_desc}</p>

                  <p>
                    {" "}
                    <em>{attribute.attr_val_desc}</em>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HtmlDataComponent;
