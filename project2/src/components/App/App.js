import styles from './App.module.css'
import Header from '../Header/Header'
import { useEffect, useState } from 'react';
import { fetchPokemonList } from '../../api/pokemon';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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
              {p.name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
