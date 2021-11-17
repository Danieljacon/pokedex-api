import PokeCard from "../components/pokeCard";
import { useState, useEffect } from "react";
import Pagination from "../components/pagination/Pagination";
import PokePorPage from "../components/pagination/PokePorPage";
import Container from "../components/pagination/Container";

export default function Home() {
  const [pokes, setPokes] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(pokes.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentPokes = pokes.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((data) => data);

      setPokes(
        result.results.map((response, index) => {
          return {
            id: index + 1,
            name: response.name,
            url: response.url,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              index + 1
            }.svg`,
          };
        })
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  return (
    <div>
      <Container>
        <Pagination pages={pages} currentPage={setCurrentPage} />
        <PokePorPage items={itensPerPage} itemsPerPage={setItensPerPage} />
      </Container>

      <PokeCard pokes={currentPokes} />
    </div>
  );
}
