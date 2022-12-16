import { makeAutoObservable } from 'mobx';

const PokemonStore = () => makeAutoObservable({
  searchQuery: '',
  handleSearchQueryChange(value: string) {
    this.searchQuery = value
  }
});

export default PokemonStore;