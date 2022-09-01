import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import { Url } from "../utilities/Url";
import classes from "./PokemonCard.module.css";

const PokemonCard = ({ pokemonName }) => {
  const { toggleFavorite, favoritePokemons } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`${Url}${pokemonName}`)
      .then((response) => {
        setPokemon(response.data);
        setIsLoading(false);
      })
      .catch(() => {});
  }, [pokemonName]);

  if (isLoading || !pokemon) return <></>;



  return (
    <div className={classes.container}>
      <img
        src={pokemon.sprites.front_default}
        alt="pokemon image"
        className={classes.avatar}

      />
      <div className={classes.details}>
        <div className={classes.item}>
          <label className={classes.label}>name</label>
          <div className={classes.body}>{pokemon.name}</div>
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Abilities</label>
          <ul className={classes.abilities}>
            {pokemon["abilities"].map(({ ability: { name } }) => (
              <li className={classes.ability} key={name}>{name.replaceAll("-", " ")}</li>
            ))}
          </ul>
        </div>
        <div className={classes.item}>
          <label className={classes.label}>battles</label>
          <div className={classes.body}>{pokemon.game_indices.length}</div>
        </div>

          <button className={classes.favBtn} onClick={() => toggleFavorite(pokemonName)}>
            {favoritePokemons.includes(pokemonName)
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
      </div>
   
  );
};

export default PokemonCard;
