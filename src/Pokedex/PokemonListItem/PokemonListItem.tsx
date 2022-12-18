import styles from './PokemonListItem.module.css';

import { Name } from '../../model/pokemon-species.model';
import { PokemonType } from '../../model/pokemon.model';
import { DetailsFetcher } from '../../Api';

const PokemonListItem = ({ data }: { data: DetailsFetcher | undefined }) => (
  <div className={styles['item-container']}>
    <div>
      <img
        src={`${process.env.REACT_APP_API_POKEMON_IMG_URL}${data?.id}.svg` || data?.sprites.front_default}
        alt={data?.name}
        width="96"
        height="96"
        draggable={false}
      />
    </div>
    <div className={styles['item-content']}>
      <div>
        #{data?.id} <strong> {data?.names.find((name: Name) => name.language.name === 'en')?.name} </strong>
      </div>
      <div>Types: {data?.types.map((el: PokemonType) => el.type.name).join(', ')}</div>
    </div>
  </div>
);

export default PokemonListItem;
