import { useQuery } from 'react-query';

import { listfetcher } from '../Api';
import PokemonListItem from './PokemonListItem';

const PokemonList = () => {
  const { data, isLoading } = useQuery('pokemon-list', listfetcher(), {
    staleTime: 6_00_000,
  });
  return (
    <>
      {!isLoading &&
        data.results.map((e: any) => (
          <PokemonListItem key={e.name} {...e}></PokemonListItem>
        ))}
    </>
  );
};

export default PokemonList;
