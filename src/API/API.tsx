const totalPokemon: number = 151;

export interface IPokemon {
    id: number;
    name: string;
    image: string;
    types: string[];
}

const getPokemon = async (id: number): Promise<IPokemon> => {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: any = await data.json()
    const pokemonToReturn: IPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: `${pokemon.sprites.front_default}`,
        types: pokemon.types
    }

    return pokemonToReturn
}

export const fetchPokemonList = (numOfPokemon: number): IPokemon[] => {
   let pokemonList: IPokemon[] = []
   for (let i = 1; i <= numOfPokemon; i++) {
       const mon: any = getPokemon(i)
       pokemonList.push(mon)
   }
   return pokemonList
}