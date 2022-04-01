import styles from './App.module.css'
import Header from '../Header/Header'
import { useEffect, useState } from 'react';
import { fetchPokemonList } from '../../api/pokemon';
import { PokemonCard } from '../PokemonCard/PokemonCard';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  console.log("pokemon: ", selectedPokemon);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemonList().then((results) => {
      setPokemonList(results);
    }).catch((e) => {
      setError(e.toString())
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        {isLoading && <div>Loading...</div>}
        {error && <div>error</div>}
        <ul className={styles.pokemonList}>
          {pokemonList.map((p, i) => (
            <li key={i}>
              <PokemonCard pokemon={p} onSelect={setSelectedPokemon} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
