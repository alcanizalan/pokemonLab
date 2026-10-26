"use server"

export async function guessPokemon(formData: FormData) {
    const pokemonName = formData.get("pokemonName") as string;
    console.log(pokemonName);
    return pokemonName;
}
