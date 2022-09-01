import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonListDisplay from "./components/PokemonListDisplay";
import AppContext from "./contexts/AppContext";
import PokemonsListContext from "./contexts/PokemonListContext";
import { Url } from "./utilities/Url";

import PokemonCard from "./components/PokemonCard";

import classes from "./App.module.css";

function App() {
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [pokemonsList, setPokemonsList] = useState([]);

  const toggleSelection = (pokemonName) => {
    setSelectedPokemons((previousSelectedPokemons) => {
      if (previousSelectedPokemons.includes(pokemonName))
        return previousSelectedPokemons.filter((previous) => previous !== pokemonName);
      return previousSelectedPokemons.concat([pokemonName]);
    });
  };

  const toggleFavorite = (pokemonName) => {
    setFavoritePokemons((previousFavoritePokemons) => {
      let result = previousFavoritePokemons;
      if (previousFavoritePokemons.includes(pokemonName))
        result = previousFavoritePokemons.filter((previous) => previous !== pokemonName);
      else result = previousFavoritePokemons.concat([pokemonName]);

      localStorage.setItem("favoritePokemons", JSON.stringify(result));

      return result;
    });
  };

  useEffect(() => {
    axios
      .get(Url)
      .then((response) => {
        setPokemonsList(response.data.results);
      })
      .catch(() => {
        console.log("Something is wrong with the Api please check later");
      });
  }, []);

  useEffect(() => {
    const lsFavoritePokemons = localStorage.getItem("favoritePokemons");
    if (!lsFavoritePokemons) return;
    setFavoritePokemons(JSON.parse(lsFavoritePokemons));
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedPokemons,
        favoritePokemons,
        toggleFavorite,
        toggleSelection,
      }}
    >
      <PokemonsListContext.Provider value={pokemonsList}>
        <Header />
        <div className={classes.container}>
          <PokemonListDisplay />
          {!!selectedPokemons.length && (
            <div className={classes.pokemonCards}>
              {selectedPokemons.map((selectedPokemon) => (
                <PokemonCard pokemonName={selectedPokemon} key={selectedPokemon}/>
              ))}
            </div>
          )}
        </div>
      </PokemonsListContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
