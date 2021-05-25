import React, { useEffect, useState } from 'react';
import { IPokemon } from '../Interface/Interfaces';
import PokemonDisplay from './PokemonDisplay';

const LargePokemonDisplay = ( {pokemonInfo}: any): React.ReactElement => {
    const [sprite, setSprite] = useState<string>('')

    useEffect(() => {
        setSprite(pokemonInfo.front_sprite)
        
    }, [pokemonInfo.id])

    const handleSpriteChange = (): void => {

        if (sprite === pokemonInfo.front_sprite) {
            setSprite(pokemonInfo.front_shiny)
        } else {
            setSprite(pokemonInfo.front_sprite)
        }
    }

        
        return (
            <div>
                <img src={sprite} onClick={handleSpriteChange}/>
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

export default LargePokemonDisplay