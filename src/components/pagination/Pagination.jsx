const Pagination = ({ pages, currentPage }) => {
    return (
        <>
        {Array.from(Array(pages), (item, index) => {
          const id = index + 1;
          return (
            <button
              key={id}
              value={index}
              onClick={(e) => currentPage(Number(e.target.value))}
            >
              {id}
            </button>
          );
        })}
      </>
    )
}

export default Pagination
