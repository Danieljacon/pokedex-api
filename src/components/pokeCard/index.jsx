import PokeImage from "./PokeImage";
import PokeName from "./PokeName";

const PokeCard = ({ pokes }) => {
  const styles = {
    container: "w-full flex flex-col justify-center items-center p-2 ",
    content:
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4",
    cardItems:
      "w-40 h-60 md:w-48 flex flex-col justify-center text-center rounded-full border-2 border-grey-500 bg-red-500 relative transform hover:scale-110 transition duration-100 ease-in-out hover:bg-blue-200 cursor-pointer",
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {pokes.map((response, index) => (
          <div key={index + 1} className={styles.cardItems}>
            <PokeName name={response.name} />
            <PokeImage image={response.image} alt={response.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
