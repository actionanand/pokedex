import React, { Suspense, lazy } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const PokemonDetails = React.lazy(() => import('./Pokedex/PokemonDetails'));
const PokemonList = lazy(() => import('./Pokedex/PokemonList'));

const LazyPokemonList = () => (
  <>
    <Suspense fallback={<div> Loading Pokemons... </div>}>
      <PokemonList />
    </Suspense>
  </>
);

const LazyPokemonDetails = () => (
  <>
    <Suspense fallback={<div> Please Wait... </div>}>
      <PokemonDetails />
    </Suspense>
  </>
);

const queryClient = new QueryClient();

const App = () => {
  const shouldRedirect = true;
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<LazyPokemonList />} />
        <Route path="details/:name" element={<LazyPokemonDetails />} />
        <Route
          path="*"
          element={shouldRedirect ? <Navigate replace to="/" /> : null}
        />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
