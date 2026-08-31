"use client"
import Image from "next/image";
import { useGetRandomPokemon } from "@/hooks/useGetPokemon";
import { useState } from "react";

import styles from './page.module.css'

export default function WhosThatPokemon(){

    const [pokemonName, setPokemonName] = useState<string | null>(null);

    const { data } = useGetRandomPokemon();

    return(
        <section className={styles.section}>
            <div className={styles.whosThatPokemonContainer}>
                <h1>Who's that Pokemon?</h1>
                {data && <Image src={data.sprites.front_default } alt={data.name || "Pokemon"} width={200} height={200} />}

                <form>
                    <input type="text" placeholder="Enter Pokemon Name" value={pokemonName || ""} onChange={(e) => setPokemonName(e.target.value)} />
                    <button onClick={(e) => {
                        e.preventDefault();
                        setPokemonName(pokemonName);
                    }}>Submit</button>
                </form>
            </div>
        </section>
    )
}