import { useQuery } from 'react-query';

import PokemonListItem from './PokemonListItem';
import SkeletonListItem from './SkeletonListItem';

const PokemonListItemWrapper = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  const { data, isLoading } = useQuery(
    ['pokemon-detail', name],
    async () => {
      const resp = await fetch(url);
      return await resp.json();
    },
    {
      staleTime: 6_00_000,
    },
  );
  return (
    <>{!isLoading ? <PokemonListItem data={data} /> : <SkeletonListItem />}</>
  );
};

export default PokemonListItemWrapper;
