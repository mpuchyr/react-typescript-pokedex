export interface IPokemon {
    id: number;
    name: string;
    front_sprite: string;
    front_shiny: string;
    types: any[];
}

export interface IPokemonList {
    name: string;
    url: string;
}