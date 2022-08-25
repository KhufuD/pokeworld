import React, {useState} from "react";
import classes from "./Home.module.css";
import axios from "axios";


const Home = () => {
    const [pokemon , setPokemon] = useState("pikachu");
    const [pokemonData , setPokemonData] = useState([]);
    const [pokemonType , setPokemonType] = useState("");
    
    const fetchPokemons = async () => {
        const pokeArray = [];
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const result = await axios.get(url);
            pokeArray.push(result.data);
            setPokemonType(result.data.types[0].type.name);
            setPokemonData(pokeArray);
            console.log(result);
        } catch (e) {
            console.log(e);
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
              />
            </label>
          </form>

          {pokemonData.map((pokemon) => {
            return (
              <div className="container">
                <img src={pokemon.sprites["front_default"]} />
                <div className="pokemon-details">
                  <div className="detail-inner">
                    <div className="field-outer">
                      <div className="field-inner">Type</div>
                      <div className="field-inner">{pokemonType}</div>
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
                      <div className="field-inner">{pokemon.game_indices.length}</div>
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Base Experience</div>
                      <div className="field-inner">{pokemon.base_experience}</div>
                    </div>

                    <div className="field-outer">
                      <div className="field-inner">Abilities</div>
                      <div className="field-inner">{pokemon.abilities.length}</div> 
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Items Held</div>
                      <div className="field-inner">{pokemon.held_items.length}</div> 
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Moves</div>
                      <div className="field-inner">{pokemon.moves.length}</div> 
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Order</div>
                      <div className="field-inner">{pokemon.order}</div> 
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
