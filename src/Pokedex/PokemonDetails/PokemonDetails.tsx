// import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import styles from './PokemonDetails.module.css';

// import { detailFetcher } from '../../Api';
import PokemonListItem from '../PokemonListItem';

const PokemonDetails = () => {
  const { name = '' } = useParams<{ name: string }>();

  // const { data, isLoading } = useQuery(['pokeman-details', name], detailFetcher(name), {
  //   staleTime: 6_00_000,
  // });

  return (
    <>
      <Link to="/" className={styles['nav-bar']}>
        &lt; back to Pokedex
      </Link>
      {/* {!isLoading && <PokemonListItem name={name} />} */}
      <PokemonListItem name={name} url ={''}/>
    </>
  );
};

export default PokemonDetails;
