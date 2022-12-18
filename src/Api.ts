import { FlavorText, Genus, Name, PokemonSpecies } from './model/pokemon-species.model';
import { NamedAPIResource, Pokemon, PokemonList } from './model/pokemon.model';

export interface DetailsFetcher extends Pokemon {
  names: Name[];
  flavor_text: FlavorText[];
  habitat: NamedAPIResource;
  genera: Genus[];
  shape: NamedAPIResource;
}

export interface ListFetcher extends PokemonList {
  page: number;
}

export const detailFetcher = (name: string) => async () => {
  const detailsResp = await fetch(`${process.env.REACT_APP_API_URL}pokemon/${name}`);
  const details: Pokemon = await detailsResp.json();

  const speciesResp = await fetch(details.species.url);
  const species: PokemonSpecies = await speciesResp.json();

  return {
    ...details,
    names: species.names,
    flavor_text: species.flavor_text_entries,
    genera: species.genera,
    habitat: species.habitat,
    shape: species.shape,
  };
};

export const listfetcher =
  () =>
  async ({ pageParam = 0 }) => {
    let limit = 100;
    // let offset = 0;

    const listResp = await fetch(`${process.env.REACT_APP_API_URL}pokemon?limit=${limit}&offset=${pageParam * 100}`);
    const respJson: PokemonList = await listResp.json();
    return { ...respJson, page: pageParam };
  };
