import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useEffect, useState } from "react"



function PokemonPage() {

  const URL = 'http://localhost:3001/pokemon'
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((pokemons) => {
        setPokemons(pokemons);
      });
  }, []);
  function handleAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  function deletePokemon(pokemonId) {
    const newURL = `${URL}/${pokemonId}`;
    const config = { method: "DELETE" };
    fetch(newURL, config)
      .then(r => r.json())
      .then(() => {
        const deletePokemons = pokemons.filter(p => p.id !== pokemonId);
        setPokemons(deletePokemons);
      })
  }

  const pokemonsToDisplay = pokemons.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = {handleAddPokemon}/>
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay} deletePokemon = {deletePokemon}/>
    </Container>
  );
}

export default PokemonPage;
