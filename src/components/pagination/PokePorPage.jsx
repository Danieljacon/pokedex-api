import React from "react";

const PokePorPage = ({ items, itemsPerPage }) => {
  return (
    <div>
      <select
        value={items}
        onChange={(e) => itemsPerPage(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    </div>
  );
};

export default PokePorPage;
