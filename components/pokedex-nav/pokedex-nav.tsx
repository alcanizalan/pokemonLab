import {useState} from 'react'

import styles from './pokedex-nav.module.css'

export default function PokedexNav({pokemonListLimit, setPokemonListLimit, pokemonListOffset, setPokemonListOffset}: {pokemonListLimit: number, setPokemonListLimit: (limit: number) => void, pokemonListOffset: number, setPokemonListOffset: (offset: number) => void}){

    return (
        <div>
            <nav className={styles.pokedexNav}>
                {pokemonListOffset>=pokemonListLimit && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset - pokemonListLimit)}>&lt;</button>}
                {pokemonListOffset>=pokemonListLimit*2 && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset - pokemonListLimit*2)}>{pokemonListOffset - pokemonListLimit*2}</button>}
                {pokemonListOffset>=pokemonListLimit && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset - pokemonListLimit)}>{pokemonListOffset - pokemonListLimit}</button>}
                <button className={styles.buttonNav}>{pokemonListOffset}</button>
                {pokemonListOffset<=1025-pokemonListLimit && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset + pokemonListLimit)}>{pokemonListOffset + pokemonListLimit}</button>}
                {pokemonListOffset<=1025-pokemonListLimit*2 && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset + pokemonListLimit*2)}>{pokemonListOffset + pokemonListLimit*2}</button>}
                {pokemonListOffset<=1025-pokemonListLimit && <button className={styles.buttonNav} onClick={() => setPokemonListOffset(pokemonListOffset + pokemonListLimit)}>&gt;</button>}
            </nav>
            <section>
                <button className={styles.buttonNav} onClick={() => setPokemonListLimit(10)}>10</button>
                <button className={styles.buttonNav} onClick={() => setPokemonListLimit(20)}>20</button>
                <button className={styles.buttonNav} onClick={() => setPokemonListLimit(30)}>30</button>
            </section>
            <form>
                <input type="number" value={pokemonListOffset} name='pokemonList' onChange={(e) => setPokemonListOffset(Number(e.target.value))}/>
                <button className={styles.buttonNav} onClick={(e) => { e.preventDefault(); setPokemonListOffset(Number((e.target as HTMLFormElement).pokemonList.value)); }}>Go</button>
            </form>
        </div>
               
    )
}