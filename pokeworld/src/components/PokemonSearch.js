import React, {useEffect, useState} from "react";
import classes from "./PokemonSearch.module.css";
import axios from "axios";
import PokemonFetchedList from "./PokemonFetchedList";
import PokemonDetails from "./PokemonDetails";



const PokemonSearch = () => {
    const [pokemon , setPokemon] = useState("");
    const [pokemonData , setPokemonData] = useState([]);
    const [pokemonType , setPokemonType] = useState("");
    // const [pokemonList , setPokemonList] = useState([]);

    const url = `https://pokeapi.co/api/v2/pokemon/`;
    
    const fetchPokemons = async () => {
        const pokeArray = [];
        try{
            const result = await axios.get(`${url}${pokemon}`);
            pokeArray.push(result.data);
            setPokemonType(result.data.types[0].type.name);
            setPokemonData(pokeArray);   
        } catch (e) {
            console.log(e);
        }
    };

    // const completePokemonList = async () => {
    //   const pokeList = [];
    //   try{
    //     const fullList = await axios.get(`${url}`);
    //     pokeList.push(fullList.data);
    //     setPokemonList(pokeList);

    //   } catch (e){
    //     console.log("messed up");
    //   }
    // };

    


    const handleChange = (e) => {
       setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemons();
    };

    // useEffect(() => {
    //   completePokemonList();
    // }, []);



    return (
        <div className="App">

          
          

          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="enter pokemon name"
                className={classes.formInput}
              />
            </label>
          </form>
          <PokemonDetails pokemonData={pokemonData} />

    
        </div>
      );
};

export default PokemonSearch;
