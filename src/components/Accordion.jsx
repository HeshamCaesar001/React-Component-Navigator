import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
     setExpandedIndex(currentExpandedIndex=>{
        if(currentExpandedIndex === nextIndex){
            return -1
        }else{
            return nextIndex;
        }
     })
  };

  const renderItem = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 justify-between bg-gray-50 border item-center cursor-pointer"
          onClick={()=>handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderItem}</div>;
}

export default Accordion;
