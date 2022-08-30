import React, {useEffect, useState} from "react";
import classes from "./PokemonSearch.module.css";
import axios from "axios";
import {Url} from "../utilities/Url";

import PokemonDetails from "./PokemonDetails";



const PokemonSearch = () => {
    const [pokemon , setPokemon] = useState("");
    const [pokemonData , setPokemonData] = useState([]);
    const [pokemonType , setPokemonType] = useState("");
    const [error , setError] = useState(null);


    
    const fetchPokemons = async () => {
      setError(null);
        const pokeArray = [];
        try{
            const result = await axios.get(`${Url}${pokemon}`);

            pokeArray.push(result.data);
            setPokemonType(result.data.types[0].type.name);
            setPokemonData(pokeArray);   
        } catch (error) {
          setError("Pokemon must be from the List provided above");
        }
    };
    

    const handleChange = (e) => {
       setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemons();
        
    };




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
          {!error && <PokemonDetails pokemonData={pokemonData} pokemonType={pokemonType}/>}
          {error && <p>{error}</p>}
    
        </div>
      );
};

export default PokemonSearch;
