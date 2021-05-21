import { useState } from 'react';
import PokemonInfo from './components/PokemonInfo';
import PokemonList from './components/PokemonList';
import { IPokemon } from './Interface/Interfaces';


function App() {
  const [mainPokemon, setMainPokemon] = useState<IPokemon | null>(null)
  
  return (
    <div className="App">
      <PokemonList setMainPokemon={setMainPokemon}/>

    </div>
  );
}

export default App;
