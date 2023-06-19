import { BasicPokemon, PokemonGrid, PokemonsResponse } from '@/pokemons/';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'First Gen Pokemons',
  description: 'pokemons page',
  }

const getPokemons = async (limit = 20, offset = 0): Promise<BasicPokemon[]> => {
  try {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const pokemonsResponse: PokemonsResponse = await data.json();

    const pokemons = pokemonsResponse.results.map((pokemon) => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));

    return pokemons;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);

  return (
    <div className="flex flex-col">
      <span className="my-2 text-5xl">
        {' '}
        Pokemons List <small className='text-blue-500'>Static</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
