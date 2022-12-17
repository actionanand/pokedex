import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { observer } from 'mobx-react-lite';

import styles from './Pokodex.module.css';

import { listfetcher } from '../Api';
import PokemonListItem from './PokemonListItem';
import { useStore } from '../store';

const PokemonList = ({ filter }: any) => {
  const { pokemon } = useStore();

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery('pokemon-list', listfetcher(), {
    staleTime: 6_00_000,
    getNextPageParam: (lastPage) => {
      if (lastPage.next !== null) {
        return lastPage.page + 1;
      }
    },
  });

  const handlePokemonClick = () => pokemon.handleScrollPositionChange(window.scrollY);

  useEffect(() => {
    window.scrollTo(0, pokemon.scrollPositionY);
  }, [pokemon]);

  return (
    <>
      {!isLoading &&
        data?.pages.map((page) =>
          page.results.filter(filter).map((e: any) => (
            <Link to={`details/${e.name}`} className={styles['pokemon-link']} key={e.name} onClick={handlePokemonClick}>
              <PokemonListItem key={e.name} {...e}></PokemonListItem>
            </Link>
          )),
        )}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} className={styles['fetch-more-btn']}>
          Fetch Next Page
        </button>
      )}
    </>
  );
};

export default observer(PokemonList);
