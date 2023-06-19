import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export const localStorageMiddleware =
  (state: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
   
    next(action);

    if(action.type.includes('pokemons/toggleFavoritePokemon')) {
      const favoritePokemons = state.getState().pokemons;
      localStorage.setItem('favoritePokemons', JSON.stringify(favoritePokemons));
      return;
    }
  };
