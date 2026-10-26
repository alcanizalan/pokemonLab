"use client"
import Image from "next/image";
import { getRandomPokemon } from "@/service/get-pokemon";
import { useState, useEffect } from "react";

import styles from './page.module.css'
import GuessPokemonInput from "@/components/ui/guess-pokemon-input/guess-pokemon-input";
import { PokemonDetail } from "@/types/pokemonType";

export default function WhosThatPokemon(){

    const [pokemonName, setPokemonName] = useState<string | null>(null);

    const [data, setData] = useState<Awaited<ReturnType<typeof getRandomPokemon>> | null>(null);


    const refetch = async () => {
        const pokemon: PokemonDetail = await getRandomPokemon();
        setData(pokemon);
    };

    useEffect(() => {
        refetch();
    }, []);

    console.log(data?.name)

    useEffect(() => {
        if(pokemonName?.toLowerCase() === data?.name.toLowerCase()){
            console.log("Correct!");
            refetch();
        } else {
            console.log("Incorrect!");
        }
    }, [pokemonName]);



    return(
        <section className={styles.section}>
            <div className={styles.whosThatPokemonContainer}>
                <h1>Who's that Pokemon?</h1>
                {data && <Image src={data.sprites.front_default } alt={data.name || "Pokemon"} width={200} height={200} />}

                <GuessPokemonInput
                    setPokemonName={setPokemonName}
                />
            </div>
        </section>
    )
}