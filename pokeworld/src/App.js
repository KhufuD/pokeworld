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
  const [offSet , setOffset] = useState(20);
  

 
  const shiftListForward = () => {
    if(offSet < 1140){
      setOffset(offSet + 20);
    
      axios
      .get(`${Url}?offset=${offSet}&limit=20/`)
      .then((response) => {
        setPokemonsList(response.data.results);
      })
      .catch(() => {
        console.log("Something is wrong with the Api please check later");
      });  
    }
    else{
      return;
    }

  }

  
  const toggleSelection = (pokemonName) => {
    setSelectedPokemons((previousSelectedPokemons) => {
      if (previousSelectedPokemons.includes(pokemonName))
        return previousSelectedPokemons.filter((previous) => previous !== pokemonName);
      return previousSelectedPokemons.concat([pokemonName]);
    });
  };



  const shiftListBackward = () => {
    if (offSet > 0){
      setOffset(offSet - 20);

      axios
      .get(`${Url}?offset=${offSet}&limit=20/`)
      .then((response) => {
        setPokemonsList(response.data.results);
      })
      .catch(() => {
        console.log("Something is wrong with the Api please check later");
      });
    }else{
      
      axios
      .get(`${Url}?offset=${offSet}&limit=20/`)
      .then((response) => {
        setPokemonsList(response.data.results);
      })
      .catch(() => {
        console.log("Something is wrong with the Api please check later");
      });

      
    }

    


  }

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
      .get(`${Url}?offset=${0}&limit=20/`)
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
        // selectedLists,
        favoritePokemons,
        toggleFavorite,
        toggleSelection,
      }}
    >
      <PokemonsListContext.Provider value={pokemonsList}>
        <Header />
       <div className={classes.buttonContainer}>
         <button className={classes.prevBtn} onClick={shiftListBackward}>
                Prev
            </button>
            <button className={classes.nextBtn} onClick={shiftListForward}>
            {/* <button className={classes.nextBtn} onClick={Next}> */}
                Next
            </button>
        </div>
        <div className={classes.container}>
          <PokemonListDisplay />
          {selectedPokemons.length > 0 && (
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
