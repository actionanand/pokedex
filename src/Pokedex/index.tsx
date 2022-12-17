import { observer } from 'mobx-react-lite';

import styles from './Pokodex.module.css';

import { useStore } from '../store';
import PokemonList from './PokemonList';

const Pokodex = () => {
  const { pokemon } = useStore();

  const filterPokemon = (search: any) => {
    if (!pokemon.searchQuery.trim()) {
      return true;
    }

    return new RegExp(pokemon.searchQuery, 'i').test(search.name);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter the name of a pokemon"
        className={styles.input}
        onChange={(el) => pokemon.handleSearchQueryChange(el.target.value)}
      />
      <PokemonList filter={filterPokemon} />
    </>
  );
};

export default observer(Pokodex);
