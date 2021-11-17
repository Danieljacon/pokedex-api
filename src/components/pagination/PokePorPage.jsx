import React from "react";

const PokePorPage = ({ items, itemsPerPage }) => {
  const style = {
    container: 'flex mb-2',
    text: 'font-bold px-2',
  }
  return (
    <div className={style.container}>
      <span className={style.text}>Pokémons por página:</span>
      <select
        value={items}
        onChange={(e) => itemsPerPage(Number(e.target.value))}
      >
        <option value={12}>12</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default PokePorPage;
