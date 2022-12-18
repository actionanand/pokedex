import styles from './PokemonDetailsExtra.module.css';

import { FlavorText, Genus } from '../../../model/pokemon-species.model';
import { DetailsFetcher } from '../../../Api';
import { PokemonAbility } from '../../../model/pokemon.model';
import { heightUnit, weightUnit } from '../../../utils/pokemon';

const PokemonDetailsExtra = ({ data }: { data: DetailsFetcher | undefined }) => {
  return (
    <>
      <div> Flavor Text: {data?.flavor_text.find((text: FlavorText) => text.language.name === 'en')?.flavor_text}</div>
      <div> Genus: {data?.genera.find((genus: Genus) => genus.language.name === 'en')?.genus} </div>
      <div> {data?.habitat && `Habitat: ${data?.habitat.name}`} </div>
      <div> {data?.shape && `Shape: ${data?.shape.name}`} </div>
      <div> Abilities: {data?.abilities.map((el: PokemonAbility) => el.ability.name).join(', ')} </div>
      <div> {data?.base_experience && `Experience: ${data?.base_experience}`} </div>
      <div> Height: {heightUnit(data?.height)} </div>
      <div> Weight: {weightUnit(data?.weight)} </div>
    </>
  );
};

export default PokemonDetailsExtra;
