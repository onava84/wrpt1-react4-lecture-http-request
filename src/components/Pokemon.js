import React from 'react'

const Pokemon = (props) => {
  return (
    <div className="pokemon">
      {props.pokemon.sprites ? (
        <img src={props.pokemon.sprites?.front_default} alt={props.pokemon.name} />
      ) : null}
      <h2>{props.pokemon.name}</h2>
    </div>
  )
}
export default Pokemon
