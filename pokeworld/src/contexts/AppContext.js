import { createContext } from "react";

const AppContext = createContext({
  favoritePokemons: [],
  selectedPokemons: [],
  selectedLists: [],
  toggleFavorite: (name) => {},
  toggleSelection: (name) => {},
  toggleList: (list) => {},
});

export default AppContext;
