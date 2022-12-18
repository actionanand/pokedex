import { useQuery } from 'react-query';

import { detailFetcher } from '../../Api';
import { NamedAPIResource } from '../../model/pokemon.model';
import PokemonDetailsExtra from './PokemonDetailsExtra/PokemonDetailsExtra';
import PokemonListItem from './PokemonListItem';
import SkeletonListItem from './SkeletonListItem';

const PokemonListItemWrapper = ({ name, url }: NamedAPIResource) => {
  const { data, isLoading } = useQuery(['pokemon-detail', name], detailFetcher(name), { staleTime: 6_00_000 });

  const pokemonDetailJsx = (
    <>
      {url === 'details-page' ? (
        <>
          <PokemonListItem data={data} /> <PokemonDetailsExtra data={data} />
        </>
      ) : (
        <PokemonListItem data={data} />
      )}
    </>
  );

  return <>{!isLoading ? pokemonDetailJsx : <SkeletonListItem />}</>;
};

export default PokemonListItemWrapper;
