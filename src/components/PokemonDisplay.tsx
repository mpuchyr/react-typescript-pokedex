import React, { useEffect, useState } from 'react';
import { IPokemonList, IPokemon } from '../Interface/Interfaces';

const PokemonDisplay = ({ name, url }: IPokemonList): React.ReactElement => {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null)
    const [loading, setLoading] = useState<Boolean>(true)
    const [componentClass, setComponentClass] = useState<string>('pokemon-display')

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

    const displayPokemonInfo = (): React.ReactNode => {
        if (pokemon) {
            const name: string = pokemon.name[0].toUpperCase() + pokemon.name.slice(1, )
            const sprite: string = pokemon.front_sprite
            return (
                <>    
                    <img src={sprite} />
                    <h2>{pokemon.id}. {name}</h2>
                    {componentClass === 'large-pokemon-display' && displayPokemonTypes()}
                </>
            )
        }   
    }

    const displayPokemonTypes = (): React.ReactNode => {
        return (
            <ul>
                {pokemon?.types.map(monType => {
                    return (
                        <li key={monType.type.name}>{monType.type.name}</li>
                    )
                })}
            </ul>
        )
    }

    const handleClick = () => {
        if (componentClass === 'pokemon-display') {
            setComponentClass('large-pokemon-display')
        } else {
            setComponentClass('pokemon-display')
        }
    }
    
    return (
        <div className={componentClass} onClick={handleClick}>
            {loading && <p>loading...</p>}
            {pokemon && displayPokemonInfo()}
        </div>
    )
}

export default PokemonDisplay