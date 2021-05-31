import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from "react"

function PokemonCard({ pokemon, deletePokemon }) {
  const [showFront, setShowFront] = useState(true);

  const { name, hp, sprites } = pokemon,
  { front, back } = sprites

  function handleClick() {
    setShowFront((showFront) => !showFront);
  }

  function handleDeletePokemon() {
    deletePokemon(pokemon.id)
  }

  return (
    <Card>
      <div onClick = {handleClick}>
        <div className="image">
          <img alt = {name} src = {showFront ? front : back }/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
        <button onClick = {handleDeletePokemon}>Delete</button>
    </Card>
  );
}

export default PokemonCard;
