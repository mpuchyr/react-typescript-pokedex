import React from 'react';
import { IPokemon } from '../Interface/Interfaces';
import PokemonDisplay from './PokemonDisplay';

const LargePokemonDisplay = ( {pokemonInfo}: any): React.ReactElement => {
    
    if (pokemonInfo.id === 0) {
        return (
            <div>
                Select a pokemon
            </div>
        )
    } else {
        return (
            <div>
                <img src={pokemonInfo.front_sprite} />
                <h1>{pokemonInfo.id}. {pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1, )}</h1>
                <ul>
                    {pokemonInfo.types.map((monType: any) => {
                        return (
                            <li>{monType.type.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default LargePokemonDisplay