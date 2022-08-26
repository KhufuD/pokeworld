import React from 'react';

import Pokemon from './Pokemon';
// import classes from './PokemonsList.module.css';

const PokemonList = (props) => {
  return (
    <ul>
      {props.pokemon.map((data) => (
        <Pokemon
          name={data.name}

        />
      ))}
    </ul>
  );
};

export default PokemonList;