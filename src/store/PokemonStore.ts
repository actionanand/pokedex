import { makeAutoObservable } from 'mobx';

const PokemonStore = () =>
  makeAutoObservable({
    searchQuery: '',
    scrollPositionY: 0,
    handleSearchQueryChange(value: string) {
      this.searchQuery = value;
    },
    handleScrollPositionChange(value: number) {
      this.scrollPositionY = value;
    },
  });

export default PokemonStore;
