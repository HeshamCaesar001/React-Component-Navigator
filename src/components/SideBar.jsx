import React from "react";
import Link from "./Link";
function SideBar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Buttons", path: "/buttons" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];
  const renderLinks = links.map(link=>{
    return <Link activeClassName="font-bold border-l-4 border-blue-500 pl-2" className="mb-3" key={link.label} to={link.path}>{link.label}</Link>
  })
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderLinks}
    </div>
  );
}

export default SideBar;
