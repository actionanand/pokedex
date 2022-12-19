import styles from './PokemonDetailsExtra.module.css';

import { FlavorText, Genus } from '../../../model/pokemon-species.model';
import { DetailsFetcher } from '../../../Api';
import { PokemonAbility } from '../../../model/pokemon.model';
import { heightUnit, weightUnit } from '../../../utils/pokemon';

const PokemonDetailsExtra = ({ data }: { data: DetailsFetcher | undefined }) => {
  const notFoundJsx = <> Not available</>;

  return (
    <div className={styles['style-card']}>
      <h2 className={styles['style-card-title']}> Detail Report </h2>
      <div className={styles['style-card-favor-text']}>
        {data?.flavor_text.find((text: FlavorText) => text.language.name === 'en')?.flavor_text}
      </div>
      <div>
        <strong> Genus: </strong>
        {data?.genera.find((genus: Genus) => genus.language.name === 'en')?.genus}
      </div>
      <div>
        <strong>Habitat: </strong>
        {data?.habitat ? <>{data?.habitat.name}</> : notFoundJsx}
      </div>
      <div>
        <strong>Shape: </strong>
        {data?.shape ? <>{data?.shape.name}</> : notFoundJsx}
      </div>
      <div>
        <strong>Abilities: </strong>
        {data?.abilities.map((el: PokemonAbility) => el.ability.name).join(', ')}
      </div>
      <div>
        <strong>Experience: </strong>
        {data?.base_experience ? <>{data?.base_experience}</> : notFoundJsx}
      </div>
      <div>
        <strong> Height: </strong>
        {heightUnit(data?.height)}
      </div>
      <div>
        <strong> Weight: </strong>
        {weightUnit(data?.weight)}
      </div>
    </div>
  );
};

export default PokemonDetailsExtra;
