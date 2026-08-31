"use client"

import { useEffect, useState } from "react";

import { PokemonDetail, PokemonUrl } from "@/types/pokemonType";

export function useGetPokemon({pokemonListLimit, pokemonListOffset}: {pokemonListLimit: number, pokemonListOffset: number}) {
    const [urls, setUrls] = useState<string[]>([]);
    const [data, setData] = useState<PokemonDetail[]>([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonListLimit}&offset=${pokemonListOffset}`)
            .then((response) => response.json())
            .then((data) => setUrls(data.results.map((pokemon: PokemonUrl) => pokemon.url)))
        
        
    },[pokemonListLimit, pokemonListOffset])

    useEffect(() => {
        Promise.all(urls.map((url) => 
            fetch(url)
            .then((response) => response.json())))
            .then((data) => setData(data));
    }, [urls]);

    return { data };
}

export function useGetRandomPokemon(){
    const [data, setData] = useState<PokemonDetail | null>(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025) + 1}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [])
    
    return { data };
}