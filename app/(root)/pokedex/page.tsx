"use client"
import { useEffect, useState } from "react";
import styles from './page.module.css'
import PokedexNav from "@/components/pokedex-nav/pokedex-nav";

import Image from "next/image";
import { useGetPokemon } from "@/hooks/useGetPokemon";

export default function Pokedex(){
    
    const [pokemonListLimit, setPokemonListLimit] = useState(10);
    const [pokemonListOffset, setPokemonListOffset] = useState(0);

    const { data } = useGetPokemon({pokemonListLimit, pokemonListOffset});

    console.log(data)

    return(
        <section className={styles.pokedexContainer}>
        <PokedexNav pokemonListLimit={pokemonListLimit} setPokemonListLimit={setPokemonListLimit} 
            pokemonListOffset={pokemonListOffset} setPokemonListOffset={setPokemonListOffset}
            />
            <div className={styles.pokemonListContainer}>
                {data && data.map((pokemon, index) => {
                return (
                    <article key={index} className={styles.pokemonContainer}>
                        <Image
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            width={200}
                            height={200}
                            className={styles.pokemonImage}
                            unoptimized
                        />
                        <pre>{pokemon.name}</pre>
                    </article>
                )
            })}
            </div>

            
        </section>
    )
}