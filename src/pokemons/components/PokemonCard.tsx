'use client';
import Link from 'next/link';
import Image from 'next/image';

import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useAppSelector, useAppDispatch } from '@/store';
import { toggleFavoritePokemon } from '@/store/pokemons/pokemonsSlice';

import { BasicPokemon } from '@/pokemons';

interface Props {
  pokemon: BasicPokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavoritePokemon(pokemon));
  };

  //console.log(isFavorite);
  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-lg">
        <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 border-b">
          (
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={100}
            height={100}
            alt={name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">
            {name}
          </p>
          {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="px-4 py-2 text-xs font-semibold text-gray-100 border rounded-full"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={() => handleFavorite()}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            <div className="text-red-600">
              {isFavorite ? (<IoHeart />) : (<IoHeartOutline />)}
            </div>

            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
               {isFavorite ? 'Favorite' : 'Not Favorite'}
              </p>
              <p className="text-xs text-gray-500"> {isFavorite ? 'Remove from favorites' : 'Add to favorites'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
