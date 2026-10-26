
import Image from "next/image";
import Link from "next/link";
import PokemonModal from "@/components/shared/pokemon-modal/pokemon-modal";
import { getPokemonByIdOrName } from "@/service/get-pokemon";
import styles from "./page.module.css";

export default async function PokemonModalPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const pokemon = await getPokemonByIdOrName(id);

    return (
        <PokemonModal>
            <article className={styles.pokemonContainer}>
                <div className={styles.pokemonImageContainer}>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={800}
                    height={800}
                    className={styles.pokemonImage}
                    unoptimized
                    />  
                </div>
                
                <pre>{pokemon.name}</pre>
                <div className={styles.pokemonStatsContainer}>
                    {pokemon.stats.map((stat) => (
                        <div key={stat.stat.name} className={styles.pokemonStat}>
                            <span className={styles.pokemonStatLabel}>
                                {stat.stat.name == 'attack' ? 'ATK' : stat.stat.name == 'defense' ? 'DEF' : stat.stat.name == 'hp' ? 'HP' : stat.stat.name == 'special-attack' ? 'SPA' : stat.stat.name == 'special-defense' ? 'SP. DEF' : stat.stat.name == 'speed' ? 'SPE' : stat.stat.name.toUpperCase()}: {stat.base_stat}
                            </span>
                            <div className={styles.pokemonStatBarContainer}>
                                <div className={styles.pokemonStatBar} style={{ width: `${(stat.base_stat / 255) * 100}%`, backgroundColor: `${stat.base_stat > 120 ? '#76c7c0' : stat.base_stat > 60 ? '#f7b32b' : '#e63946'}` }}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href={`/pokedex/${id}`}>View Full Details</Link>
            </article>
        </PokemonModal>
    );
}
