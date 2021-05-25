export interface IPokemon {
    id: number;
    name: string;
    front_sprite: string;
    front_shiny: string;
    types: any[];
    fn?: any
}

export interface IPokemonList {
    name: string;
    url: string;
    fn?: any
}