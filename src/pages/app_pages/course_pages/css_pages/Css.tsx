import {  css_data } from "../../../../data/css_data";

const CSS: React.FC = () => {
  return (
    <>
      <div className="flex flex-col py-10 bg-gray-100 w-full justify-center">
        <h1 className="text-3xl font-bold text-center mb-8">CSS Classes</h1>
        <div>
          <h2>Border Properties</h2>
          <ul>
           
          </ul>
        </div>
        <div className="flex custom_shadow flex-col gap-y-4">
          {css_data.map((tagObject, index) => {
            const propertyName = Object.keys(
              tagObject
            )[0] as keyof typeof tagObject;
            const tag = tagObject[propertyName];
            if (!tag) return null; // Skip rendering if tag is undefined
            return (
              <div
                key={index}
                className="bg-white custom_shadow flex flex-col gap-y-5 rounded-lg p-6"
              >
                <h2 className="text-xl text-blue-500 font-semibold">
                  {tag.property_name}
                </h2>
                <p className="flex flex-col gap-y-4">
                  {JSON.stringify(tag.values_description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CSS;
