import "./App.css";
import Compare from "./components/Compare";
import PokemonFetchedList from "./components/PokemonFetchedList";
import PokemonSearch from "./components/PokemonSearch";


function App() {
  return (
    <>
    <PokemonFetchedList/>
    <div className="home-searchbar">
    <PokemonSearch />
    <Compare/>
    </div>
    </>
  );
}

export default App;
