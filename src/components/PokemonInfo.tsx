import React from 'react';
import { IPokemon } from '../Interface/Interfaces';

const PokemonInfo = (
    {
        id,
        name,
        front_sprite,
        front_shiny,
        types
    }: IPokemon
): React.ReactNode => {
    
    
    return (
        <div id={id.toString()} className="pokemon-display-large">
            Test
        </div>
    )
}

export default PokemonInfo