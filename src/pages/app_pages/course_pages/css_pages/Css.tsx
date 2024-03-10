import { cssData } from "../../../../data/css_data";

// interface Attribute {
//   name: string;
//   description: string;
// }

// interface AttributeListProps {
//   attributes: Attribute[];
// }

// const AttributeList: React.FC<AttributeListProps> = ({ attributes }) => {
//   return (
//     <ul>
//       {attributes.map((attribute, index) => (
//         <li key={index}>
//           <strong>{attribute.name}</strong>: {attribute.description}
//         </li>
//       ))}
//     </ul>
//   );
// };

const CSS: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center">
        <h1 className="text-3xl font-bold text-center mb-8">
          HTML Tag Reference
        </h1>
        <div className="flex flex-col gap-y-4">
          {cssData.map((tagObject, index) => {
            const propertyName = Object.keys(
              tagObject
            )[0] as keyof typeof tagObject;
            const tag = tagObject[propertyName];
            if (!tag) return null; // Skip rendering if tag is undefined
            return (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold">{tag.property_name}</h2>
                {/* Stringify the values_description object */}
                <p>{JSON.stringify(tag.values_description)}</p>
                {/* Or access properties individually */}
                {/* <p>{tag.values_description["1px solid black"]}</p> */}
                {/* <p>{tag.values_description.red}</p> */}
                {/* Add more properties as needed */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CSS;
