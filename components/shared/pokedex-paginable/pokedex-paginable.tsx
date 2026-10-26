import {useState} from 'react'
import { useRouter } from 'next/navigation'

import styles from './pokedex-paginable.module.css'
import { getPokemonModalPath } from '@/utils/view-pokemon-modal';

export default function PokedexNav({pokemonListLimit, setPokemonListLimit, pokemonListOffset, setPokemonListOffset}: {pokemonListLimit: number, setPokemonListLimit: (limit: number) => void, pokemonListOffset: number, setPokemonListOffset: (offset: number) => void}){

    const router = useRouter();

    const goToPokemon = (formData: FormData) => {
        const path = getPokemonModalPath(formData);
        if (path) router.push(path);
    };


    return (
        <div className={styles.pokedexNavContainer}>
            <nav className={styles.pageNav}>
                {pokemonListOffset>=pokemonListLimit && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset - pokemonListLimit)}>&lt;</button>}
                {pokemonListOffset>=pokemonListLimit*2 && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset - pokemonListLimit*2)}>{pokemonListOffset - pokemonListLimit*2}</button>}
                {pokemonListOffset>=pokemonListLimit && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset - pokemonListLimit)}>{pokemonListOffset - pokemonListLimit}</button>}
                <button className={styles.buttonNav}>{pokemonListOffset}</button>
                {pokemonListOffset<=1025-pokemonListLimit && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset + pokemonListLimit)}>{pokemonListOffset + pokemonListLimit}</button>}
                {pokemonListOffset<=1025-pokemonListLimit*2 && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset + pokemonListLimit*2)}>{pokemonListOffset + pokemonListLimit*2}</button>}
                {pokemonListOffset<=1025-pokemonListLimit && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset + pokemonListLimit)}>&gt;</button>}
            </nav>
            <section className={styles.numberPokemons}>
                <button className={styles.buttonNav} onClick={() => setPokemonListLimit(10)}>10</button>
                <button className={styles.buttonNav} onClick={() => setPokemonListLimit(20)}>20</button>
                <button className={styles.buttonNav} onClick={() => setPokemonListLimit(30)}>30</button>
            </section>
            <form className={styles.searchPokemon} action={goToPokemon}>
                <input type="text" name='pokemonList' />
                <button className={styles.buttonNav} type="submit">Go</button>
            </form>
        </div>
               
    )
}