import "./App.css";
import Compare from "./components/Compare";
import Header from "./components/Header";
import PokemonFetchedList from "./components/PokemonFetchedList";
import PokemonSearch from "./components/PokemonSearch";


function App() {
  return (
    <>
    <Header/>
    <PokemonFetchedList/>
    <div className="home-searchbar">
    <PokemonSearch />
    <Compare/>
    </div>
    </>
  );
}

export default App;
