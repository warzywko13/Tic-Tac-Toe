import Box from "./Box";

import "./style/Table.css";

const Table = ({ table, handleBoxClick }) => {
  const box = table.map(({ id, value }, key) => {
    return (
      <Box key={key} id={id} value={value} handleBoxClick={handleBoxClick} />
    );
  });

  return <div className="table">{box}</div>;
};

export default Table;
