import React, { Suspense, lazy } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const PokemonDetails = React.lazy(() => import('./Pokedex/PokemonDetails/PokemonDetails'));
const Pokedex = lazy(() => import('./Pokedex'));

const LazyPokedex = () => (
  <>
    <Suspense fallback={<div> Loading Pokemons... </div>}>
      <Pokedex />
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
        <Route path="/" element={<LazyPokedex />} />
        <Route path="details/:name" element={<LazyPokemonDetails />} />
        <Route path="*" element={shouldRedirect ? <Navigate replace to="/" /> : null} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
