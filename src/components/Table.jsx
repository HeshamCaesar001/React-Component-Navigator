import React from "react";
import { Fragment } from "react";
function Table({ data, config, keyFn }) {
  const renderHeaders = config.map((head) => {
    if (head.header) {
      return <Fragment key={head.label}>{head.header()}</Fragment>;
    }
    return <th key={head.label}>{head.label}</th>;
  });
  const renderRows = data.map((row) => {
    const renderCells = config.map((col) => {
      return (
        <td className="p-2" key={col.label}>
          {col.render(row)}
        </td>
      );
    });
    return (
      <tr key={keyFn(row)} className="border-b">
        {renderCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
}

export default Table;
