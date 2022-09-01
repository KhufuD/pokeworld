import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import PokemonsListContext from "../contexts/PokemonListContext";
import classes from "./PokemonListDisplay.module.css";

const PokemonListDisplay = () => {
  const {
    toggleSelection,
    selectedPokemons,
    favoritePokemons,
    toggleFavorite,
  } = useContext(AppContext);
  const pokemonList = useContext(PokemonsListContext);

  
  const [search, setSearch] = useState("");
  
  const handleChange =()=> {
    return console.log("the pokemon has been unchecked");
  }

  return (
    <div className={classes.container}>
      <h2>List of all the Available Pokemons is down Below</h2>
      <input
        value={search}
        className={classes.searchInput}
        placeholder="Search for pokemons"
        onChange={(event) => setSearch(event.target.value)}
      />
      
      <div className={classes.listContainer}>
        {pokemonList
          .map((item) => item.name)
          .sort()
          .filter((pokemonName) =>
            pokemonName.toLowerCase().includes(search.toLowerCase())
          )
          .map((pokemonName) => {
            return (
              <div
                key={pokemonName}
                className={
                  selectedPokemons.includes(pokemonName)
                    ? [classes.pokemonList, classes.selected].join(" ")
                    : [classes.pokemonList]
                }
                onClick={() => {
                  toggleSelection(pokemonName);
                }}
              >
                <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={selectedPokemons.includes(pokemonName)}
                />
                {pokemonName}
                <font
                  style={{
                    color: favoritePokemons.includes(pokemonName)
                      ? "red"
                      : "#ddd",
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleFavorite(pokemonName);
                  }}
                >
                  &#x2764;
                </font>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PokemonListDisplay;
