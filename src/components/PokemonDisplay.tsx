import React, { useEffect, useState } from 'react';
import { IPokemonList, IPokemon } from '../Interface/Interfaces';

const PokemonDisplay = ({ name, url }: IPokemonList) => {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null)
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        const catchPokemon = (): void => {
            fetch(`${url}`)
                .then(res => res.json())
                .then(pkmn => {
                    const mon: IPokemon = {
                        name: pkmn.name,
                        id: pkmn.id,
                        front_sprite: `${pkmn.sprites.front_default}`,
                        front_shiny: `${pkmn.sprites.front_shiny}`,
                        types: pkmn.types
                    }
                    setPokemon(mon)
                    setLoading(false)
                })
        }

        catchPokemon()
    },[])

    const displayPokemonInfo = () => {
        if (pokemon) {
            const name: string = pokemon.name[0].toUpperCase() + pokemon.name.slice(1, )
            const sprite: string = pokemon.front_sprite
            console.log(sprite)
            return (
                <>    
                    <img src={sprite} />
                    <h2>{pokemon.id}. {name}</h2>
                </>
            )
        }   
    }
    
    return (
        <div className='pokemon-display'>
            {loading && <p>loading...</p>}
            {pokemon && displayPokemonInfo()}
        </div>
    )
}

export default PokemonDisplay