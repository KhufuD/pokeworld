import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonListDisplay from "./PokemonListDisplay";

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
    <PokemonListDisplay pokemonList={pokemonList} />
  )
};

export default PokemonFetchedList;