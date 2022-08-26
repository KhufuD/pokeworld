import React from "react";
import classes from "./PokemonDetails.module.css";

const PokemonDetails = (props) => {
    return (
        <div>
            {props.pokemonData.map((pokemon) => {
            return (
              <div className={classes.detailContainer} >
                <img src={pokemon.sprites["front_default"]} className={classes.pokemonImg}/>
                <div className={classes.pokemonDetails}>
                  <div className={classes.detailInner}>
                  <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>name=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.name}</div>
                    </div>
                    {/* <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Type</div>
                      <div className={classes.fieldInner}>{props.pokemonType}</div>
                    </div> */}
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Id=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.id}</div> 
                    </div>
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Height=&gt;</div>
                      <div className={classes.fieldInner}>
                        {" "}
                        {Math.round(pokemon.height * 3.9)}"
                      </div>
                    </div>
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Weight=&gt;</div>
                      <div className={classes.fieldInner}>
                        {" "}
                        {Math.round(pokemon.weight)} KG
                      </div>
                    </div>
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Total Battles=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.game_indices.length}</div>
                    </div>
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Base Experience=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.base_experience}</div>
                    </div>

                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Abilities=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.abilities.length}</div> 
                    </div>
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Items Held=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.held_items.length}</div> 
                    </div>
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Moves=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.moves.length}</div> 
                    </div>
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Order=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.order}</div> 
                    </div>
                    <div className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Generations=&gt;</div>
                      <div className={classes.fieldInner}>{Object.keys(pokemon.sprites.versions).length}</div> 
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