
import Image from "next/image";
import { getPokemonByIdOrName } from "@/service/get-pokemon";
import styles from "./page.module.css";

export default async function PokemonPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const pokemon = await getPokemonByIdOrName(id);

    console.log(pokemon);

    return (
        <section className={styles.pokemonPageContainer}>
            <article className={styles.pokemonContainer}>
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
                    {pokemon.stats.map((stat) => (
                        <span key={stat.stat.name}>
                            {stat.stat.name == 'attack' ? 'ATK' : stat.stat.name == 'defense' ? 'DEF' : stat.stat.name == 'hp' ? 'HP' : stat.stat.name == 'special-attack' ? 'SPA' : stat.stat.name == 'special-defense' ? 'SP. DEF' : stat.stat.name == 'speed' ? 'SPE' : stat.stat.name.toUpperCase()}: {stat.base_stat}
                        </span>
                    ))}
                </div>
            </article>
        </section>
    );
}
