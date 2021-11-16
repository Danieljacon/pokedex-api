import PokeImage from "./PokeImage";
import PokeName from "./PokeName";

const PokeCard = ({ pokes }) => {
  return (
    <div>
      {pokes.map((response) => (
        <div key={response.id}>
          <PokeName name={response.name}/>
          <PokeImage image={response.image} alt={response.name}/>
        </div>
      ))}
    </div>
  );
};

export default PokeCard;
