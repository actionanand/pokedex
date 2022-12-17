import { Link, useParams } from 'react-router-dom';

import styles from './PokemonDetails.module.css';

import PokemonListItem from '../PokemonListItem';

const PokemonDetails = () => {
  const { name = '' } = useParams<{ name: string }>();

  return (
    <>
      <Link to="/" className={styles['nav-bar']}>
        &lt; back to Pokedex
      </Link>
      <PokemonListItem name={name} url={''} />
    </>
  );
};

export default PokemonDetails;
