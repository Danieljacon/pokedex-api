const Pagination = ({ pages, currentPage }) => {
  const styles = {
    container: 'w-full bg-red-500 flex justify-center items-center mb-4 flex-wrap',
    button: 'w-10 h-10 font-bold transition duration-100 ease-in-out hover:bg-blue-200 rounded-full focus:bg-blue-200',
  };
  return (
    <div className={styles.container}>
      {Array.from(Array(pages), (item, index) => {
        const id = index + 1;
        return (
          <button
            key={id}
            value={index}
            onClick={(e) => currentPage(Number(e.target.value))}
            className={styles.button}
          >
            {id}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
