import { createContext } from "react";

const AppContext = createContext({
  favoritePokemons: [],
  selectedPokemons: [],
  toggleFavorite: (name) => {},
  toggleSelection: (name) => {},
});

export default AppContext;
