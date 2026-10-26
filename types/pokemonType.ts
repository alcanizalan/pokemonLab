export interface PokemonType {
    name: string;
    url: string;
}

export interface PokemonDetail {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}

export interface PokemonUrl {
    url: string;
}