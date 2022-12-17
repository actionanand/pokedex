import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import styles from './Pokodex.module.css';

import { listfetcher } from '../Api';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({ filter }: any) => {
  const { data, isLoading } = useQuery('pokemon-list', listfetcher(), {
    staleTime: 6_00_000,
  });
  return (
    <>
      {!isLoading &&
        data.results.filter(filter).map((e: any) => (
          <Link to={`details/${e.name}`} className={styles['pokemon-link']}>
            <PokemonListItem key={e.name} {...e}></PokemonListItem>
          </Link>
        ))}
    </>
  );
};

export default observer(PokemonList);
