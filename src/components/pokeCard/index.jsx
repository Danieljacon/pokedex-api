import PokeImage from "./PokeImage";
import PokeName from "./PokeName";

const PokeCard = ({ pokes }) => {
  
  return (
    <div>
      {pokes.map((response, index) => (
        <div key={index + 1}>
          <PokeName name={response.name}/>
          <PokeImage image={response.image} alt={response.name}/>
        </div>
      ))}
    </div>
  );
};

export default PokeCard;
