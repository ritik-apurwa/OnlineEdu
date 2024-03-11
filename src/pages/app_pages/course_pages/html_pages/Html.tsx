import React from "react";
import { htmlData } from "../../../../data/html_data";


const AttributeList: React.FC<{
  attributes: { name: string; description: string }[];
}> = ({ attributes }) => {
  return (
    <ul>
      {attributes.map((attribute, index) => (
        <li key={index}>
          <strong>{attribute.name}</strong>: {attribute.description}
        </li>
      ))}
    </ul>
  );
};

const Html: React.FC = () => {
  return (
    <>
      <div className="flex w-full py-20 gap-y-4 flex-col w- justify-center">
        <nav className=" gap-x-3 flex overflow-x-auto">
        
        </nav>
        <h1 className="text-3xl font-bold text-center mt-4">
          HTML Tag Reference
        </h1>
        <div className="flex flex-col gap-y-4">
          {htmlData.map((tag, index) => (
            <div
              key={index}
              id={tag.tag} // Add id attribute here
              className="bg-white shadow-gray-400 custom_shadow rounded-lg p-6"
            >
              <h2 className="text-xl text-blue-500 font-semibold">{tag.tag}</h2>
              <p className="text-gray-600 mb-4">{tag.description}</p>
              {tag.attributes.length > 0 && (
                <>
                  <h3 className="text-lg font-medium mb-2">Attributes:</h3>
                  <AttributeList attributes={tag.attributes} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Html;
