import { Metadata } from 'next';
import { FavoritePokemons } from '@/pokemons/';

// metadata
export const metadata: Metadata = {
  title: 'Favorites',
  description: 'favorite pokemons',
};

export default async function FavoritesPage() {


  return (
    <FavoritePokemons />
  );
}
