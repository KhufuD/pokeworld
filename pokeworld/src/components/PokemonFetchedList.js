import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonListDisplay from "./PokemonListDisplay";
import {Url} from "../utilities/Url";

const PokemonFetchedList = () => {
  const [pokemonList , setPokemonList] = useState([]);

  
  const completePokemonList = async () => {
    const pokeList = [];
    try{
      const fullList = await axios.get(`${Url}`);
      pokeList.push(fullList.data);
      setPokemonList(pokeList);

    } catch (e){
      console.log("Something is wrong with the Api please check later");
    }
  };


  useEffect(() => {
    completePokemonList();
  }, []);

  return(
    <div >
    <PokemonListDisplay   pokemonList={pokemonList} />
    </div>
  )
};

export default PokemonFetchedList;