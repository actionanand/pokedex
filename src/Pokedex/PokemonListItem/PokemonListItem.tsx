import styles from './PokemonListItem.module.css';

const PokemonListItem = ({ data }: any) => (
  <div className={styles['item-container']}>
    <div>
      <img
        src={`${process.env.REACT_APP_API_POKEMON_IMG_URL}${data.id}.svg` || data.sprites.front_default}
        alt={data.name}
        width="96"
        height="96"
      />
    </div>
    <div className={styles['item-content']}>
      <div>
        #{data.id} <strong> {data.names.find((el: any) => el.language.name === 'en').name} </strong>
      </div>
      <div>Types: {data.types.map((el: any) => el.type.name).join(', ')}</div>
    </div>
  </div>
);

export default PokemonListItem;
