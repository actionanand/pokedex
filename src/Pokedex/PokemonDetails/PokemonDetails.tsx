import { useEffect, ClipboardEvent } from 'react';

import styles from './PokemonDetails.module.css';

import { Link, useParams } from 'react-router-dom';
import PokemonListItem from '../PokemonListItem';

const PokemonDetails = () => {
  const { name = '' } = useParams<{ name: string }>();

  useEffect(() => {
    document.addEventListener('contextmenu', (e: MouseEvent) => {
      e.preventDefault();
    });
  }, []);

  return (
    <div
      onCopy={(e: ClipboardEvent<HTMLDivElement>) => {
        e.clipboardData.setData('text/plain', 'Copying is not allowed here!');
        e.preventDefault();
      }}
    >
      <Link to="/" className={styles['nav-bar']}>
        &lt; Back to Pokedex
      </Link>
      <PokemonListItem name={name} url={'details-page'} />
    </div>
  );
};

export default PokemonDetails;
