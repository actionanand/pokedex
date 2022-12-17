import { createContext, useContext } from 'react';

import PokemonStore from './PokemonStore';

const store = {
  pokemon: PokemonStore(),
};

export const StoreCtx = createContext(store);

export const useStore = () => useContext(StoreCtx) as typeof store;

export default store;
