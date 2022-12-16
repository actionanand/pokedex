import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  let limit = 100;
  let offset = 0;
  const { data, isLoading } = useQuery(
    'pokemon-list',
    async () => {
      const resp = await fetch(
        `${process.env.REACT_APP_API_URL}pokemon?limit=${limit}&offset=${offset}`,
      );
      return await resp.json();
    },
    {
      staleTime: 6_00_000,
    },
  );
  return (
    <>
      {!isLoading &&
        data.results.map((e: any) => <div key={e.name}>
            <Link to={`details/${e.name}`}> {e.name} </Link>
          </div>)}
    </>
  );
};

export default PokemonList;
