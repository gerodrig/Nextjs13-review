import { BasicPokemon } from '@/pokemons';
import { PokemonCard } from './PokemonCard';

interface Props {
    pokemons: BasicPokemon[];
};

export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
    {pokemons.map((pokemon) => (
 
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
  )
}
