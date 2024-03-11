import { css_data } from "../../../../data/css_data";



const CSS: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center">
        <h1 className="text-3xl font-bold text-center mb-8">
          HTML Tag Reference
        </h1>
        <div className="flex flex-col gap-y-4">
          {css_data.map((tagObject, index) => {
            const propertyName = Object.keys(
              tagObject
            )[0] as keyof typeof tagObject;
            const tag = tagObject[propertyName];
            if (!tag) return null; // Skip rendering if tag is undefined
            return (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold">{tag.property_name}</h2>
                <p>{JSON.stringify(tag.values_description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CSS;
