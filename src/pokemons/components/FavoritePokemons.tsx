'use client';
import React, { useState } from 'react';
import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';
import { BasicPokemon } from '@/pokemons/';
import { IoHeartOutline } from 'react-icons/io5';
import { useEffect } from 'react';

export const FavoritePokemons = () => {
  const pokemonsState = useAppSelector((state) => state.pokemons.favorites);

  //convert object to array
  const [pokemons, setPokemons] = useState<BasicPokemon[]>(
    Object.values(pokemonsState)
  );

  // useEffect(() => {
  //   setPokemons(Object.values(pokemonsState));
  // } , [pokemonsState]);

  // console.log(pokemons);

  return (
    <div className="flex flex-col">
      <span className="my-2 text-5xl">
        {' '}
        Favorite Pokemons{' '}
        <small className="text-yellow-700">Global State</small>
      </span>
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </div>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span className="text-2xl">No Favorites</span>
    </div>
  );
};
