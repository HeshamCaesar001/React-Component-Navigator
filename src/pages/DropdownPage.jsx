import Dropdown from "../components/Dropdown";
import { useState } from "react";
function DropdownPage() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Yello", value: "yellow" },
    { label: "Green", value: "green" },
  ];
  const [selected, setSelected] = useState(null);
  const handleSelect = (option)=>{
    setSelected(option)
  }
  return (
    <div className="flex">
      <Dropdown value={selected} onChange={handleSelect} options={options} />
    </div>
  );
}

export default DropdownPage;
