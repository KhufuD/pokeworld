import React from "react";
import classes from "./PokemonListDisplay.module.css";

const PokemonListDisplay = (props) => {

    return(
        <div>{props.pokemonList.map((list) => {
            return (
              <div  className={classes.container} key={list.results.keys()}> 
              <h2>List of all the Available Pokemons is down Below</h2>
                <div  className={classes.listContainer}>{list.results.map((listName) => {
                return(
                  <ul className={classes.pokeListContainer} key={listName.url}>
                    <li  className={classes.pokemonList} >
                    {listName.name}
                  </li>
                  </ul>
                );
              })}</div>
              </div>
            );
          })}
          </div>
    );
}

export default PokemonListDisplay;