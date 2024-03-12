import  { useState, useEffect, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { firstmap } from './htmldata';

interface Attribute {
  attr_name: string;
  attr_desc: string;
  attr_val_desc?: string;
}

interface DataBox {
  tag: string;
  code: string;
  tag_desc: string;
  alt_attr: Attribute[];
}

const Html = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<DataBox[]>([]);
  const [page, setPage] = useState<number>(1);
  const lastBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load initial data
    loadMoreBoxes();
  }, []);

  const loadMoreBoxes = () => {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const newBoxes = firstmap.slice(startIndex, endIndex);
    setVisibleBoxes((prevBoxes) => [...prevBoxes, ...newBoxes]);
    setPage((prevPage) => prevPage + 1);
  };

  const handleScroll = () => {
    if (!lastBoxRef.current) return;
    
    const lastBoxOffset = lastBoxRef.current.offsetTop + lastBoxRef.current.clientHeight;
   
    const bottomOffset = 20; // Adjust as needed
    
    if (lastBoxOffset < window.innerHeight + window.pageYOffset + bottomOffset) {
      loadMoreBoxes();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleBoxes]); // L

  return (
    <div id="html_main_section" className="flex flex-col pb-10 gap-y-8">
      {visibleBoxes.map((element, index) => (
        <div
          ref={index === visibleBoxes.length - 1 ? lastBoxRef : null} // Ref to the last box
          id="html_card"
          className="flex custom_shadow px-4  w-full flex-col"
          key={index}
        >
          <h2
            id="card_tag_name"
            className="font-bold flex justify-center py-4 text-primary-1 text-3xl "
          >
            {element.tag}
          </h2>
          <div
            id="card_code"
            className="mx-4 py-4"
            style={{ textTransform: "lowercase" }}
          >
            <SyntaxHighlighter language="html" style={hopscotch}>
              {element.code}
            </SyntaxHighlighter>
          </div>
          <p id="card_tag_desc" className="bg-gray-200 p-4 my-4">
            {element.tag_desc}
          </p>
          <h3 className="flex py-4 justify-center text-xl font-semibold">
            All Attributes:
          </h3>
          <ul id="all_attr_ul" className="flex flex-col px-4 py-4 gap-y-4">
            {element.alt_attr.map((attribute, idx) => (
              <li id="attr_li" className="list-decimal" key={idx}>
                <div id="attr_li_div" className="flex flex-col py-2">
                  <h1 id="attr_name" className="font-bold text-blue-600 pb-4">
                    {attribute.attr_name}
                  </h1>
                  <p id="attr_desc"> {attribute.attr_desc}</p>
                  <p id="attr_val_desc">
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

export default Html;
