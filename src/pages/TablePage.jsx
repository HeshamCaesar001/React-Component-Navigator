import React from "react";
// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 4 },
    { name: "Lime", color: "bg-green-600", score: 1 },
  ];
  const config = [
    {
      label: "Name",
      render: (fruite) => fruite.name,
      sortValue: (fruite) => fruite.name,
    },
    {
      label: "Color",
      render: (fruite) => <div className={`p-3 m-2 ${fruite.color}`} />,
    },
    {
      label: "Score",
      render: (fruite) => fruite.score,
      sortValue:(fruite)=>fruite.score
    },
  ];
  const keyFn = (fruite) => {
    return fruite.name;
  };
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
