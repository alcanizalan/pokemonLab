export function getPokemonModalPath(formData: FormData): string | null {
    const pokemonName = formData.get('pokemonList');
    if (typeof pokemonName === 'string' && pokemonName.trim() !== '') {
        return `/pokedex/${pokemonName.trim().toLowerCase()}`;
    }
    return null;
}