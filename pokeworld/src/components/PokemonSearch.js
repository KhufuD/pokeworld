import React, {useEffect, useState} from "react";
import classes from "./PokemonSearch.module.css";
import axios from "axios";



const Home = () => {
    const [pokemon , setPokemon] = useState("");
    const [pokemonData , setPokemonData] = useState([]);
    const [pokemonType , setPokemonType] = useState("");
    const [pokemonList , setPokemonList] = useState([]);

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

    


    const handleChange = (e) => {
       setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemons();
    };

    useEffect(() => {
      completePokemonList();
    }, []);



    return (
        <div className="App">
 

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

          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="enter pokemon name"
              />
            </label>
          </form>


          {pokemonData.map((pokemon) => {
            return (
              <div className="container" >
                <img src={pokemon.sprites["front_default"]} />
                <div className="pokemon-details">
                  <div className="detail-inner">
                    <div className="field-outer">
                      <div className="field-inner">Name</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemon.name}</div>
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Type</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemonType}</div>
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Id</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemon.id}</div> 
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Height</div>
                      <div className="field-inner">
                        {" "}
                        {Math.round(pokemon.height * 3.9)}"
                      </div>
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Weight</div>
                      <div className="field-inner">
                        {" "}
                        {Math.round(pokemon.weight)} KG
                      </div>
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Number of Battles</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemon.game_indices.length}</div>
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Base Experience</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemon.base_experience}</div>
                    </div>

                    <div className="field-outer">
                      <div className="field-inner">Abilities</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemon.abilities.length}</div> 
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Items Held</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemon.held_items.length}</div> 
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Moves</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemon.moves.length}</div> 
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Order</div>
                      <div className="field-inner" key={pokemon.id.toString()}>{pokemon.order}</div> 
                    </div>

                  
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
};

export default Home;
