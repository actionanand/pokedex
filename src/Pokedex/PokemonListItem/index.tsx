import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import styles from './PokemonListItem.module.css';

import { detailFetcher } from '../../Api';
import { NamedAPIResource } from '../../model/pokemon.model';
import PokemonDetailsExtra from './PokemonDetailsExtra/PokemonDetailsExtra';
import PokemonListItem from './PokemonListItem';
import SkeletonListItem from './SkeletonListItem';

const PokemonListItemWrapper = ({ name, url }: NamedAPIResource) => {
  const { data, isLoading, isError } = useQuery(['pokemon-detail', name], detailFetcher(name), { staleTime: 6_00_000 });

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

  if (isError) {
    return (
      <div className={styles['error']}>
        <h1> Oops, An error occurred! </h1>
        <div>There is no pokemon by the name or Id - <span> {name} </span>. </div>
        <div> Please go to <Link to="/"> safety</Link>. </div>
      </div>
    );
  }

  return <>{!isLoading ? pokemonDetailJsx : <SkeletonListItem />}</>;
};

export default PokemonListItemWrapper;
