import { useQuery } from 'react-query';

import { detailFetcher } from '../../Api';
import { NamedAPIResource } from '../../model/pokemon.model';
import PokemonListItem from './PokemonListItem';
import SkeletonListItem from './SkeletonListItem';

const PokemonListItemWrapper = ({ name }: NamedAPIResource) => {
  const { data, isLoading } = useQuery(['pokemon-detail', name], detailFetcher(name), { staleTime: 6_00_000 });
  return <>{!isLoading ? <PokemonListItem data={data} /> : <SkeletonListItem />}</>;
};

export default PokemonListItemWrapper;
