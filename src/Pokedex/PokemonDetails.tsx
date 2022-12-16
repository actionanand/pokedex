import { useQuery } from 'react-query';

const PokemonDetails = ({ name }: { name: string }) => {
  const { data, isLoading } = useQuery(
    ['pokeman-details', name],
    async () => {
      const resp = await fetch(
        `${process.env.REACT_APP_API_URL}pokemon/${name}`,
      );
      return await resp.json();
    },
    {
      staleTime: 6_00_000,
    },
  );
  return <> {!isLoading && JSON.stringify(data)} </>;
};

export default PokemonDetails;
