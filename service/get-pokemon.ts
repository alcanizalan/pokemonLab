// services/pokemon.ts (Código que corre solo en el Servidor)
import { PokemonDetail, PokemonUrl } from "@/types/pokemonType";

export async function getPokemonList(limit: number, offset: number): Promise<PokemonDetail[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await res.json();

  // Resolvemos todas las promesas en paralelo en el servidor
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: PokemonUrl) => {
      const detailRes = await fetch(pokemon.url);
      return detailRes.json();
    })
  );

  return pokemonDetails;
}

export async function getRandomPokemon(): Promise<PokemonDetail> {
  const randomId = Math.floor(Math.random() * 1025) + 1;
  // { cache: 'no-store' } para que siempre traiga uno nuevo
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`, { cache: 'no-store' });
  return res.json();
}

export async function getPokemonByIdOrName(idOrName: string | number): Promise<PokemonDetail> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
  return res.json();
}

