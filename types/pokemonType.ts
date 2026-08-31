export interface PokemonType {
    name: string;
    url: string;
}

export interface PokemonDetail {
    name: string;
    sprites: {
        front_default: string;
    };
}

export interface PokemonUrl {
    url: string;
}