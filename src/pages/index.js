import PokeCard from "../components/pokeCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [pokes, setPokes] = useState([]);
  const [pokeAll, setPokeAll] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) =>
        setPokes(
          data.results.map((response, index) => {
            return {
              id: index + 1,
              name: response.name,
              url: response.url,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                index + 1
              }.svg`,
            };
          })
        )
      );
  }, []);

  console.log(pokes);

  return (
    <div>
      <PokeCard pokes={pokes} />
    </div>
  );
}
