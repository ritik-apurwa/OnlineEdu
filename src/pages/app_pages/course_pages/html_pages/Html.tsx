import { htmlData } from "../../../../data/html_data";


interface Attribute {
  name: string;
  description: string;
}


interface AttributeListProps {
  attributes: Attribute[];
}

const AttributeList: React.FC<AttributeListProps> = ({ attributes }) => {
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
      <div className="flex py-20 gap-y-4 flex-col w-full justify-center">
      <h1 className="text-3xl font-bold text-center mt-4 ">HTML Tag Reference</h1>
      <div className="flex flex-col gap-y-4">
        {htmlData.map((tag, index) => (
          <div key={index} className="bg-white shadow-gray-400  custom_shadow rounded-lg p-6">
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
