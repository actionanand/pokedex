import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { detailFetcher } from '../Api';

const PokemonDetails = () => {
  const { name = '' } = useParams<{ name: string }>();

  const { data, isLoading } = useQuery(
    ['pokeman-details', name],
    detailFetcher(name),
    {
      staleTime: 6_00_000,
    },
  );
  return <> {!isLoading && JSON.stringify(data)} </>;
};

export default PokemonDetails;
