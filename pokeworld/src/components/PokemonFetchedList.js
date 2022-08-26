import React, {useEffect, useState} from "react";
import classes from "./PokemonList.module.css";
import axios from "axios";

const PokemonFetchedList = () => {
  const [pokemonList , setPokemonList] = useState([]);

  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const completePokemonList = async () => {
    const pokeList = [];
    try{
      const fullList = await axios.get(`${url}`);
      pokeList.push(fullList.data);
      setPokemonList(pokeList);

    } catch (e){
      console.log("messed up");
    }
  };

  useEffect(() => {
    completePokemonList();
  }, []);


    return(
        <div>{pokemonList.map((list) => {
            return (
              <div className={classes.container}> 
              <h2>List of all the Available Pokemons is down Below</h2>
                <div className={classes.listContainer}>{list.results.map((listName) => {
                return(
                  <div>
                    <div className={classes.pokemonList} >
                    {listName.name}
                  </div>
                  </div>
                );
              })}</div>
              </div>
            );
          })}
          </div>
    );
};

export default PokemonFetchedList;