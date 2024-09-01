import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };
  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}{" "}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between item-center cursor-pointe"
        onClick={handleClick}
      >
        {value?.label || "Select Item"}{" "}
        <span className="text-2xl">
          {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </span>{" "}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
