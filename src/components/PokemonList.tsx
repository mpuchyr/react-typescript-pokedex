import React, { useEffect, useState } from 'react';
import { IPokemon, IPokemonList } from '../Interface/Interfaces';
import PokemonDisplay from './PokemonDisplay';
import PokeballLoader from './PokeballLoader';
import LargePokemonDisplay from './LargePokemonDisplay';



const PokemonList = (): React.ReactElement => {
    const [pokemon, setPokemon] = useState<IPokemonList[] | null>(null)
    const [loading, setLoading] = useState<Boolean> (true)
    const [pokemonInfo, setPokemonInfo] = useState<IPokemon>({ name: '', id: 0, types: [''], front_shiny: '', front_sprite: ''})



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
                    <PokemonDisplay key={index+1} name={pkmn.name} url={pkmn.url} setPokemonInfo={setPokemonInfo}/>
                )
            })
        }
    }




    return (
        <div className="pokemon-list-container">
            <div className="pokemon-list-header">
                <h1>Pokédex</h1>
            </div>
            {console.log(pokemonInfo)}
            <LargePokemonDisplay pokemonInfo={pokemonInfo}/>
            <div className="pokemon-list">
                {loading && <PokeballLoader />}
                {pokemon && showPokemon()}
            </div>
        </div>
    )
}

export default PokemonList