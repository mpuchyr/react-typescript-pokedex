export interface IPokemon {
    id: number;
    name: string;
    front_sprite: string;
    front_shiny: string;
    types: string[];
}

export interface IPokemonList {
    name: string;
    url: string;
}