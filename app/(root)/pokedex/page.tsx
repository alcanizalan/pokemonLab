"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './page.module.css'
import PokedexNav from "@/components/shared/pokedex-paginable/pokedex-paginable";

import Image from "next/image";
import { getPokemonList } from "@/service/get-pokemon";

export default  function Pokedex(){
    
    const [pokemonListLimit, setPokemonListLimit] = useState(10);
    const [pokemonListOffset, setPokemonListOffset] = useState(0); 

    const [data, setData] = useState<Awaited<ReturnType<typeof getPokemonList>> | null>(null);

    useEffect(() => {
        getPokemonList(pokemonListLimit, pokemonListOffset).then(setData);
    }, [pokemonListLimit, pokemonListOffset]);

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
                        <Link href={`/pokedex/${pokemon.id}`}>
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={200}
                                height={200}
                                className={styles.pokemonImage}
                                unoptimized
                            />
                            <pre>{pokemon.name}</pre>
                            <div className={styles.pokemonStatsContainer}>
                                {pokemon.stats.map((stat) => {
                                return(
                                    <span key={stat.stat.name}>{stat.stat.name == 'attack' ? 'ATK' : stat.stat.name == 'defense' ? 'DEF' : stat.stat.name == 'hp' ? 'HP' : stat.stat.name == 'special-attack' ? 'SPA' : stat.stat.name == 'special-defense' ? 'SP. DEF' : stat.stat.name == 'speed' ? 'SPE' : stat.stat.name.toUpperCase()}: {stat.base_stat}</span>
                                )
                            })}
                            </div>
                        </Link>
                    </article>
                )
            })}
            </div>

            
        </section>
    )
}