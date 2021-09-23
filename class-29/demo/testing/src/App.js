import axios from 'axios';
import {useState} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);

  async function fetchPokemon() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    let data = response.data.results || [];
    console.log('We Got ...', data);
    setPokemon( data );
  }

  return (
    <div className="App">

      <button data-testid="getpokemon" onClick={fetchPokemon}>Get'm</button>

      <ul>
        {pokemon.map( (creature) =>
         <li key={creature.name}>{creature.name}</li>
        )}
      </ul>
    </div>


  );
}

export default App;
