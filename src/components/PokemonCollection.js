import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, deletePokemon }) {


const pokemonCards = pokemons.map((pokemon) => (
  <PokemonCard
    key = {pokemon.id}
    pokemon = {pokemon}
    deletePokemon = {deletePokemon}
  />
));

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
    
  );
}

export default PokemonCollection;
