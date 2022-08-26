import React, { useState } from "react";
import classes from "./Compare.module.css";
import PokemonSearch from "./PokemonSearch";

const Compare = () => {
  const [isShown, setisShown] = useState(false);

  const handleClick = () => {
    setisShown((current) => !current);
  };

  return (
    <div>
      <button onClick={handleClick}>Compare</button>
      {isShown && <PokemonSearch />}
    </div>
  );
};
export default Compare;
