import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BasicPokemon } from '../../pokemons/interfaces/basic-pokemon';

interface FavoritePokemonsState {
    favorites: {[key: string]: BasicPokemon}
}

const getInitialState = (): FavoritePokemonsState => {

  if(typeof window === 'undefined') return { favorites: {} };
  const favoritePokemons = localStorage.getItem('favoritePokemons') ?? '{}';
  
  return JSON.parse(favoritePokemons);
}

const initialState: FavoritePokemonsState = {
  favorites: {},
    // '1': { id: '1', name: 'bulbasaur' },
    // '25': {id: '25', name: 'pikachu' },
    // '150': {id: '150', name: 'mewtwo' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{[key: string]: BasicPokemon}>) {
      state.favorites = action.payload;
    },


    toggleFavoritePokemon(state, action: PayloadAction<BasicPokemon>) {
      const pokemon = state.favorites[action.payload.id]
      if (pokemon) {
        delete state.favorites[action.payload.id]
      } else {
        state.favorites[action.payload.id] = action.payload
      }

      //! This is not allowed as accesing local storage is a side effect and reducers should be pure functions
      localStorage.setItem('favoritePokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavoritePokemon, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer