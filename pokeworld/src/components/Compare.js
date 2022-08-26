import React, { useState } from "react";
import classes from "./Compare.module.css";
import PokemonDetails from "./PokemonDetails";
import PokemonSearch from "./PokemonSearch";

const Compare = () => {
  const [isShown, setisShown] = useState(false);

  const handleClick = () => {
    setisShown((current) => !current);
  };

  return (
    <div className={classes.compareSearchBar}>
      <button onClick={handleClick} className={classes.compareButton}>Compare</button>
      {isShown && <PokemonSearch />}
    </div>
  );
};
export default Compare;
