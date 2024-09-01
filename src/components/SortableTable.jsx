import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSort from "../hooks/use-sort";
function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(
    config,
    data
  );

  const updatedConfig = config.map((con) => {
    if (!con.sortValue) {
      return con;
    }
    return {
      ...con,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => setSortColumn(con.label)}
        >
          <div className="flex item-center">
            {getIcons(con.label, sortBy, sortOrder)}
            {con.label}{" "}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  } else if (sortOrder === "desc")
    return (
      <div>
        <GoArrowDown />
      </div>
    );
}

export default SortableTable;
