import { useEffect, useState } from 'react';
import { IPokemonList } from '../Interface/Interfaces';
import PokemonDisplay from './PokemonDisplay';



const PokemonList = () => {
    const [pokemon, setPokemon] = useState<IPokemonList[] | null>(null)
    const [loading, setLoading] = useState<Boolean> (true)


    useEffect(() => {
        const fetchPokemon = (numOfPokemon: number): void => {
            try {
                fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numOfPokemon}`)
                .then(res => res.json())
                .then(data => {
                    setPokemon(data.results)
                    setLoading(false)
                })
            } catch {
                console.log("An error has occurred")
            }

        }

        fetchPokemon(251)
    }, [])

    const showPokemon = () => {
        if (pokemon) {
            return pokemon.map((pkmn, index) => {
                return (
                    <PokemonDisplay key={index+1} name={pkmn.name} url={pkmn.url}/>
                )
            })
        }
    }




    return (
        <div>
            {loading && <p>Loading...</p>}
            {pokemon && showPokemon()}
        </div>
    )
}

export default PokemonList