
"use client"

import { guessPokemon } from "@/service/guess-pokemon";
import { useFormStatus } from "react-dom";


export default function GuessPokemonInput({setPokemonName}: {setPokemonName: (name: string) => void}){
    const { pending } = useFormStatus();

    async function handleGuess(formData: FormData) {
        const name = await guessPokemon(formData);
        setPokemonName(name);
    }

    return(
        <form action={handleGuess}>
            <input type="text" placeholder="Enter Pokemon Name" name="pokemonName" />
            <button type="submit" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
        </form>
    )
}