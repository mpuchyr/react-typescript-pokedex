export interface IPokemon {
    id: number;
    name: string;
    front_sprite: string;
    front_shiny: string;
    types: any[];
    setMainPokemon?: any;
}

export interface IPokemonList {
    name: string;
    url: string;
    setMainPokemon: any;
}