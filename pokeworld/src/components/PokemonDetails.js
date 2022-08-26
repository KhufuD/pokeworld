import React from "react";
import classes from "./PokemonDetails.module.css";

const PokemonDetails = (props) => {
    return (
        <div>
            {props.pokemonData.map((pokemon) => {
            return (
              <div className="container" >
                <img src={pokemon.sprites["front_default"]} />
                <div className="pokemon-details">
                  <div className="detail-inner">
                  <div className="field-outer">
                      <div className="field-inner">name</div>
                      <div className="field-inner">{pokemon.name}</div>
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Type</div>
                      <div className="field-inner">{props.pokemonType}</div>
                    </div>
                    <div className="field-outer">
                      <div className="field-inner">Id</div>
                      <div className="field-inner">{pokemon.id}</div> 
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
                    <div className="field-outer">
                      <div className="field-inner">Total number of generations</div>
                      <div className="field-inner">{Object.keys(pokemon.sprites.versions).length}</div> 
                    </div>
                  
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    );
};

export default PokemonDetails;