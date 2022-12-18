import styles from './PokemonDetailsExtra.module.css';
import { FlavorText, Genus } from '../../../model/pokemon-species.model';

import { DetailsFetcher } from '../../../Api';
import { PokemonAbility } from '../../../model/pokemon.model';

const PokemonDetailsExtra = ({ data }: { data: DetailsFetcher | undefined }) => {
  return (
    <>
      <div> Flavor Text: {data?.flavor_text.find((text: FlavorText) => text.language.name === 'en')?.flavor_text}</div>
      <div> Genus: {data?.genera.find((genus: Genus) => genus.language.name === 'en')?.genus} </div>
      <div> Habitat: {data?.habitat.name} </div>
      <div> Shape: {data?.shape.name} </div>
      <div> Abilities: {data?.abilities.map((el: PokemonAbility) => el.ability.name).join(', ')} </div>
    </>
  );
};

export default PokemonDetailsExtra;
