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
                  <ul className={classes.detailInner}>
                  <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>name=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.name}</div>
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Type=&gt;</div>
                      <div className={classes.fieldInner}>{props.pokemonType}</div>
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Id=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.id}</div> 
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Height=&gt;</div>
                      <div className={classes.fieldInner}>
                        {" "}
                        {Math.round(pokemon.height * 3.9)}"
                      </div>
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Weight=&gt;</div>
                      <div className={classes.fieldInner}>
                        {" "}
                        {Math.round(pokemon.weight)} KG
                      </div>
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Total Battles=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.game_indices.length}</div>
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Base Experience=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.base_experience}</div>
                    </li>

                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Abilities=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.abilities.length}</div> 
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Items Held=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.held_items.length}</div> 
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Moves=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.moves.length}</div> 
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Order=&gt;</div>
                      <div className={classes.fieldInner}>{pokemon.order}</div> 
                    </li>
                    <li className={classes.fieldOuter}>
                      <div className={classes.fieldInner}>Generations=&gt;</div>
                      <div className={classes.fieldInner}>{Object.keys(pokemon.sprites.versions).length}</div> 
                    </li>
                  
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
    );
};

export default PokemonDetails;